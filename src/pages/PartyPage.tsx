import { Disc3, Pause, Play, Shuffle, SkipForward } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { AlbumArtwork } from '../components/AlbumArtwork.tsx';
import { AudioVisualizer } from '../components/AudioVisualizer.tsx';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import { Link } from '../components/NavigationContext.tsx';
import { SongRow } from '../components/SongRow.tsx';
import { READY_MADE_SETS } from '../data/collections.ts';
import { getSongsForCollection } from '../data/realCatalog.ts';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

export function PartyPage({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const {
    queue,
    currentSong,
    activeCollectionTitle,
    activeSourceLabel,
    isPlaying,
    isCrossfading,
    prefs,
    playCollection,
    playSong,
    togglePlayPause,
    nextSong,
    toggleShuffle,
    setPlaybackMode,
    setCrossfadeSec,
  } = usePlayer();

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
      <Breadcrumbs items={breadcrumbs} />

      {/* Party Sets Hero Stage */}
      <section className="relative overflow-hidden rounded-3xl border border-[#A855F7]/30 bg-gradient-to-br from-[#1A1033] via-[#0B0E1A] to-[#080B14] p-6 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C084FC]">
              <Disc3 className={`h-4 w-4 ${isPlaying ? 'animate-spin' : ''}`} />
              <span>10 READY-MADE PARTY SETS · REAL SONGS</span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              One Click. Instant Party Queue.
            </h1>
            <p className="mt-3 text-sm text-[#CBD5E1]">
              Select any ready-made set below to queue real Hindi, Punjabi, English, and Regional
              hits with nonstop Auto-DJ flow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={togglePlayPause}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#9333EA]/30 whitespace-nowrap shrink-0 hover:brightness-110"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="h-4 w-4 fill-current" />
              )}
              <span>{isPlaying ? 'Pause Set' : 'Start Playing'}</span>
            </button>

            <button
              type="button"
              onClick={nextSong}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <SkipForward className="h-4 w-4" />
              <span>Skip</span>
            </button>

            <button
              type="button"
              onClick={toggleShuffle}
              aria-pressed={prefs.shuffle}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold ${
                prefs.shuffle
                  ? 'border-[#38BDF8] bg-[#2563EB]/25 text-white'
                  : 'border-white/15 bg-white/5 text-[#CBD5E1]'
              }`}
            >
              <Shuffle className="h-4 w-4" />
              <span>Shuffle</span>
            </button>
          </div>
        </div>

        {/* All 10 One-Click Ready-Made Sets */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {READY_MADE_SETS.map((setCol) => {
            const tracks = getSongsForCollection('set', setCol.id);
            const selected = activeCollectionTitle === setCol.title;
            return (
              <div
                key={setCol.id}
                style={
                  selected
                    ? {
                        backgroundImage: `linear-gradient(135deg, ${setCol.accentFrom}44, ${setCol.accentTo}2A)`,
                      }
                    : undefined
                }
                className={`flex flex-col justify-between rounded-2xl border p-4 transition-all ${
                  selected
                    ? 'border-[#38BDF8] shadow-lg shadow-[#2563EB]/20'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <Link to={setCol.path} className="min-w-0 flex-1">
                    <h2 className="font-display text-base font-bold text-white hover:text-[#38BDF8]">
                      {setCol.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-xs text-[#94A3B8]">{setCol.subtitle}</p>
                  </Link>
                  <button
                    type="button"
                    onClick={() => playCollection(setCol, 0)}
                    aria-label={`Play ${setCol.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white hover:brightness-110"
                  >
                    <Play className="h-3.5 w-3.5 translate-x-0.5 fill-current" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span className="font-mono-tabular">{tracks.length} songs</span>
                  <Link to={setCol.path} className="text-[#CBD5E1] hover:text-white">
                    Open Set →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visualizer + Active Deck Controls */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <AudioVisualizer heightClass="h-56 sm:h-68" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#080A12]/80 p-5 lg:col-span-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#94A3B8]">ACTIVE PARTY DECK</span>
              {isCrossfading && (
                <span className="font-mono-tabular text-xs font-semibold text-[#38BDF8]">
                  Crossfading...
                </span>
              )}
            </div>

            {currentSong && (
              <div className="mt-4 flex items-center gap-3.5">
                <AlbumArtwork
                  title={currentSong.title}
                  artworkUrl={currentSong.artworkUrl}
                  size="md"
                  isPlaying={isPlaying}
                />
                <div className="min-w-0">
                  <div className="truncate font-display text-lg font-bold text-white">
                    {currentSong.title}
                  </div>
                  <div className="truncate text-xs text-[#94A3B8]">{currentSong.artist}</div>
                  <div className="mt-1 truncate text-[11px] text-[#C084FC]">
                    {activeSourceLabel}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 space-y-4 border-t border-white/10 pt-4">
              <div>
                <div className="text-xs font-semibold text-white">Playback Mode</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPlaybackMode('youtube')}
                    className={`rounded-lg px-2.5 py-2 text-xs font-semibold ${
                      prefs.playbackMode === 'youtube'
                        ? 'bg-[#9333EA] text-white'
                        : 'bg-white/10 text-[#94A3B8]'
                    }`}
                  >
                    Full Song (YT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlaybackMode('preview-crossfade')}
                    className={`rounded-lg px-2.5 py-2 text-xs font-semibold ${
                      prefs.playbackMode === 'preview-crossfade'
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-white/10 text-[#94A3B8]'
                    }`}
                  >
                    30s Crossfade
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <label htmlFor="party-crossfade" className="text-[#CBD5E1]">
                    Web Audio Crossfade
                  </label>
                  <span className="font-mono-tabular text-[#38BDF8]">
                    {prefs.playbackMode === 'preview-crossfade'
                      ? `${prefs.crossfadeSec}s`
                      : 'Preview Mode'}
                  </span>
                </div>
                <input
                  id="party-crossfade"
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  disabled={prefs.playbackMode !== 'preview-crossfade'}
                  value={prefs.crossfadeSec}
                  onChange={(e) => setCrossfadeSec(Number(e.target.value))}
                  className="vibe-slider mt-2 w-full disabled:opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Party Queue */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-white">
          Live Queue · {activeCollectionTitle} ({queue.length} songs)
        </h2>
        <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0D101B]">
          {queue.map((song, idx) => (
            <SongRow
              key={`${song.id}-${idx}`}
              song={song}
              index={idx}
              onPlay={() => playSong(song, queue, activeCollectionTitle)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
