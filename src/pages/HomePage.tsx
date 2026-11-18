import { Disc3, ExternalLink, Pause, Play, Radio, Shuffle, SkipForward, Zap } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { AdSenseSlot } from '../components/AdSenseSlot.tsx';
import { AlbumArtwork } from '../components/AlbumArtwork.tsx';
import { AudioVisualizer } from '../components/AudioVisualizer.tsx';
import { Link } from '../components/NavigationContext.tsx';
import {
  DISCOVERY_CATEGORIES,
  MOOD_RADIOS,
  READY_MADE_SETS,
  type CategoryGroup,
} from '../data/collections.ts';
import { REAL_SONGS, getSongsForCollection } from '../data/realCatalog.ts';

const GROUPS: CategoryGroup[] = ['Hindi', 'Punjabi', 'English', 'Regional'];

export function HomePage() {
  const {
    currentSong,
    activeCollectionTitle,
    activeSourceLabel,
    isPlaying,
    isCrossfading,
    prefs,
    togglePlayPause,
    nextSong,
    playCollection,
    toggleShuffle,
    jumpToHook,
    setPlaybackMode,
  } = usePlayer();

  const heroSong = currentSong ?? REAL_SONGS[0];
  const officialUrl =
    heroSong.sources.youtube?.officialUrl || heroSong.sources.itunesPreview?.officialUrl;

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
      {/* Immersive Real-Song Hero Stage */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121324] via-[#0B0D16] to-[#080A12] p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#9333EA]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2563EB]/20 blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: Real Song Artwork + Controls */}
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:col-span-7">
            <AlbumArtwork
              title={heroSong.title}
              artworkUrl={heroSong.artworkUrl}
              size="xl"
              isPlaying={isPlaying}
            />

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold tracking-wider text-[#38BDF8]">
                {activeCollectionTitle} · {activeSourceLabel}
              </p>

              <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
                Press Play. Let the Music Flow.
              </h1>

              <div className="mt-3 text-sm text-[#CBD5E1] sm:text-base">
                <span className="font-semibold text-white">{heroSong.title}</span> by{' '}
                <span>{heroSong.artist}</span>
                {heroSong.album ? (
                  <span className="text-[#94A3B8]">
                    {' '}
                    · {heroSong.album}
                    {heroSong.releaseYear ? ` (${heroSong.releaseYear})` : ''}
                  </span>
                ) : null}
                {isCrossfading && (
                  <span className="ml-2 font-mono-tabular text-xs text-[#38BDF8]">
                    · Crossfading
                  </span>
                )}
              </div>

              {officialUrl && (
                <div className="mt-1.5">
                  <a
                    href={officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#38BDF8] hover:underline"
                  >
                    <span>Open Official Song Source</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#9333EA]/30 whitespace-nowrap shrink-0 transition-transform active:scale-95 hover:brightness-110"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 fill-current" />
                      <span>Pause Flow</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-current" />
                      <span>Press Play</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={nextSong}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-white/10"
                >
                  <SkipForward className="h-4 w-4" />
                  <span>Next Song</span>
                </button>

                <button
                  type="button"
                  onClick={toggleShuffle}
                  aria-pressed={prefs.shuffle}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    prefs.shuffle
                      ? 'border-[#38BDF8] bg-[#2563EB]/20 text-white'
                      : 'border-white/15 bg-white/5 text-[#CBD5E1] hover:bg-white/10'
                  }`}
                >
                  <Shuffle className="h-4 w-4" />
                  <span>{prefs.shuffle ? 'Shuffle On' : 'Shuffle'}</span>
                </button>

                {prefs.playbackMode === 'youtube' && heroSong.hookStartSec ? (
                  <button
                    type="button"
                    onClick={jumpToHook}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#A855F7]/40 bg-[#9333EA]/15 px-4 py-3.5 text-sm font-semibold text-[#E9D5FF] whitespace-nowrap shrink-0 hover:bg-[#9333EA]/25"
                  >
                    <Zap className="h-4 w-4" />
                    <span>Jump to Hook</span>
                  </button>
                ) : null}

                <Link
                  to="/party"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-white/10"
                >
                  <Disc3 className="h-4 w-4 text-[#C084FC]" />
                  <span>10 Party Sets</span>
                </Link>
              </div>

              {/* Honest Playback Mode Toggle */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
                <span>Playback Engine:</span>
                <button
                  type="button"
                  onClick={() => setPlaybackMode('youtube')}
                  className={`font-semibold ${
                    prefs.playbackMode === 'youtube'
                      ? 'text-white underline decoration-[#A855F7] underline-offset-4'
                      : 'hover:text-white'
                  }`}
                >
                  Full Song (YouTube Official)
                </button>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => setPlaybackMode('preview-crossfade')}
                  className={`font-semibold ${
                    prefs.playbackMode === 'preview-crossfade'
                      ? 'text-white underline decoration-[#38BDF8] underline-offset-4'
                      : 'hover:text-white'
                  }`}
                >
                  30s Crossfade Mix (Web Audio)
                </button>
              </div>
            </div>
          </div>

          {/* Right: Visualizer Stage */}
          <div className="lg:col-span-5">
            <AudioVisualizer heightClass="h-48 sm:h-56" />
          </div>
        </div>
      </section>

      {/* Ready-Made One-Click Music Sets */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              Ready-Made Party Sets
            </h2>
            <p className="mt-1 text-sm text-[#94A3B8]">
              10 curated multi-track queues ready in one click—House Party, Bollywood Night, Punjabi Night, and more.
            </p>
          </div>
          <Link
            to="/party"
            className="text-sm font-semibold text-[#38BDF8] whitespace-nowrap shrink-0 hover:text-white"
          >
            All 10 Sets →
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {READY_MADE_SETS.slice(0, 5).map((setCol) => {
            const tracks = getSongsForCollection('set', setCol.id);
            const active = activeCollectionTitle === setCol.title && isPlaying;
            return (
              <div
                key={setCol.id}
                style={{
                  backgroundImage: `linear-gradient(145deg, ${setCol.accentFrom}24 0%, #0D101B 75%)`,
                }}
                className={`group flex flex-col justify-between rounded-2xl border p-4 transition-all ${
                  active
                    ? 'border-[#A855F7] shadow-lg shadow-[#9333EA]/20'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <AlbumArtwork
                      title={setCol.title}
                      artworkUrl={tracks[0]?.artworkUrl}
                      from={setCol.accentFrom}
                      to={setCol.accentTo}
                      size="sm"
                      isPlaying={active}
                    />
                    <button
                      type="button"
                      onClick={() => playCollection(setCol, 0)}
                      aria-label={`Play ${setCol.title}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gradient-to-r hover:from-[#9333EA] hover:to-[#2563EB]"
                    >
                      <Play className="h-4 w-4 translate-x-0.5 fill-current" />
                    </button>
                  </div>
                  <Link to={setCol.path} className="mt-3 block">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#C084FC]">
                      {setCol.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-[#94A3B8]">{setCol.subtitle}</p>
                  </Link>
                </div>
                <div className="mt-3 font-mono-tabular text-[11px] text-[#64748B]">
                  {tracks.length} real songs
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mood Radio Quick Launch */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              Mood Radio
            </h2>
            <p className="mt-1 text-sm text-[#94A3B8]">
              8 continuous stations playing real songs matched to your mood.
            </p>
          </div>
          <Link
            to="/mood"
            className="text-sm font-semibold text-[#C084FC] whitespace-nowrap shrink-0 hover:text-white"
          >
            All 8 Radios →
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {MOOD_RADIOS.map((mood) => {
            const tracks = getSongsForCollection('mood', mood.id);
            const active = activeCollectionTitle === mood.title && isPlaying;
            return (
              <div
                key={mood.id}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${mood.accentFrom}22 0%, ${mood.accentTo}18 100%)`,
                }}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 transition-all ${
                  active
                    ? 'border-[#38BDF8] shadow-lg shadow-[#2563EB]/20'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <Link to={mood.path} className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-[#38BDF8]">
                      {mood.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-[#94A3B8]">{mood.subtitle}</p>
                  </Link>
                  <button
                    type="button"
                    onClick={() => playCollection(mood, 0)}
                    aria-label={`Play ${mood.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#9333EA]"
                  >
                    {active ? (
                      <Radio className="h-4 w-4 text-[#38BDF8]" />
                    ) : (
                      <Play className="h-4 w-4 translate-x-0.5 fill-current" />
                    )}
                  </button>
                </div>
                <div className="mt-3 font-mono-tabular text-[11px] text-[#64748B]">
                  {tracks.length} songs
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AdSenseSlot />

      {/* 22 Real-Song Discovery Categories Grouped by Hindi / Punjabi / English / Regional */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              Discover Music Categories
            </h2>
            <p className="mt-1 text-sm text-[#94A3B8]">
              22 real-song stations across Hindi, Punjabi, English, and Indian Regional hits.
            </p>
          </div>
          <Link
            to="/discover"
            className="text-sm font-semibold text-[#38BDF8] whitespace-nowrap shrink-0 hover:text-white"
          >
            Browse All 22 →
          </Link>
        </div>

        <div className="mt-6 space-y-8">
          {GROUPS.map((groupName) => {
            const cats = DISCOVERY_CATEGORIES.filter((c) => c.group === groupName);
            return (
              <div key={groupName}>
                <h3 className="font-display text-lg font-bold text-[#E2E8F0]">{groupName}</h3>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cats.map((cat) => {
                    const tracks = getSongsForCollection('category', cat.id);
                    const active = activeCollectionTitle === cat.title && isPlaying;
                    return (
                      <div
                        key={cat.id}
                        className={`group flex items-center justify-between gap-4 rounded-2xl border bg-[#0D101B] p-4 transition-all ${
                          active
                            ? 'border-[#A855F7] shadow-lg shadow-[#9333EA]/20'
                            : 'border-white/10 hover:border-white/25'
                        }`}
                      >
                        <Link to={cat.path} className="flex min-w-0 flex-1 items-center gap-3.5">
                          <AlbumArtwork
                            title={cat.title}
                            artworkUrl={tracks[0]?.artworkUrl}
                            from={cat.accentFrom}
                            to={cat.accentTo}
                            size="md"
                            isPlaying={active}
                          />
                          <div className="min-w-0">
                            <div className="truncate font-display text-base font-bold text-white group-hover:text-[#C084FC]">
                              {cat.title}
                            </div>
                            <div className="mt-0.5 line-clamp-1 text-xs text-[#94A3B8]">
                              {cat.subtitle}
                            </div>
                            <div className="mt-1 font-mono-tabular text-[11px] text-[#64748B]">
                              {tracks.length} songs · {tracks[0]?.artist}
                            </div>
                          </div>
                        </Link>
                        <button
                          type="button"
                          onClick={() => playCollection(cat, 0)}
                          aria-label={`Play ${cat.title}`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gradient-to-r hover:from-[#9333EA] hover:to-[#2563EB]"
                        >
                          <Play className="h-4 w-4 translate-x-0.5 fill-current" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
