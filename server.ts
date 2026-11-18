import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { REAL_SONGS, type SongTrack } from './src/data/realCatalog.ts';
import {
  generateRobotsTxt,
  generateSitemapXml,
  resolveRouteMeta,
  type ResolvedSeoMeta,
} from './src/seo/routeRegistry.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

function escapeAttr(val: string): string {
  return val
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function getRequestOrigin(req: express.Request): string {
  const configured = process.env.APP_URL?.trim();
  if (configured && configured !== 'MY_APP_URL') {
    return configured.replace(/\/+$/, '');
  }
  const proto =
    req.headers['x-forwarded-proto']?.toString().split(',')[0] || req.protocol || 'http';
  const host =
    req.headers['x-forwarded-host']?.toString().split(',')[0] ||
    req.get('host') ||
    `localhost:${PORT}`;
  return `${proto}://${host}`;
}

function buildInjectedHead(meta: ResolvedSeoMeta): string {
  const jsonLdTags = meta.jsonLd
    .map((schema) => `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join('\n');

  return `    <title>${escapeAttr(meta.title)}</title>
    <meta name="description" content="${escapeAttr(meta.description)}" />
    <meta name="robots" content="${escapeAttr(meta.robots)}" />
    <meta name="theme-color" content="#07080D" />
    <link rel="canonical" href="${escapeAttr(meta.canonicalUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="VIBEBOX" />
    <meta property="og:title" content="${escapeAttr(meta.title)}" />
    <meta property="og:description" content="${escapeAttr(meta.description)}" />
    <meta property="og:url" content="${escapeAttr(meta.canonicalUrl)}" />
    <meta property="og:image" content="${escapeAttr(meta.ogImage)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(meta.title)}" />
    <meta name="twitter:description" content="${escapeAttr(meta.description)}" />
    <meta name="twitter:image" content="${escapeAttr(meta.ogImage)}" />
${jsonLdTags}`;
}

function applySeoToTemplate(template: string, meta: ResolvedSeoMeta): string {
  let html = template.replace(
    /<title>[\s\S]*?<!--VIBEBOX_SEO_HEAD-->/,
    `${buildInjectedHead(meta)}`,
  );
  html = html.replace('<!--VIBEBOX_SSR_CONTENT-->', meta.ssrContentHtml);
  return html;
}

interface ItunesResult {
  trackId?: number;
  trackName?: string;
  artistName?: string;
  collectionName?: string;
  releaseDate?: string;
  primaryGenreName?: string;
  artworkUrl100?: string;
  trackTimeMillis?: number;
  previewUrl?: string;
  trackViewUrl?: string;
}

async function fetchItunesSongs(query: string, country: string, limit: number): Promise<SongTrack[]> {
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      query,
    )}&country=${country}&media=music&entity=song&limit=${limit}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = (await res.json()) as { results?: ItunesResult[] };
    return (data.results || [])
      .filter((r) => r.trackName && r.artistName)
      .map((r) => {
        const title = r.trackName || 'Unknown Track';
        const artist = r.artistName || 'Unknown Artist';
        return {
          id: `itunes-${r.trackId ?? `${title}-${artist}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
          title,
          artist,
          album: r.collectionName || 'Single',
          releaseYear: r.releaseDate ? Number(r.releaseDate.slice(0, 4)) || null : null,
          genre: r.primaryGenreName || 'Music',
          language: country === 'IN' ? 'Indian / Global' : 'Global',
          moods: [],
          categories: [],
          sets: [],
          artworkUrl: (r.artworkUrl100 || '').replace('100x100bb', '600x600bb'),
          durationSec: Math.round((r.trackTimeMillis || 210000) / 1000),
          sources: {
            itunesPreview: r.previewUrl
              ? {
                  previewUrl: r.previewUrl,
                  officialUrl:
                    r.trackViewUrl ||
                    `https://music.apple.com/search?term=${encodeURIComponent(`${title} ${artist}`)}`,
                }
              : undefined,
          },
        };
      });
  } catch {
    return [];
  }
}

async function resolveEmbeddableYoutubeVideo(
  query: string,
): Promise<{
  videoId: string;
  channelName: string;
  officialUrl: string;
  embeddable: boolean;
  title?: string;
} | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(`${query} official`)}`,
      { headers: { 'User-Agent': 'Mozilla/5.0' } },
    );
    const html = await res.text();
    const ids = [...new Set([...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map((m) => m[1]))].slice(0, 5);
    for (const vid of ids) {
      const [oeRes, embRes] = await Promise.all([
        fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`),
        fetch(`https://www.youtube.com/embed/${vid}`, { headers: { 'User-Agent': 'Mozilla/5.0' } }),
      ]);
      if (!oeRes.ok) continue;
      const embHtml = await embRes.text();
      const blocked =
        embHtml.includes('Playback on other websites has been disabled') ||
        embHtml.includes('"status":"UNPLAYABLE"');
      if (!blocked) {
        const oe = (await oeRes.json()) as { title?: string; author_name?: string };
        return {
          videoId: vid,
          channelName: oe.author_name || 'YouTube Official',
          officialUrl: `https://www.youtube.com/watch?v=${vid}`,
          embeddable: true,
          title: oe.title,
        };
      }
    }
    return null;
  } catch {
    return null;
  }
}

