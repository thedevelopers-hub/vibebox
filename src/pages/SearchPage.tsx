import { useEffect, useState } from 'react';
import { Loader2, Play, Search } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import { Link } from '../components/NavigationContext.tsx';
import { SongRow } from '../components/SongRow.tsx';
import { ALL_COLLECTIONS } from '../data/collections.ts';
import { REAL_SONGS, type SongTrack } from '../data/realCatalog.ts';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

interface SearchResponse {
  curated: SongTrack[];
  live: SongTrack[];
}

export function SearchPage({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const [query, setQuery] = useState('');
  const [curatedSongs, setCuratedSongs] = useState<SongTrack[]>(REAL_SONGS.slice(0, 12));
  const [liveSongs, setLiveSongs] = useState<SongTrack[]>([]);
  const [loading, setLoading] = useState(false);
  const [resolvingId, setResolvingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const { playCollection, playSong, playSongWithAutoResolve } = usePlayer();

  const q = query.trim().toLowerCase();

  const matchedCollections = q
    ? ALL_COLLECTIONS.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          (c.group?.toLowerCase().includes(q) ?? false),
      )
    : ALL_COLLECTIONS.slice(0, 8);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setCuratedSongs(REAL_SONGS.slice(0, 12));
      setLiveSongs([]);
      setLoading(false);
      setErrorMsg('');
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Search request failed');
        const data = (await res.json()) as SearchResponse;
        setCuratedSongs(data.curated || []);
        setLiveSongs(data.live || []);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setErrorMsg('Live search is temporarily unavailable. Showing curated catalog matches.');
        }
      } finally {
        setLoading(false);
      }
    }, 280);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const handlePlayLive = async (song: SongTrack) => {
    setResolvingId(song.id);
    try {
      await playSongWithAutoResolve(song, liveSongs, `Search: ${query.trim()}`);
    } finally {
      setResolvingId(null);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        Search Real Songs, Artists &amp; Movies
      </h1>
      <p className="mt-2 text-sm text-[#94A3B8]">
        Search VIBEBOX&apos;s verified catalog and live Apple Music directory by song title,
        artist, movie, album, language, genre, or mood.
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0D101B] px-4 py-3.5 focus-within:border-[#A855F7]">
        <Search className="h-5 w-5 text-[#38BDF8]" aria-hidden="true" />
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Kesariya, AP Dhillon, Diljit, Eminem, Garba, Tamil, Wedding..."
          className="w-full bg-transparent text-sm text-white placeholder:text-[#64748B] focus:outline-none"
        />
        {loading && <Loader2 className="h-4 w-4 animate-spin text-[#C084FC]" />}
      </div>

      {errorMsg && <p className="mt-2 text-xs text-amber-400">{errorMsg}</p>}

      {/* Matching Playlists / Sets / Radios */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-white">
          {q ? 'Matching Categories, Sets & Mood Radios' : 'Popular Stations'}
        </h2>
        {matchedCollections.length === 0 ? (
          <p className="mt-3 text-sm text-[#94A3B8]">No matching stations found.</p>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {matchedCollections.map((col) => (
              <div
                key={col.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0D101B] p-4"
              >
                <Link to={col.path} className="min-w-0 flex-1">
                  <div className="truncate font-display text-sm font-bold text-white hover:text-[#38BDF8]">
                    {col.title}
                  </div>
                  <div className="truncate text-xs capitalize text-[#94A3B8]">
                    {col.group ? `${col.group} · ` : ''}
                    {col.kind}
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => playCollection(col, 0)}
                  aria-label={`Play ${col.title}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white"
                >
                  <Play className="h-3.5 w-3.5 translate-x-0.5 fill-current" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Curated Verified Songs */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-white">
          {q ? `Verified Catalog Matches (${curatedSongs.length})` : 'Featured Real Songs'}
        </h2>
        {curatedSongs.length === 0 ? (
          <p className="mt-3 text-sm text-[#94A3B8]">
            No curated catalog matches — check live official directory results below.
          </p>
        ) : (
          <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0D101B]">
            {curatedSongs.map((song, idx) => (
              <SongRow
                key={song.id}
                song={song}
                index={idx}
                onPlay={() =>
                  playSong(song, curatedSongs, q ? `Search: ${query.trim()}` : 'Featured Songs')
                }
              />
            ))}
          </div>
        )}
      </section>

      {/* Live Apple Music / YouTube Auto-Resolved Results */}
      {q && (
        <section className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl font-bold text-white">
              Live Official Directory Results ({liveSongs.length})
            </h2>
            <span className="text-xs text-[#94A3B8]">
              Clicking Play resolves an official embeddable YouTube video or plays the 30s Apple preview
            </span>
          </div>
          {loading && liveSongs.length === 0 ? (
            <p className="mt-3 text-sm text-[#94A3B8]">Searching live official music catalog...</p>
          ) : liveSongs.length === 0 ? (
            <p className="mt-3 text-sm text-[#94A3B8]">
              No additional live directory results found for &ldquo;{query.trim()}&rdquo;.
            </p>
          ) : (
            <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0D101B]">
              {liveSongs.map((song, idx) => (
                <SongRow
                  key={song.id}
                  song={song}
                  index={idx}
                  allowAutoResolve={true}
                  showHookTime={false}
                  resolvingId={resolvingId}
                  onPlay={() => void handlePlayLive(song)}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
