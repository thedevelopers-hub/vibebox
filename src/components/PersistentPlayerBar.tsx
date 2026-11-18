import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ExternalLink,
  Heart,
  ListMusic,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Repeat,
  Repeat1,
  Save,
  Shuffle,
  SkipBack,
  SkipForward,
  SlidersHorizontal,
  Volume2,
  VolumeX,
  X,
  Zap,
} from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { AlbumArtwork } from './AlbumArtwork.tsx';

function formatTime(sec: number): string {
  if (!Number.isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

export function PersistentPlayerBar() {
  const {
    queue,
    currentIndex,
    currentSong,
    upcomingSongs,
    activeCollectionTitle,
    activeSourceLabel,
    isPlaying,
    isCrossfading,
    currentTime,
    duration,
    unavailableNotice,
    clearUnavailableNotice,
    prefs,
    setPlaybackMode,
    setVolume,
    toggleMute,
    setCrossfadeSec,
    toggleShuffle,
    cycleRepeat,
    toggleHookStart,
    toggleAutoSkipUnavailable,
    isFavorite,
    toggleFavorite,
    saveQueueAsPlaylist,
    mountYoutubeEl,
    playSong,
    togglePlayPause,
    nextSong,
    previousSong,
    seek,
    jumpToHook,
    fallbackToPreviewNow,
  } = usePlayer();

  const [queueOpen, setQueueOpen] = useState(false);
  const [djSettingsOpen, setDjSettingsOpen] = useState(false);
  const [dockSize, setDockSize] = useState<'compact' | 'standard' | 'expanded'>('standard');
  const [playlistName, setPlaylistName] = useState('');
  const [savedFeedback, setSavedFeedback] = useState('');

  useEffect(() => {
    mountYoutubeEl('vibebox-yt-player');
  }, [mountYoutubeEl]);

  if (!currentSong) return null;

  const isFav = isFavorite(currentSong.id);
  const safeDuration = duration > 0 ? duration : currentSong.durationSec;
  const officialLink =
    prefs.playbackMode === 'preview-crossfade'
      ? currentSong.sources.itunesPreview?.officialUrl ||
        currentSong.sources.youtube?.officialUrl
      : currentSong.sources.youtube?.officialUrl ||
        currentSong.sources.itunesPreview?.officialUrl;

  const isYoutubeActive = prefs.playbackMode === 'youtube' && Boolean(currentSong.sources.youtube?.embeddable);

  const dockWidthClass =
    dockSize === 'expanded'
      ? 'w-[90vw] max-w-[440px]'
      : dockSize === 'compact'
        ? 'w-[210px]'
        : 'w-[260px] sm:w-[310px]';

  return (
    <>
      {/* Persistent Official YouTube Video Stage Dock (always mounted; visible during YouTube playback) */}
      <div
        aria-label="Official YouTube Player Stage"
        className={`fixed right-4 z-30 overflow-hidden rounded-2xl border border-white/15 bg-[#0A0C14]/95 shadow-2xl backdrop-blur-xl transition-all ${
          isYoutubeActive
            ? `bottom-[88px] lg:bottom-[96px] ${dockWidthClass} opacity-100`
            : 'pointer-events-none bottom-[96px] h-[113px] w-[200px] opacity-0 -z-10'
        }`}
      >
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-1.5 text-[11px] text-[#CBD5E1]">
          <span className="truncate font-medium">
            {currentSong.sources.youtube?.channelName || 'YouTube Official'}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {currentSong.sources.youtube?.officialUrl && (
              <a
                href={currentSong.sources.youtube.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Watch on official YouTube channel"
                className="rounded p-1 text-[#94A3B8] hover:bg-white/10 hover:text-white"
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            <button
              type="button"
              onClick={() =>
                setDockSize((s) =>
                  s === 'standard' ? 'expanded' : s === 'expanded' ? 'compact' : 'standard',
                )
              }
              aria-label="Resize video stage"
              className="rounded p-1 text-[#94A3B8] hover:bg-white/10 hover:text-white"
            >
              {dockSize === 'expanded' ? (
                <Minimize2 className="h-3 w-3" />
              ) : (
                <Maximize2 className="h-3 w-3" />
              )}
            </button>
          </div>
        </div>
        <div className="aspect-video w-full bg-black">
          <div id="vibebox-yt-player" className="h-full w-full" />
        </div>
      </div>

      {/* Honest Unavailable Stream Notice with Official Link & Preview Recovery */}
      {unavailableNotice && (
        <div
          role="alert"
          className="fixed bottom-24 left-4 z-50 max-w-md rounded-2xl border border-amber-400/35 bg-[#13111C]/95 p-4 text-xs text-[#F8FAFC] shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <div>
                <div className="font-semibold text-white">
                  {unavailableNotice.song.title} — Stream Unavailable
                </div>
                <p className="mt-1 leading-relaxed text-[#CBD5E1]">{unavailableNotice.reason}</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                  {unavailableNotice.song.sources.itunesPreview?.previewUrl && (
                    <button
                      type="button"
                      onClick={() => fallbackToPreviewNow(unavailableNotice.song)}
                      className="rounded-lg bg-[#9333EA] px-2.5 py-1 font-semibold text-white hover:brightness-110"
                    >
                      Play 30s Official Preview
                    </button>
                  )}
                  {unavailableNotice.song.sources.youtube?.officialUrl && (
                    <a
                      href={unavailableNotice.song.sources.youtube.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#38BDF8] hover:underline"
                    >
                      <span>Open Official Link</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={nextSong}
                    className="font-semibold text-[#CBD5E1] hover:text-white"
                  >
                    Skip Track →
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={clearUnavailableNotice}
              aria-label="Dismiss playback notice"
              className="rounded p-1 text-[#94A3B8] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Expandable Queue & Auto-DJ Settings Drawer */}
      {queueOpen && (
        <div
          role="dialog"
          aria-label="Upcoming Queue and Playback Settings"
          className="fixed inset-x-0 bottom-[82px] z-40 mx-auto max-w-3xl px-4 lg:bottom-[94px]"
        >
          <div className="max-h-[68vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0D101B]/95 p-5 text-[#F8FAFC] shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3.5">
              <div>
                <div className="text-xs font-medium text-[#C084FC]">
                  {activeCollectionTitle} · Track {currentIndex + 1} of {queue.length}
                </div>
                <h2 className="font-display text-lg font-bold text-white">
                  Auto-DJ Queue &amp; Source Engine
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setQueueOpen(false)}
                aria-label="Close queue"
                className="rounded-lg border border-white/10 p-1.5 text-[#94A3B8] hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Playback Source Engine Switcher & Honest Crossfade Controls */}
            <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold text-white">Playback Source Mode</div>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPlaybackMode('youtube')}
                    className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                      prefs.playbackMode === 'youtube'
                        ? 'bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white'
                        : 'border border-white/15 bg-white/5 text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Full Song (YouTube)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlaybackMode('preview-crossfade')}
                    className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                      prefs.playbackMode === 'preview-crossfade'
                        ? 'bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white'
                        : 'border border-white/15 bg-white/5 text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    30s Crossfade Mix
                  </button>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-[#94A3B8]">
                  {prefs.playbackMode === 'youtube'
                    ? 'Full official songs play via YouTube IFrame API (crossfade disabled due to embed restrictions).'
                    : 'Dual-deck Web Audio API crossfading active for authorized 30s Apple Music previews.'}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor="drawer-crossfade" className="font-semibold text-white">
                      Web Audio Crossfade
                    </label>
                    <span className="font-mono-tabular text-[#38BDF8]">
                      {prefs.playbackMode === 'preview-crossfade'
                        ? `${prefs.crossfadeSec}s`
                        : 'Preview Mode Only'}
                    </span>
                  </div>
                  <input
                    id="drawer-crossfade"
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

                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <label className="inline-flex cursor-pointer items-center gap-1.5 text-[#CBD5E1]">
                    <input
                      type="checkbox"
                      checked={prefs.hookStartEnabled}
                      onChange={toggleHookStart}
                      className="accent-[#A855F7]"
                    />
                    <span>Start from Hook</span>
                  </label>
                  <label className="inline-flex cursor-pointer items-center gap-1.5 text-[#CBD5E1]">
                    <input
                      type="checkbox"
                      checked={prefs.autoSkipUnavailable}
                      onChange={toggleAutoSkipUnavailable}
                      className="accent-[#38BDF8]"
                    />
                    <span>Auto-skip unavailable</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Save Active Queue to IndexedDB */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!playlistName.trim()) return;
                saveQueueAsPlaylist(playlistName);
                setSavedFeedback(`Saved "${playlistName.trim()}" locally.`);
                setPlaylistName('');
                window.setTimeout(() => setSavedFeedback(''), 3000);
              }}
              className="mt-4 flex flex-wrap items-center gap-2"
            >
              <input
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="Save current queue as a custom playlist..."
                className="min-w-[200px] flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-[#64748B]"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/15"
              >
                <Save className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span>Save Playlist</span>
              </button>
            </form>
            {savedFeedback && (
              <p className="mt-1.5 text-xs text-[#38BDF8]">{savedFeedback}</p>
            )}

            {/* Upcoming Songs */}
            <div className="mt-5">
              <div className="text-xs font-semibold text-[#94A3B8]">
                Up Next ({upcomingSongs.length} songs)
              </div>
              <ul className="mt-2 divide-y divide-white/5">
                {upcomingSongs.map((song, i) => (
                  <li key={`${song.id}-${i}`}>
                    <button
                      type="button"
                      onClick={() => playSong(song, queue, activeCollectionTitle)}
                      className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-white/5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="font-mono-tabular w-6 text-xs text-[#64748B]">
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </span>
                        <AlbumArtwork
                          title={song.title}
                          artworkUrl={song.artworkUrl}
                          size="sm"
                        />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-white">
                            {song.title}
                          </div>
                          <div className="truncate text-xs text-[#94A3B8]">
                            {song.artist} · {song.album}
                            {song.releaseYear ? ` · ${song.releaseYear}` : ''}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono-tabular shrink-0 text-xs text-[#94A3B8]">
                        {formatTime(song.durationSec)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile DJ Controls Popover */}
      {djSettingsOpen && !queueOpen && (
        <div className="fixed inset-x-4 bottom-24 z-40 rounded-2xl border border-white/15 bg-[#0D101B]/95 p-4 text-xs text-white shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between pb-2">
            <span className="font-semibold">Playback &amp; DJ Controls</span>
            <button
              type="button"
              onClick={() => setDjSettingsOpen(false)}
              aria-label="Close DJ settings"
            >
              <X className="h-4 w-4 text-[#94A3B8]" />
            </button>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPlaybackMode('youtube')}
              className={`rounded-lg px-3 py-2 font-semibold ${
                prefs.playbackMode === 'youtube'
                  ? 'bg-[#9333EA] text-white'
                  : 'bg-white/10 text-[#94A3B8]'
              }`}
            >
              Full Song (YouTube)
            </button>
            <button
              type="button"
              onClick={() => setPlaybackMode('preview-crossfade')}
              className={`rounded-lg px-3 py-2 font-semibold ${
                prefs.playbackMode === 'preview-crossfade'
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-white/10 text-[#94A3B8]'
              }`}
            >
              30s Crossfade
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={toggleShuffle}
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold ${
                prefs.shuffle ? 'bg-[#2563EB] text-white' : 'bg-white/10 text-[#94A3B8]'
              }`}
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span>Shuffle</span>
            </button>
            <button
              type="button"
              onClick={cycleRepeat}
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold ${
                prefs.repeatMode !== 'off'
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-white/10 text-[#94A3B8]'
              }`}
            >
              <Repeat className="h-3.5 w-3.5" />
              <span>Repeat: {prefs.repeatMode}</span>
            </button>
            {currentSong.hookStartSec && prefs.playbackMode === 'youtube' && (
              <button
                type="button"
                onClick={jumpToHook}
                className="inline-flex items-center gap-1 rounded-lg bg-[#9333EA]/25 px-3 py-1.5 font-semibold text-[#E9D5FF]"
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Jump to Hook</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Persistent Bottom Player Bar */}
      <aside
        aria-label="Persistent Music Player"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/12 bg-[#090B12]/95 backdrop-blur-xl"
      >
        <div className="px-4 pt-1.5 lg:hidden">
          <input
            type="range"
            aria-label="Track progress"
            min={0}
            max={safeDuration}
            step={0.5}
            value={Math.min(currentTime, safeDuration)}
            onChange={(e) => seek(Number(e.target.value))}
            className="vibe-slider block w-full"
          />
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:py-3">
          {/* Left: Track Artwork, Metadata & Official Attribution */}
          <div className="flex min-w-0 flex-1 items-center gap-3 lg:w-[31%] lg:flex-initial">
            <AlbumArtwork
              title={currentSong.title}
              artworkUrl={currentSong.artworkUrl}
              size="sm"
              isPlaying={isPlaying}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="truncate text-sm font-semibold text-white">
                  {currentSong.title}
                </div>
                {isCrossfading && (
                  <span className="shrink-0 font-mono-tabular text-[11px] font-medium text-[#38BDF8]">
                    Crossfading
                  </span>
                )}
              </div>
              <div className="truncate text-xs text-[#94A3B8]">
                {currentSong.artist}
                {currentSong.album ? ` · ${currentSong.album}` : ''}
                {currentSong.releaseYear ? ` (${currentSong.releaseYear})` : ''}
              </div>
              <div className="hidden sm:flex items-center gap-2 truncate text-[11px] text-[#64748B]">
                <span className="truncate">{activeSourceLabel}</span>
                {officialLink && (
                  <a
                    href={officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-[#38BDF8] hover:underline"
                  >
                    <span>Official</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => toggleFavorite(currentSong)}
              aria-label={isFav ? 'Remove from favorites' : 'Save to favorites'}
              className={`shrink-0 rounded-lg p-1.5 transition-colors ${
                isFav ? 'text-[#EC4899]' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Heart className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Center: Transport + Seek Timeline */}
          <div className="flex flex-col items-center gap-1.5 lg:w-[38%]">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={toggleShuffle}
                aria-pressed={prefs.shuffle}
                aria-label="Toggle shuffle"
                className={`hidden sm:inline-flex rounded-lg p-1.5 transition-colors ${
                  prefs.shuffle ? 'text-[#38BDF8]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Shuffle className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={previousSong}
                aria-label="Previous track"
                className="rounded-lg p-1.5 text-[#E2E8F0] hover:bg-white/10 hover:text-white"
              >
                <SkipBack className="h-4 w-4 fill-current" />
              </button>

              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause playback' : 'Play music'}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white shadow-lg shadow-[#9333EA]/30 transition-transform active:scale-95 hover:brightness-110"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 fill-current" />
                ) : (
                  <Play className="h-4 w-4 translate-x-0.5 fill-current" />
                )}
              </button>

              <button
                type="button"
                onClick={nextSong}
                aria-label="Next track"
                className="rounded-lg p-1.5 text-[#E2E8F0] hover:bg-white/10 hover:text-white"
              >
                <SkipForward className="h-4 w-4 fill-current" />
              </button>

              <button
                type="button"
                onClick={cycleRepeat}
                aria-label={`Repeat mode: ${prefs.repeatMode}`}
                className={`hidden sm:inline-flex rounded-lg p-1.5 transition-colors ${
                  prefs.repeatMode !== 'off' ? 'text-[#C084FC]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {prefs.repeatMode === 'one' ? (
                  <Repeat1 className="h-4 w-4" />
                ) : (
                  <Repeat className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="hidden w-full items-center gap-2.5 lg:flex">
              <span className="font-mono-tabular w-9 text-right text-[11px] text-[#94A3B8]">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                aria-label="Seek track timeline"
                min={0}
                max={safeDuration}
                step={0.5}
                value={Math.min(currentTime, safeDuration)}
                onChange={(e) => seek(Number(e.target.value))}
                className="vibe-slider flex-1"
              />
              <span className="font-mono-tabular w-9 text-[11px] text-[#94A3B8]">
                {formatTime(safeDuration)}
              </span>
            </div>
          </div>

          {/* Right: Source Mode, Hook Jump / Crossfade, Volume & Queue */}
          <div className="flex items-center justify-end gap-2 lg:w-[31%]">
            <button
              type="button"
              onClick={() =>
                setPlaybackMode(
                  prefs.playbackMode === 'youtube' ? 'preview-crossfade' : 'youtube',
                )
              }
              title={
                prefs.playbackMode === 'youtube'
                  ? 'Playing Full Songs via YouTube. Click for 30s Web Audio Crossfade Mix.'
                  : 'Playing 30s Previews with Web Audio Crossfade. Click for Full Songs.'
              }
              className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-[#E2E8F0] whitespace-nowrap shrink-0 hover:border-[#A855F7] hover:text-white"
            >
              <span>
                {prefs.playbackMode === 'youtube' ? 'Full Song' : `Fade ${prefs.crossfadeSec}s`}
              </span>
            </button>

            {prefs.playbackMode === 'youtube' && currentSong.hookStartSec ? (
              <button
                type="button"
                onClick={jumpToHook}
                title={`Jump to chorus/drop at ${formatTime(currentSong.hookStartSec)}`}
                className="hidden xl:inline-flex items-center gap-1 rounded-lg border border-[#A855F7]/40 bg-[#9333EA]/15 px-2.5 py-1.5 text-xs font-semibold text-[#E9D5FF] whitespace-nowrap shrink-0 hover:bg-[#9333EA]/25"
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Hook</span>
              </button>
            ) : null}

            <div className="hidden md:flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={prefs.muted ? 'Unmute audio' : 'Mute audio'}
                className="rounded-lg p-1.5 text-[#94A3B8] hover:text-white"
              >
                {prefs.muted || prefs.volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              <input
                type="range"
                aria-label="Volume"
                min={0}
                max={100}
                value={prefs.muted ? 0 : Math.round(prefs.volume * 100)}
                onChange={(e) => setVolume(Number(e.target.value) / 100)}
                className="vibe-slider w-16"
              />
            </div>

            <button
              type="button"
              onClick={() => setDjSettingsOpen((v) => !v)}
              aria-label="Playback and DJ settings"
              className="rounded-lg border border-white/10 p-2 text-[#94A3B8] hover:text-white lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                setDjSettingsOpen(false);
                setQueueOpen((v) => !v);
              }}
              aria-expanded={queueOpen}
              aria-label="Toggle upcoming queue"
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                queueOpen
                  ? 'border-[#38BDF8] bg-[#2563EB]/25 text-white'
                  : 'border-white/10 bg-white/5 text-[#E2E8F0] hover:bg-white/10'
              }`}
            >
              <ListMusic className="h-4 w-4" />
              <span className="hidden sm:inline">Queue</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
