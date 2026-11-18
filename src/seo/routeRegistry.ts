import {
  ALL_COLLECTIONS,
  DISCOVERY_CATEGORIES,
  MOOD_RADIOS,
  READY_MADE_SETS,
  findCollectionByPath,
} from '../data/collections.ts';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ResolvedSeoMeta {
  status: 200 | 404;
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  ogImage: string;
  breadcrumbs: BreadcrumbItem[];
  jsonLd: Record<string, unknown>[];
  ssrContentHtml: string;
}

export function normalizePath(rawPath: string): string {
  const withoutQuery = rawPath.split('?')[0].split('#')[0];
  if (!withoutQuery || withoutQuery === '/') return '/';
  return withoutQuery.replace(/\/+$/, '') || '/';
}

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderSsrHtml(
  h1: string,
  description: string,
  links: { label: string; href: string }[],
): string {
  const linksHtml = links
    .map((l) => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`)
    .join('');
  return `<main data-ssr-seo="true" style="max-width:72rem;margin:0 auto;padding:2rem 1.5rem;color:#F8FAFC;font-family:system-ui,sans-serif;">
  <h1>${escapeHtml(h1)}</h1>
  <p>${escapeHtml(description)}</p>
  <ul>${linksHtml}</ul>
</main>`;
}

export function resolveRouteMeta(rawPath: string, origin: string): ResolvedSeoMeta {
  const path = normalizePath(rawPath);
  const cleanOrigin = origin.replace(/\/+$/, '');
  const ogImage = `${cleanOrigin}/images/vibebox-og-cover.svg`;

  const staticRoutes: Record<
    string,
    { title: string; description: string; h1: string; breadcrumbs: BreadcrumbItem[] }
  > = {
    '/': {
      title: 'VIBEBOX – Real Songs, Smart Auto-DJ & Party Music',
      description:
        'Play real Hindi, Punjabi, English, and Regional songs with ready-made party sets, mood radio stations, and official YouTube & preview playback.',
      h1: 'VIBEBOX – Real Songs, Smart Auto-DJ & Party Music',
      breadcrumbs: [{ name: 'Home', path: '/' }],
    },
    '/discover': {
      title: 'Discover Hindi, Punjabi, English & Regional Music | VIBEBOX',
      description:
        'Browse 22 curated real-song playlists across Bollywood Party, Punjabi Bhangra, English Pop, Tamil Kuthu, Telugu Mass, and more.',
      h1: 'Discover Real-Song Categories',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Discover', path: '/discover' },
      ],
    },
    '/party': {
      title: 'Ready-Made Party Sets & One-Click DJ Mixes | VIBEBOX',
      description:
        'Launch one-click party sets including House Party, Bollywood Night, Punjabi Night, Wedding Dance, Birthday Party, and College Party.',
      h1: 'Ready-Made Party Music Sets',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Party Sets', path: '/party' },
      ],
    },
    '/mood': {
      title: 'Mood Radio – Happy, Sad, Romantic, Chill & Night Drive | VIBEBOX',
      description:
        'Stream real songs across Happy Radio, Sad Radio, Romantic Radio, Chill Radio, Night Drive, Party Radio, Workout Radio, and Focus Radio.',
      h1: 'Mood-Based Radio Stations',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Mood Radio', path: '/mood' },
      ],
    },
    '/search': {
      title: 'Search Songs, Artists, Movies & Albums | VIBEBOX',
      description:
        'Search real songs by song title, artist, movie, album, language, genre, or mood with official sources.',
      h1: 'Search Real Songs',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
      ],
    },
    '/saved': {
      title: 'Saved Playlists & Favorites | VIBEBOX',
      description:
        'Access your locally saved favorite tracks and custom playlists stored in your browser with zero login.',
      h1: 'Saved Favorites & Custom Playlists',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Saved', path: '/saved' },
      ],
    },
    '/blogger-theme': {
      title: 'VIBEBOX Blogger XML Theme Download | VIBEBOX',
      description:
        'Download the complete, Blogger Layout v3 compatible VIBEBOX Auto-DJ XML theme with Web Audio crossfading and YouTube support.',
      h1: 'VIBEBOX Blogger XML Theme',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Blogger Theme XML', path: '/blogger-theme' },
      ],
    },
  };

  if (staticRoutes[path]) {
    const r = staticRoutes[path];
    const canonicalUrl = `${cleanOrigin}${path === '/' ? '/' : path}`;
    const links = [
      ...DISCOVERY_CATEGORIES.slice(0, 6).map((c) => ({ label: c.title, href: c.path })),
      ...READY_MADE_SETS.slice(0, 4).map((s) => ({ label: s.title, href: s.path })),
      ...MOOD_RADIOS.slice(0, 4).map((m) => ({ label: m.title, href: m.path })),
    ];
    return {
      status: 200,
      path,
      title: r.title,
      description: r.description,
      canonicalUrl,
      robots: path === '/search' || path === '/saved' ? 'noindex, follow' : 'index, follow',
      ogImage,
      breadcrumbs: r.breadcrumbs,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'VIBEBOX',
          url: `${cleanOrigin}/`,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'All',
          description: r.description,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      ],
      ssrContentHtml: renderSsrHtml(r.h1, r.description, links),
    };
  }

  const col = findCollectionByPath(path);
  if (col) {
    const canonicalUrl = `${cleanOrigin}${col.path}`;
    const parentMap: Record<string, BreadcrumbItem> = {
      category: { name: 'Discover', path: '/discover' },
      mood: { name: 'Mood Radio', path: '/mood' },
      set: { name: 'Party Sets', path: '/party' },
      language: { name: 'Discover', path: '/discover' },
      genre: { name: 'Discover', path: '/discover' },
    };
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', path: '/' },
      parentMap[col.kind] || { name: 'Discover', path: '/discover' },
      { name: col.title, path: col.path },
    ];
    const title = `${col.title} – Real Songs Playlist | VIBEBOX`;
    const description = `${col.subtitle} Listen with VIBEBOX Smart Auto-DJ using official music sources.`;
    return {
      status: 200,
      path,
      title,
      description,
      canonicalUrl,
      robots: 'index, follow',
      ogImage,
      breadcrumbs,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': col.kind === 'mood' ? 'RadioStation' : 'MusicPlaylist',
          name: col.title,
          url: canonicalUrl,
          description,
        },
      ],
      ssrContentHtml: renderSsrHtml(col.title, description, [
        { label: 'Discover All Categories', href: '/discover' },
        { label: 'Ready-Made Party Sets', href: '/party' },
        { label: 'Mood Radio', href: '/mood' },
      ]),
    };
  }

  return {
    status: 404,
    path,
    title: 'Page Not Found (404) | VIBEBOX',
    description: 'The requested VIBEBOX playlist or song station was not found.',
    canonicalUrl: `${cleanOrigin}${path}`,
    robots: 'noindex, nofollow',
    ogImage,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: '404', path },
    ],
    jsonLd: [],
    ssrContentHtml: renderSsrHtml('Playlist Not Found', 'Explore real-song VIBEBOX sets.', [
      { label: 'Home', href: '/' },
      { label: 'Party Sets', href: '/party' },
    ]),
  };
}

export function getAllIndexablePaths(): string[] {
  return [
    '/',
    '/discover',
    '/party',
    '/mood',
    ...ALL_COLLECTIONS.map((c) => c.path),
  ];
}

export function generateSitemapXml(origin: string): string {
  const cleanOrigin = origin.replace(/\/+$/, '');
  const lastMod = new Date().toISOString().split('T')[0];
  const urls = getAllIndexablePaths()
    .map((p) => {
      const loc = `${cleanOrigin}${p === '/' ? '/' : p}`;
      const priority = p === '/' || p === '/party' ? '1.0' : '0.8';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function generateRobotsTxt(origin: string): string {
  const cleanOrigin = origin.replace(/\/+$/, '');
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${cleanOrigin}/sitemap.xml\n`;
}
