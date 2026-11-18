import { Pause, Play, Shuffle, Zap } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { AlbumArtwork } from '../components/AlbumArtwork.tsx';
import { AudioVisualizer } from '../components/AudioVisualizer.tsx';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import { Link } from '../components/NavigationContext.tsx';
import { SongRow } from '../components/SongRow.tsx';
import {
  ALL_COLLECTIONS,
  type CollectionDefinition,
} from '../data/collections.ts';
import { getSongsForCollection } from '../data/realCatalog.ts';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

interface PlaylistPageProps {
  collection: CollectionDefinition;
  breadcrumbs: BreadcrumbItem[];
}

export function PlaylistPage({ collection, breadcrumbs }: PlaylistPageProps) {
  const {
    activeCollectionTitle,
    isPlaying,
    prefs,
    playCollection,
    playSong,
    togglePlayPause,
    toggleShuffle,
    toggleHookStart,
  } = usePlayer();

  const songs = getSongsForCollection(collection.kind, collection.id);
  const isThisCollectionPlaying = activeCollectionTitle === collection.title && isPlaying;
  const related = ALL_COLLECTIONS.filter(
    (c) => c.kind === collection.kind && c.id !== collection.id,
  ).slice(0, 4);

  const kindLabel =
    collection.kind === 'mood'
      ? 'Mood Radio'
      : collection.kind === 'set'
        ? 'Ready-Made Party Set'
        : `${collection.group || 'Curated'} Category`;

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
      <Breadcrumbs items={breadcrumbs} />

      <section
        style={{
          backgroundImage: `linear-gradient(135deg, ${collection.accentFrom}2A 0%, #0B0D16 65%)`,
        }}
        className="rounded-3xl border border-white/10 p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:col-span-7">
            <AlbumArtwork
              title={collection.title}
              artworkUrl={songs[0]?.artworkUrl}
              from={collection.accentFrom}
              to={collection.accentTo}
              size="lg"
              isPlaying={isThisCollectionPlaying}
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                {kindLabel} · {songs.length} real songs
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                {collection.title}
              </h1>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#CBD5E1]">
                {collection.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (isThisCollectionPlaying) {
                      togglePlayPause();
                    } else {
                      playCollection(collection, 0);
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#9333EA]/30 hover:brightness-110"
                >
                  {isThisCollectionPlaying ? (
                    <>
                      <Pause className="h-4 w-4 fill-current" />
                      <span>Pause Queue</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-current" />
                      <span>Play All Songs</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!prefs.shuffle) toggleShuffle();
                    const randomIdx =
                      songs.length > 0 ? Math.floor(Math.random() * songs.length) : 0;
                    playCollection(collection, randomIdx);
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Shuffle className="h-4 w-4" />
                  <span>Shuffle Play</span>
                </button>

                <button
                  type="button"
                  onClick={toggleHookStart}
                  aria-pressed={prefs.hookStartEnabled}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                    prefs.hookStartEnabled
                      ? 'border-[#38BDF8] bg-[#2563EB]/20 text-white'
                      : 'border-white/15 bg-white/5 text-[#CBD5E1] hover:bg-white/10'
                  }`}
                >
                  <Zap className="h-4 w-4 text-[#C084FC]" />
                  <span>{prefs.hookStartEnabled ? 'Hook Start ON' : 'Start from Hook'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AudioVisualizer heightClass="h-44" showModeSelector={false} />
          </div>
        </div>
      </section>

      {/* Tracklist with Official Attribution & Direct Links */}
      <section className="mt-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D101B]">
          <div className="divide-y divide-white/10">
            {songs.map((song, idx) => (
              <SongRow
                key={song.id}
                song={song}
                index={idx}
                onPlay={() => playSong(song, songs, collection.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Stations */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-white">More to Explore</h2>
          <div className="mt-3 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((col) => (
              <Link
                key={col.id}
                to={col.path}
                className="rounded-xl border border-white/10 bg-[#0D101B] p-4 transition-colors hover:border-white/25"
              >
                <div className="font-display text-sm font-bold text-white">{col.title}</div>
                <p className="mt-1 line-clamp-2 text-xs text-[#94A3B8]">{col.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
