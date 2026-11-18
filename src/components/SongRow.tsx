import { useState } from 'react';
import { ExternalLink, Heart, ListPlus, Play } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import type { SongTrack } from '../data/realCatalog.ts';
import { AlbumArtwork } from './AlbumArtwork.tsx';

function formatDuration(sec: number): string {
  if (!Number.isFinite(sec) || sec <= 0) return '3:30';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

interface SongRowProps {
  song: SongTrack;
  index: number;
  onPlay: () => void;
  allowAutoResolve?: boolean;
  showHookTime?: boolean;
  resolvingId?: string | null;
}

export function SongRow({
  song,
  index,
  onPlay,
  allowAutoResolve = false,
  showHookTime = true,
  resolvingId = null,
}: SongRowProps) {
  const { currentSong, isPlaying, isFavorite, toggleFavorite, customPlaylists, addSongToPlaylist } =
    usePlayer();
  const [menuOpen, setMenuOpen] = useState(false);

  const isCurrent = currentSong?.id === song.id;
  const fav = isFavorite(song.id);
  const hasYoutube = Boolean(song.sources.youtube?.embeddable);
  const hasPreview = Boolean(song.sources.itunesPreview?.previewUrl);
  const isPlayable = hasYoutube || hasPreview || allowAutoResolve;
  const isResolving = resolvingId === song.id;

  const providerLabel = hasYoutube
    ? `YouTube Official · ${song.sources.youtube?.channelName}`
    : hasPreview
      ? 'Apple Music 30s Preview'
      : allowAutoResolve
        ? 'Apple Music Metadata (Resolves Official Video)'
        : 'Unavailable';

  const officialUrl =
    song.sources.youtube?.officialUrl || song.sources.itunesPreview?.officialUrl;

  return (
    <div
      className={`relative flex flex-col gap-3 px-4 py-3.5 transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between sm:px-6 ${
        isCurrent ? 'bg-[#9333EA]/15' : ''
      }`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3.5">
        <span className="font-mono-tabular w-6 shrink-0 text-xs text-[#64748B]">
          {isCurrent && isPlaying ? '▶' : index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>

        <button
          type="button"
          disabled={!isPlayable || isResolving}
          onClick={onPlay}
          aria-label={isPlayable ? `Play ${song.title}` : `${song.title} unavailable`}
          className="group relative shrink-0 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <AlbumArtwork
            title={song.title}
            artworkUrl={song.artworkUrl}
            size="sm"
            isPlaying={isCurrent && isPlaying}
          />
          {isPlayable && (
            <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/45 opacity-0 transition-opacity group-hover:opacity-100">
              <Play className="h-4 w-4 fill-current text-white" />
            </span>
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={!isPlayable || isResolving}
              onClick={onPlay}
              className={`truncate text-left text-sm font-semibold hover:underline underline-offset-4 disabled:cursor-not-allowed ${
                isCurrent ? 'text-[#C084FC]' : 'text-white'
              }`}
            >
              {song.title}
            </button>
            {isResolving && (
              <span className="font-mono-tabular shrink-0 text-[11px] text-[#38BDF8]">
                Loading stream...
              </span>
            )}
          </div>

          <div className="truncate text-xs text-[#CBD5E1]">
            {song.artist}
            {song.album ? ` · ${song.album}` : ''}
            {song.releaseYear ? ` (${song.releaseYear})` : ''}
          </div>

          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[11px] text-[#94A3B8]">
            <span>{song.language}</span>
            <span aria-hidden="true">·</span>
            <span>{song.genre}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#CBD5E1]">{providerLabel}</span>
            {showHookTime && song.hookStartSec ? (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular text-[#38BDF8]">
                  Hook {formatDuration(song.hookStartSec)}
                </span>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pl-9 sm:justify-end sm:pl-0 shrink-0">
        {officialUrl && (
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-[#38BDF8] hover:underline"
          >
            <span>Listen Official</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}

        <span className="font-mono-tabular text-xs text-[#94A3B8]">
          {formatDuration(song.durationSec)}
        </span>

        {customPlaylists.length > 0 && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={`Add ${song.title} to playlist`}
              className="rounded-lg p-1.5 text-[#94A3B8] hover:bg-white/10 hover:text-white"
            >
              <ListPlus className="h-4 w-4" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-9 z-30 w-48 rounded-xl border border-white/15 bg-[#121626] p-1.5 shadow-2xl">
                <div className="px-2 py-1 text-[11px] font-semibold text-[#94A3B8]">
                  Add to Playlist
                </div>
                {customPlaylists.map((pl) => (
                  <button
                    key={pl.id}
                    type="button"
                    onClick={() => {
                      addSongToPlaylist(pl.id, song);
                      setMenuOpen(false);
                    }}
                    className="block w-full truncate rounded-lg px-2.5 py-1.5 text-left text-xs text-white hover:bg-white/10"
                  >
                    {pl.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => toggleFavorite(song)}
          aria-label={fav ? 'Remove from favorites' : 'Save to favorites'}
          className={`rounded-lg p-1.5 transition-colors ${
            fav ? 'text-[#EC4899]' : 'text-[#94A3B8] hover:text-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${fav ? 'fill-current' : ''}`} />
        </button>

        {isPlayable ? (
          <button
            type="button"
            disabled={isResolving}
            onClick={onPlay}
            aria-label={`Play ${song.title}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gradient-to-r hover:from-[#9333EA] hover:to-[#2563EB] disabled:opacity-50"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>{isCurrent && isPlaying ? 'Playing' : 'Play'}</span>
          </button>
        ) : (
          <span className="text-xs font-medium text-amber-400">Unavailable</span>
        )}
      </div>
    </div>
  );
}
