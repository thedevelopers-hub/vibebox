import { Link } from './NavigationContext.tsx';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#05060A] pb-32 pt-10 text-xs text-[#94A3B8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="font-display text-base font-bold text-white">
            VIBEBOX
          </Link>
          <p className="mt-1 text-[#64748B]">
            Press Play. Let the Music Flow. Official YouTube IFrame &amp; Apple Music preview streams with provider attribution.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-5">
          <Link to="/discover" className="hover:text-white">
            Discover
          </Link>
          <Link to="/party" className="hover:text-white">
            Party Sets
          </Link>
          <Link to="/mood" className="hover:text-white">
            Mood Radio
          </Link>
          <Link to="/saved" className="hover:text-white">
            Saved
          </Link>
          <Link to="/search" className="hover:text-white">
            Search
          </Link>
          <Link to="/blogger-theme" className="hover:text-white">
            Blogger XML
          </Link>
          <a href="/sitemap.xml" className="hover:text-white">
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
}
