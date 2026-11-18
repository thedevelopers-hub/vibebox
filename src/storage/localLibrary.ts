import type { SongTrack } from '../data/realCatalog.ts';

export type PlaybackMode = 'youtube' | 'preview-crossfade';
export type RepeatMode = 'off' | 'all' | 'one';

export interface PlayerPreferences {
  playbackMode: PlaybackMode;
  volume: number; // 0..1
  muted: boolean;
  crossfadeSec: number; // 1..10 (applies in Web Audio preview crossfade mode)
  shuffle: boolean;
  repeatMode: RepeatMode;
  hookStartEnabled: boolean;
  autoSkipUnavailable: boolean;
}

export interface CustomUserPlaylist {
  id: string;
  name: string;
  songs: SongTrack[];
  createdAt: string;
}

const PREFS_KEY = 'vibebox_prefs_real_v2';
const FAVORITES_FALLBACK_KEY = 'vibebox_favs_real_v2';
const PLAYLISTS_FALLBACK_KEY = 'vibebox_playlists_real_v2';

export const DEFAULT_PREFS: PlayerPreferences = {
  playbackMode: 'youtube',
  volume: 0.85,
  muted: false,
  crossfadeSec: 4,
  shuffle: false,
  repeatMode: 'all',
  hookStartEnabled: false,
  autoSkipUnavailable: true,
};

export function loadPreferences(): PlayerPreferences {
  if (typeof window === 'undefined') return DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(PREFS_KEY);
    return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : DEFAULT_PREFS;
  } catch {
    return DEFAULT_PREFS;
  }
}

export function savePreferences(prefs: PlayerPreferences): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // ignore quota error
  }
}

const DB_NAME = 'vibebox_library_v2';
const DB_VERSION = 1;
const STORE_FAVS = 'favorites';
const STORE_PLAYLISTS = 'playlists';

function openLibraryDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = window.indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_FAVS)) {
        db.createObjectStore(STORE_FAVS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_PLAYLISTS)) {
        db.createObjectStore(STORE_PLAYLISTS, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('Failed to open IndexedDB'));
  });
}

export async function loadFavorites(): Promise<SongTrack[]> {
  try {
    const db = await openLibraryDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_FAVS, 'readonly');
      const req = tx.objectStore(STORE_FAVS).getAll();
      req.onsuccess = () => resolve((req.result as SongTrack[]) || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    try {
      const raw = window.localStorage.getItem(FAVORITES_FALLBACK_KEY);
      return raw ? (JSON.parse(raw) as SongTrack[]) : [];
    } catch {
      return [];
    }
  }
}

export async function persistFavoriteToggle(
  song: SongTrack,
  currentlyFavorited: boolean,
): Promise<SongTrack[]> {
  try {
    const db = await openLibraryDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_FAVS, 'readwrite');
      const store = tx.objectStore(STORE_FAVS);
      if (currentlyFavorited) {
        store.delete(song.id);
      } else {
        store.put(song);
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    return await loadFavorites();
  } catch {
    const existing = await loadFavorites();
    const next = currentlyFavorited
      ? existing.filter((s) => s.id !== song.id)
      : [song, ...existing.filter((s) => s.id !== song.id)];
    try {
      window.localStorage.setItem(FAVORITES_FALLBACK_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    return next;
  }
}

export async function loadCustomPlaylists(): Promise<CustomUserPlaylist[]> {
  try {
    const db = await openLibraryDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PLAYLISTS, 'readonly');
      const req = tx.objectStore(STORE_PLAYLISTS).getAll();
      req.onsuccess = () => {
        const list = (req.result as CustomUserPlaylist[]) || [];
        resolve(list.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    try {
      const raw = window.localStorage.getItem(PLAYLISTS_FALLBACK_KEY);
      return raw ? (JSON.parse(raw) as CustomUserPlaylist[]) : [];
    } catch {
      return [];
    }
  }
}

export async function saveCustomPlaylist(playlist: CustomUserPlaylist): Promise<CustomUserPlaylist[]> {
  try {
    const db = await openLibraryDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_PLAYLISTS, 'readwrite');
      tx.objectStore(STORE_PLAYLISTS).put(playlist);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    return await loadCustomPlaylists();
  } catch {
    const existing = await loadCustomPlaylists();
    const next = [playlist, ...existing.filter((p) => p.id !== playlist.id)];
    try {
      window.localStorage.setItem(PLAYLISTS_FALLBACK_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    return next;
  }
}

export async function deleteCustomPlaylist(id: string): Promise<CustomUserPlaylist[]> {
  try {
    const db = await openLibraryDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_PLAYLISTS, 'readwrite');
      tx.objectStore(STORE_PLAYLISTS).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    return await loadCustomPlaylists();
  } catch {
    const existing = await loadCustomPlaylists();
    const next = existing.filter((p) => p.id !== id);
    try {
      window.localStorage.setItem(PLAYLISTS_FALLBACK_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    return next;
  }
}
