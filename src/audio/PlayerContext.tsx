import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  DISCOVERY_CATEGORIES,
  type CollectionDefinition,
} from '../data/collections.ts';
import { getSongsForCollection, type SongTrack } from '../data/realCatalog.ts';
import {
  deleteCustomPlaylist,
  loadCustomPlaylists,
  loadFavorites,
  loadPreferences,
  persistFavoriteToggle,
  saveCustomPlaylist,
  savePreferences,
  type CustomUserPlaylist,
  type PlaybackMode,
  type PlayerPreferences,
  type RepeatMode,
} from '../storage/localLibrary.ts';
import { RealPlayerEngine } from './RealPlayerEngine.ts';

interface UnavailableState {
  song: SongTrack;
  reason: string;
}

interface PlayerContextValue {
  queue: SongTrack[];
  currentIndex: number;
  currentSong: SongTrack | null;
  upcomingSongs: SongTrack[];
  activeCollectionTitle: string;
  activeSourceLabel: string;
  isPlaying: boolean;
  isCrossfading: boolean;
  currentTime: number;
  duration: number;
  unavailableNotice: UnavailableState | null;
  clearUnavailableNotice: () => void;

  // Preferences
  prefs: PlayerPreferences;
  setPlaybackMode: (mode: PlaybackMode) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  setCrossfadeSec: (sec: number) => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  toggleHookStart: () => void;
  toggleAutoSkipUnavailable: () => void;

  // Library (IndexedDB)
  favorites: SongTrack[];
  customPlaylists: CustomUserPlaylist[];
  isFavorite: (songId: string) => boolean;
  toggleFavorite: (song: SongTrack) => void;
  saveQueueAsPlaylist: (name: string) => void;
  addSongToPlaylist: (playlistId: string, song: SongTrack) => void;
  removeCustomPlaylist: (playlistId: string) => void;

  // Playback actions
  mountYoutubeEl: (elementId: string) => void;
  playCollection: (collection: CollectionDefinition, startIndex?: number) => void;
  playSong: (song: SongTrack, list?: SongTrack[], label?: string) => void;
  playSongWithAutoResolve: (song: SongTrack, list?: SongTrack[], label?: string) => Promise<void>;
  togglePlayPause: () => void;
  nextSong: () => void;
  previousSong: () => void;
  seek: (seconds: number) => void;
  jumpToHook: () => void;
  fallbackToPreviewNow: (song: SongTrack) => void;
  getAnalyser: () => AnalyserNode | null;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const initialCat = DISCOVERY_CATEGORIES[0];
  const initialSongs = getSongsForCollection('category', initialCat.id);

