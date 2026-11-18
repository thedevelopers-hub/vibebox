import { useEffect, useState } from 'react';

interface AlbumArtworkProps {
  title: string;
  artworkUrl?: string;
  from?: string;
  to?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isPlaying?: boolean;
}

export function AlbumArtwork({
  title,
  artworkUrl,
  from = '#9333EA',
  to = '#2563EB',
  size = 'md',
  isPlaying = false,
}: AlbumArtworkProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [artworkUrl]);

  const sizeClass =
    size === 'sm'
      ? 'h-12 w-12 rounded-lg'
      : size === 'md'
        ? 'h-16 w-16 rounded-xl'
        : size === 'lg'
          ? 'h-44 w-44 rounded-2xl sm:h-52 sm:w-52'
          : 'h-56 w-56 rounded-3xl sm:h-64 sm:w-64';

  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('');

  const showImg = Boolean(artworkUrl && !imgError);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
      className={`relative shrink-0 overflow-hidden border transition-shadow ${
        isPlaying
          ? 'border-[#A855F7]/70 shadow-lg shadow-[#9333EA]/30'
          : 'border-white/15 shadow-lg'
      } ${sizeClass}`}
    >
      {showImg ? (
        <img
          src={artworkUrl}
          alt={`${title} official artwork`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          aria-label={`${title} artwork fallback`}
          className="flex h-full w-full items-center justify-center bg-black/25"
        >
          <span
            className={`font-display font-bold tracking-wider text-white/90 ${
              size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-3xl'
            }`}
          >
            {initials || 'VB'}
          </span>
        </div>
      )}
    </div>
  );
}
