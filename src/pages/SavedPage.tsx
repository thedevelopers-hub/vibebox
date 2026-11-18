import { useState } from 'react';
import { Play, Save, Trash2 } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import { Link } from '../components/NavigationContext.tsx';
import { SongRow } from '../components/SongRow.tsx';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

export function SavedPage({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const {
    queue,
    activeCollectionTitle,
    favorites,
    customPlaylists,
    playSong,
    saveQueueAsPlaylist,
    removeCustomPlaylist,
  } = usePlayer();

  const [newName, setNewName] = useState('');

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        Saved Playlists &amp; Favorites
      </h1>
      <p className="mt-2 text-sm text-[#94A3B8]">
        Stored locally in your browser via IndexedDB — zero account, sign-in, or subscription
        needed.
      </p>

      {/* Quick Save Active Queue */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!newName.trim() || queue.length === 0) return;
          saveQueueAsPlaylist(newName);
          setNewName('');
        }}
        className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-[#0D101B] p-4"
      >
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder={`Save current "${activeCollectionTitle}" queue as a playlist...`}
          className="min-w-[240px] flex-1 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-[#64748B]"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-5 py-2.5 text-sm font-bold text-white hover:brightness-110"
        >
          <Save className="h-4 w-4" />
          <span>Save Active Queue ({queue.length})</span>
        </button>
      </form>

      {/* Custom Playlists */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-white">
          Custom Playlists ({customPlaylists.length})
        </h2>
        {customPlaylists.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0D101B] p-6 text-sm text-[#94A3B8]">
            No custom playlists saved yet. Save the active queue above or from the Queue drawer in
            the player bar.
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customPlaylists.map((pl) => (
              <div
                key={pl.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0D101B] p-4"
              >
                <div className="min-w-0">
                  <div className="truncate font-display text-base font-bold text-white">
                    {pl.name}
                  </div>
                  <div className="mt-0.5 text-xs text-[#94A3B8]">
                    {pl.songs.length} real songs
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    disabled={pl.songs.length === 0}
                    onClick={() => playSong(pl.songs[0], pl.songs, pl.name)}
                    aria-label={`Play ${pl.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white disabled:opacity-40"
                  >
                    <Play className="h-4 w-4 translate-x-0.5 fill-current" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeCustomPlaylist(pl.id)}
                    aria-label={`Delete ${pl.name}`}
                    className="rounded-lg p-2 text-[#94A3B8] hover:text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Favorite Songs */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-white">
          Favorite Songs ({favorites.length})
        </h2>
        {favorites.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0D101B] p-6 text-sm text-[#94A3B8]">
            Tap the heart icon on any song to save it here.{' '}
            <Link to="/discover" className="font-semibold text-[#38BDF8] hover:underline">
              Explore 22 Categories →
            </Link>
          </div>
        ) : (
          <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0D101B]">
            {favorites.map((song, idx) => (
              <SongRow
                key={song.id}
                song={song}
                index={idx}
                onPlay={() => playSong(song, favorites, 'Favorites Mix')}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