  const [prefs, setPrefs] = useState<PlayerPreferences>(() => loadPreferences());
  const [queue, setQueue] = useState<SongTrack[]>(initialSongs);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeCollectionTitle, setActiveCollectionTitle] = useState<string>(initialCat.title);
  const [activeSourceLabel, setActiveSourceLabel] = useState<string>('YouTube Official Video');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isCrossfading, setIsCrossfading] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(initialSongs[0]?.durationSec ?? 210);
  const [unavailableNotice, setUnavailableNotice] = useState<UnavailableState | null>(null);

  const [favorites, setFavorites] = useState<SongTrack[]>([]);
  const [customPlaylists, setCustomPlaylists] = useState<CustomUserPlaylist[]>([]);

  const queueRef = useRef(queue);
  const indexRef = useRef(currentIndex);
  const prefsRef = useRef(prefs);
  queueRef.current = queue;
  indexRef.current = currentIndex;
  prefsRef.current = prefs;

  const engineRef = useRef<RealPlayerEngine | null>(null);

  useEffect(() => {
    void loadFavorites().then(setFavorites);
    void loadCustomPlaylists().then(setCustomPlaylists);
  }, []);

  const computeNextIndex = useCallback(
    (fromIdx: number, list: SongTrack[], shuffle: boolean, repeat: RepeatMode): number | null => {
      if (list.length === 0) return null;
      if (shuffle && list.length > 1) {
        let candidate = Math.floor(Math.random() * list.length);
        if (candidate === fromIdx) candidate = (fromIdx + 1) % list.length;
        return candidate;
      }
      const next = fromIdx + 1;
      if (next < list.length) return next;
      return repeat === 'all' ? 0 : null;
    },
    [],
  );

  const startSongInternal = useCallback(
    (song: SongTrack, modeOverride?: PlaybackMode, useCrossfade = false) => {
      const engine = engineRef.current;
      if (!engine) return;

      const desiredMode = modeOverride ?? prefsRef.current.playbackMode;
      setUnavailableNotice(null);
      setCurrentTime(0);
      setDuration(song.durationSec);

      if (desiredMode === 'preview-crossfade') {
        if (song.sources.itunesPreview?.previewUrl) {
          setActiveSourceLabel('Official 30s Preview · Web Audio Crossfade');
          setDuration(30);
          if (useCrossfade && prefsRef.current.crossfadeSec > 0) {
            setIsCrossfading(true);
            void engine.crossfadeToPreview(song.sources.itunesPreview.previewUrl);
          } else {
            setIsCrossfading(false);
            void engine.playPreviewImmediate(song.sources.itunesPreview.previewUrl);
          }
          return;
        }
        // If preview missing, honestly fall back to YouTube full song if available
        if (song.sources.youtube?.embeddable) {
          setActiveSourceLabel(`YouTube Official (${song.sources.youtube.channelName}) · Preview unavailable`);
          setIsCrossfading(false);
          const startAt = prefsRef.current.hookStartEnabled ? song.hookStartSec ?? 0 : 0;
          engine.playYoutube(song.sources.youtube.videoId, startAt);
          return;
        }
      } else {
        // Default: Full Song via Official YouTube IFrame Player API
        if (song.sources.youtube?.embeddable) {
          setActiveSourceLabel(`YouTube Official · ${song.sources.youtube.channelName}`);
          setIsCrossfading(false);
          const startAt = prefsRef.current.hookStartEnabled ? song.hookStartSec ?? 0 : 0;
          engine.playYoutube(song.sources.youtube.videoId, startAt);
          return;
        }
        if (song.sources.itunesPreview?.previewUrl) {
          setActiveSourceLabel('Official 30s Preview · Full video unavailable');
          setDuration(30);
          void engine.playPreviewImmediate(song.sources.itunesPreview.previewUrl);
          return;
        }
      }

      setIsPlaying(false);
      setUnavailableNotice({
        song,
        reason: 'No authorized embeddable playback stream is available for this track.',
      });
    },
    [],
  );

  if (!engineRef.current && typeof window !== 'undefined') {
    engineRef.current = new RealPlayerEngine({
      onProgress: (ct, dur) => {
        setCurrentTime(ct);
        if (dur > 0) setDuration(dur);
      },
      onPlayStateChange: (playing) => {
        setIsPlaying(playing);
      },
      onTrackEnded: () => {
        const list = queueRef.current;
        const p = prefsRef.current;
        const nextIdx = computeNextIndex(indexRef.current, list, p.shuffle, p.repeatMode);
        if (nextIdx === null) {
          setIsPlaying(false);
          return;
        }
        setCurrentIndex(nextIdx);
        indexRef.current = nextIdx;
        startSongInternal(list[nextIdx]);
      },
      onCrossfadeNeeded: () => {
        const list = queueRef.current;
        const p = prefsRef.current;
        const nextIdx = computeNextIndex(indexRef.current, list, p.shuffle, p.repeatMode);
        if (nextIdx === null) return;
        const nextSong = list[nextIdx];
        if (!nextSong.sources.itunesPreview?.previewUrl) return;
        setCurrentIndex(nextIdx);
        indexRef.current = nextIdx;
        startSongInternal(nextSong, 'preview-crossfade', true);
      },
      onCrossfadeFinished: () => {
        setIsCrossfading(false);
      },
      onPlaybackUnavailable: (reason) => {
        const current = queueRef.current[indexRef.current];
        if (!current) return;
        setIsPlaying(false);
        setUnavailableNotice({ song: current, reason });

        if (prefsRef.current.autoSkipUnavailable && queueRef.current.length > 1) {
          const nextIdx = computeNextIndex(
            indexRef.current,
            queueRef.current,
            prefsRef.current.shuffle,
            'all',
          );
          if (nextIdx !== null && nextIdx !== indexRef.current) {
            window.setTimeout(() => {
              setCurrentIndex(nextIdx);
              indexRef.current = nextIdx;
              startSongInternal(queueRef.current[nextIdx]);
            }, 1800);
          }
        }
      },
    });
  }

  useEffect(() => {
    savePreferences(prefs);
    engineRef.current?.setConfig({
      volume: prefs.volume,
      muted: prefs.muted,
      crossfadeSec: prefs.crossfadeSec,
      repeatOne: prefs.repeatMode === 'one',
    });
  }, [prefs]);

  useEffect(() => {
    return () => {
      engineRef.current?.destroy();
    };
  }, []);

  const currentSong = queue[currentIndex] ?? null;

  // Preload next preview in preview-crossfade mode
  useEffect(() => {
    if (!isPlaying || prefs.playbackMode !== 'preview-crossfade') return;
    const nextIdx = computeNextIndex(currentIndex, queue, prefs.shuffle, prefs.repeatMode);
    if (nextIdx !== null) {
      const nextUrl = queue[nextIdx]?.sources.itunesPreview?.previewUrl;
      if (nextUrl) engineRef.current?.preloadPreview(nextUrl);
    }
  }, [currentIndex, queue, isPlaying, prefs.playbackMode, prefs.shuffle, prefs.repeatMode, computeNextIndex]);

  const mountYoutubeEl = useCallback((elementId: string) => {
    void engineRef.current?.mountYoutubeContainer(elementId);
  }, []);

  const playSong = useCallback(
    (song: SongTrack, list?: SongTrack[], label?: string) => {
      const targetQueue = list && list.length > 0 ? list : queueRef.current;
      const idx = targetQueue.findIndex((s) => s.id === song.id);
      const nextQueue = idx >= 0 ? targetQueue : [song, ...targetQueue];
      const nextIdx = idx >= 0 ? idx : 0;

      setQueue(nextQueue);
      queueRef.current = nextQueue;
      setCurrentIndex(nextIdx);
      indexRef.current = nextIdx;
      if (label) setActiveCollectionTitle(label);

      startSongInternal(song);
    },
    [startSongInternal],
  );

  // Resolves official embeddable YouTube video on-demand for live-searched iTunes tracks
  const playSongWithAutoResolve = useCallback(
    async (song: SongTrack, list?: SongTrack[], label?: string) => {
      if (song.sources.youtube?.embeddable) {
        playSong(song, list, label);
        return;
      }

      if (prefsRef.current.playbackMode === 'youtube') {
        try {
          const res = await fetch(
            `/api/resolve-youtube?q=${encodeURIComponent(`${song.title} ${song.artist}`)}`,
          );
          if (res.ok) {
            const data = (await res.json()) as {
              youtube?: SongTrack['sources']['youtube'];
            };
            if (data.youtube) {
              const enriched: SongTrack = {
                ...song,
                sources: { ...song.sources, youtube: data.youtube },
              };
              const updatedList = (list || queueRef.current).map((s) =>
                s.id === song.id ? enriched : s,
              );
              playSong(enriched, updatedList, label);
              return;
            }
          }
        } catch {
          // fall through to preview if available
        }
      }

      playSong(song, list, label);
    },
    [playSong],
  );

  const playCollection = useCallback(
    (collection: CollectionDefinition, startIndex = 0) => {
      const songs = getSongsForCollection(collection.kind, collection.id);
      if (songs.length === 0) return;
      const safeIdx = Math.max(0, Math.min(songs.length - 1, startIndex));
      playSong(songs[safeIdx], songs, collection.title);
    },
    [playSong],
  );

  const togglePlayPause = useCallback(() => {
    if (!currentSong) return;
    if (isPlaying) {
      engineRef.current?.pause();
    } else if (currentTime === 0) {
      startSongInternal(currentSong);
    } else {
      engineRef.current?.resume();
    }
  }, [currentSong, currentTime, isPlaying, startSongInternal]);

  const nextSong = useCallback(() => {
    if (queue.length === 0) return;
    const nextIdx = computeNextIndex(currentIndex, queue, prefs.shuffle, 'all') ?? 0;
    const next = queue[nextIdx];
    setCurrentIndex(nextIdx);
    indexRef.current = nextIdx;
    startSongInternal(next, undefined, prefs.playbackMode === 'preview-crossfade' && isPlaying);
  }, [computeNextIndex, currentIndex, isPlaying, prefs.playbackMode, prefs.shuffle, queue, startSongInternal]);

  const previousSong = useCallback(() => {
    if (queue.length === 0) return;
    if (currentTime > 3) {
      engineRef.current?.seek(0);
      setCurrentTime(0);
      return;
    }
    const prevIdx = (currentIndex - 1 + queue.length) % queue.length;
    setCurrentIndex(prevIdx);
    indexRef.current = prevIdx;
    startSongInternal(queue[prevIdx]);
  }, [currentIndex, currentTime, queue, startSongInternal]);

  const seek = useCallback((seconds: number) => {
    engineRef.current?.seek(seconds);
    setCurrentTime(seconds);
  }, []);

  const jumpToHook = useCallback(() => {
    if (!currentSong?.hookStartSec || prefs.playbackMode !== 'youtube') return;
    engineRef.current?.seek(currentSong.hookStartSec);
    setCurrentTime(currentSong.hookStartSec);
  }, [currentSong, prefs.playbackMode]);

  const fallbackToPreviewNow = useCallback(
    (song: SongTrack) => {
      if (!song.sources.itunesPreview?.previewUrl) return;
      startSongInternal(song, 'preview-crossfade', false);
    },
    [startSongInternal],
  );

  const setPlaybackMode = useCallback(
    (playbackMode: PlaybackMode) => {
      setPrefs((p) => ({ ...p, playbackMode }));
      if (currentSong && isPlaying) {
        startSongInternal(currentSong, playbackMode, false);
      }
    },
    [currentSong, isPlaying, startSongInternal],
  );

  const upcomingSongs = queue.slice(currentIndex + 1).concat(
    prefs.repeatMode === 'all' ? queue.slice(0, currentIndex) : [],
  );

  const isFavorite = useCallback(
    (songId: string) => favorites.some((s) => s.id === songId),
    [favorites],
  );

  const toggleFavorite = useCallback(
    (song: SongTrack) => {
      const currentlyFav = favorites.some((s) => s.id === song.id);
      void persistFavoriteToggle(song, currentlyFav).then(setFavorites);
    },
    [favorites],
  );

  const saveQueueAsPlaylist = useCallback(
    (name: string) => {
      const trimmed = name.trim();
      if (!trimmed || queue.length === 0) return;
      const pl: CustomUserPlaylist = {
        id: `pl-${Date.now()}`,
        name: trimmed,
        songs: queue,
        createdAt: new Date().toISOString(),
      };
      void saveCustomPlaylist(pl).then(setCustomPlaylists);
    },
    [queue],
  );

  const addSongToPlaylist = useCallback(
    (playlistId: string, song: SongTrack) => {
      const target = customPlaylists.find((p) => p.id === playlistId);
      if (!target) return;
      if (target.songs.some((s) => s.id === song.id)) return;
      const updated = { ...target, songs: [...target.songs, song] };
      void saveCustomPlaylist(updated).then(setCustomPlaylists);
    },
    [customPlaylists],
  );

  const removeCustomPlaylist = useCallback((playlistId: string) => {
    void deleteCustomPlaylist(playlistId).then(setCustomPlaylists);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
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
        clearUnavailableNotice: () => setUnavailableNotice(null),
        prefs,
        setPlaybackMode,
        setVolume: (volume) => setPrefs((p) => ({ ...p, volume, muted: false })),
        toggleMute: () => setPrefs((p) => ({ ...p, muted: !p.muted })),
        setCrossfadeSec: (crossfadeSec) => setPrefs((p) => ({ ...p, crossfadeSec })),
        toggleShuffle: () => setPrefs((p) => ({ ...p, shuffle: !p.shuffle })),
        cycleRepeat: () =>
          setPrefs((p) => ({
            ...p,
            repeatMode:
              p.repeatMode === 'all' ? 'one' : p.repeatMode === 'one' ? 'off' : 'all',
          })),
        toggleHookStart: () =>
          setPrefs((p) => ({ ...p, hookStartEnabled: !p.hookStartEnabled })),
        toggleAutoSkipUnavailable: () =>
          setPrefs((p) => ({ ...p, autoSkipUnavailable: !p.autoSkipUnavailable })),
        favorites,
        customPlaylists,
        isFavorite,
        toggleFavorite,
        saveQueueAsPlaylist,
        addSongToPlaylist,
        removeCustomPlaylist,
        mountYoutubeEl,
        playCollection,
        playSong,
        playSongWithAutoResolve,
        togglePlayPause,
        nextSong,
        previousSong,
        seek,
        jumpToHook,
        fallbackToPreviewNow,
        getAnalyser: () => engineRef.current?.getAnalyser() ?? null,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
