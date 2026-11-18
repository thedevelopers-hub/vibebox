import { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Link, useNavigation } from './NavigationContext.tsx';

export function SiteHeader() {
  const { pathname } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Discover', to: '/discover' },
    { label: 'Party Sets', to: '/party' },
    { label: 'Mood Radio', to: '/mood' },
    { label: 'Saved', to: '/saved' },
    { label: 'Blogger XML', to: '/blogger-theme' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07080D]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-3.5 sm:px-8">
        {/* Zone 1: Brand Mark */}
        <Link
          to="/"
          className="font-display text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          <span className="bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#38BDF8] bg-clip-text text-transparent">
            VIBEBOX
          </span>
        </Link>

        {/* Zone 2: Single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.to ||
              (item.to !== '/' && pathname.startsWith(`${item.to}/`)) ||
              (item.to === '/discover' && pathname.startsWith('/category/')) ||
              (item.to === '/party' && pathname.startsWith('/set/'));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-white underline decoration-[#A855F7] decoration-2 underline-offset-8'
                    : 'hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Search Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/search"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:border-[#A855F7] hover:bg-white/10"
          >
            <Search className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
            <span>Search Songs</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-white/15 p-2 text-white hover:bg-white/10"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0B0D15] px-5 py-4 md:hidden">
          <nav aria-label="Mobile Primary" className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/blogger-theme"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-sm font-medium text-[#C084FC]"
            >
              Blogger XML
            </Link>
            <Link
              to="/search"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-sm font-medium text-[#38BDF8]"
            >
              Search Songs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
