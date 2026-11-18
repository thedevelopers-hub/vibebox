import { Play } from 'lucide-react';
import { usePlayer } from '../audio/PlayerContext.tsx';
import { AlbumArtwork } from '../components/AlbumArtwork.tsx';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import { Link } from '../components/NavigationContext.tsx';
import {
  DISCOVERY_CATEGORIES,
  MOOD_RADIOS,
  type CategoryGroup,
  type CollectionDefinition,
} from '../data/collections.ts';
import { getSongsForCollection } from '../data/realCatalog.ts';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

interface DirectoryPageProps {
  type: 'discover' | 'mood';
  breadcrumbs: BreadcrumbItem[];
}

const GROUPS: CategoryGroup[] = ['Hindi', 'Punjabi', 'English', 'Regional'];

function CollectionCard({ col }: { col: CollectionDefinition }) {
  const { activeCollectionTitle, isPlaying, playCollection } = usePlayer();
  const songs = getSongsForCollection(col.kind, col.id);
  const active = activeCollectionTitle === col.title && isPlaying;

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border bg-[#0D101B] p-5 transition-all ${
        active
          ? 'border-[#A855F7] shadow-lg shadow-[#9333EA]/20'
          : 'border-white/10 hover:border-white/25'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <AlbumArtwork
            title={col.title}
            artworkUrl={songs[0]?.artworkUrl}
            from={col.accentFrom}
            to={col.accentTo}
            size="md"
            isPlaying={active}
          />
          <button
            type="button"
            onClick={() => playCollection(col, 0)}
            aria-label={`Play ${col.title}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-4 py-2 text-xs font-bold text-white hover:brightness-110"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>{active ? 'Playing' : 'Play'}</span>
          </button>
        </div>

        <Link to={col.path} className="mt-4 block">
          <h3 className="font-display text-xl font-bold text-white group-hover:text-[#38BDF8]">
            {col.title}
          </h3>
          <p className="mt-1.5 text-sm text-[#94A3B8]">{col.subtitle}</p>
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-[#64748B]">
        <span className="font-mono-tabular">{songs.length} real songs</span>
        <Link to={col.path} className="font-semibold text-[#CBD5E1] hover:text-white">
          Open Playlist →
        </Link>
      </div>
    </div>
  );
}

export function DirectoryPage({ type, breadcrumbs }: DirectoryPageProps) {
  if (type === 'mood') {
    return (
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <Breadcrumbs items={breadcrumbs} />
        <header className="max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Mood Radio Stations
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            8 continuous mood radio stations playing real Hindi, Punjabi, English, and Regional
            songs calibrated for your moment.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MOOD_RADIOS.map((col) => (
            <CollectionCard key={col.id} col={col} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
      <Breadcrumbs items={breadcrumbs} />
      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Discover Real-Song Categories
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
          Explore all 22 curated categories across Hindi, Punjabi, English, and Indian Regional
          music—press play once for continuous Auto-DJ playback.
        </p>
      </header>

      <div className="mt-10 space-y-12">
        {GROUPS.map((group) => {
          const items = DISCOVERY_CATEGORIES.filter((c) => c.group === group);
          return (
            <section key={group}>
              <h2 className="font-display text-2xl font-bold text-white">{group}</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((col) => (
                  <CollectionCard key={col.id} col={col} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