async function searchYoutubeOfficialSongs(query: string, limit = 8): Promise<SongTrack[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(`${query} official song`)}`,
      { headers: { 'User-Agent': 'Mozilla/5.0' } },
    );
    const html = await res.text();
    const ids = [
      ...new Set([...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map((m) => m[1])),
    ].slice(0, limit + 4);

    const checks = await Promise.all(
      ids.map(async (vid): Promise<SongTrack | null> => {
        try {
          const [oeRes, embRes] = await Promise.all([
            fetch(
              `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json`,
            ),
            fetch(`https://www.youtube.com/embed/${vid}`, {
              headers: { 'User-Agent': 'Mozilla/5.0' },
            }),
          ]);
          if (!oeRes.ok) return null;
          const embHtml = await embRes.text();
          const blocked =
            embHtml.includes('Playback on other websites has been disabled') ||
            embHtml.includes('"status":"UNPLAYABLE"');
          if (blocked) return null;
          const oe = (await oeRes.json()) as { title?: string; author_name?: string };
          const rawTitle = oe.title || 'Official Song';
          const channel = oe.author_name || 'YouTube Official';
          const cleanArtist = channel.replace(/ - Topic$/i, '').trim();
          return {
            id: `yt-${vid}`,
            title: rawTitle,
            artist: cleanArtist,
            album: 'Official Release',
            releaseYear: null,
            genre: 'Music Video',
            language: 'Global',
            moods: [],
            categories: [],
            sets: [],
            artworkUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
            durationSec: 210,
            sources: {
              youtube: {
                videoId: vid,
                channelName: channel,
                officialUrl: `https://www.youtube.com/watch?v=${vid}`,
                embeddable: true,
              },
            },
          };
        } catch {
          return null;
        }
      }),
    );

    return checks.filter((x): x is SongTrack => x !== null).slice(0, limit);
  } catch {
    return [];
  }
}

async function startServer() {
  const app = express();
  app.set('trust proxy', true);

  // Live Real-Song Search Endpoint (curated verified catalog + iTunes + YouTube Official fallback)
  app.get('/api/search', async (req, res) => {
    const q = String(req.query.q || '').trim();
    if (!q) {
      res.json({ curated: REAL_SONGS.slice(0, 12), live: [] });
      return;
    }

    const ql = q.toLowerCase();
    const curated = REAL_SONGS.filter(
      (s) =>
        s.title.toLowerCase().includes(ql) ||
        s.artist.toLowerCase().includes(ql) ||
        s.album.toLowerCase().includes(ql) ||
        s.genre.toLowerCase().includes(ql) ||
        s.language.toLowerCase().includes(ql) ||
        s.moods.some((m) => m.toLowerCase().includes(ql)) ||
        s.categories.some((c) => c.toLowerCase().includes(ql)),
    );

    const [inRes, usRes] = await Promise.all([
      fetchItunesSongs(q, 'IN', 10),
      fetchItunesSongs(q, 'US', 8),
    ]);

    const seen = new Set(
      curated.map((c) => `${c.title.toLowerCase()}::${c.artist.toLowerCase().split(',')[0].trim()}`),
    );
    const seenYtIds = new Set(
      curated.map((c) => c.sources.youtube?.videoId).filter((v): v is string => Boolean(v)),
    );
    const live: SongTrack[] = [];
    for (const item of [...inRes, ...usRes]) {
      const key = `${item.title.toLowerCase()}::${item.artist.toLowerCase().split(',')[0].trim()}`;
      if (!seen.has(key)) {
        seen.add(key);
        live.push(item);
      }
    }

    if (live.length === 0) {
      const ytSongs = await searchYoutubeOfficialSongs(q, 8);
      for (const ytItem of ytSongs) {
        const vid = ytItem.sources.youtube?.videoId;
        if (vid && !seenYtIds.has(vid)) {
          seenYtIds.add(vid);
          live.push(ytItem);
        }
      }
    }

    res.json({ curated, live: live.slice(0, 16) });
  });

  // On-demand official embeddable YouTube lookup for live-searched tracks
  app.get('/api/resolve-youtube', async (req, res) => {
    const q = String(req.query.q || '').trim();
    if (!q) {
      res.status(400).json({ error: 'Query required' });
      return;
    }
    const yt = await resolveEmbeddableYoutubeVideo(q);
    if (!yt) {
      res.status(404).json({ error: 'No embeddable official YouTube video found for this query.' });
      return;
    }
    res.json({ youtube: yt });
  });

  app.get('/robots.txt', (req, res) => {
    const origin = getRequestOrigin(req);
    res.type('text/plain; charset=utf-8').send(generateRobotsTxt(origin));
  });

  app.get('/sitemap.xml', (req, res) => {
    const origin = getRequestOrigin(req);
    res.type('application/xml; charset=utf-8').send(generateSitemapXml(origin));
  });

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'vibebox-real-music', tracks: REAL_SONGS.length });
  });

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      try {
        const origin = getRequestOrigin(req);
        const meta = resolveRouteMeta(req.originalUrl, origin);
        const rawTemplate = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const transformed = await vite.transformIndexHtml(req.originalUrl, rawTemplate);
        const finalHtml = applySeoToTemplate(transformed, meta);
        res.status(meta.status).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir, { index: false }));
    const prodTemplate = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');

    app.use('*', (req, res) => {
      const origin = getRequestOrigin(req);
      const meta = resolveRouteMeta(req.originalUrl, origin);
      const finalHtml = applySeoToTemplate(prodTemplate, meta);
      res.status(meta.status).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VIBEBOX 2.0 server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
