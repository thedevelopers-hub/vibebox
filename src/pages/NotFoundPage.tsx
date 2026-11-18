import { Link } from '../components/NavigationContext.tsx';

export function NotFoundPage({ requestedPath }: { requestedPath: string }) {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <p className="font-mono-tabular text-xs font-semibold text-[#38BDF8]">404 · NOT FOUND</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">
        Station not found.
      </h1>
      <p className="mt-3 text-sm text-[#94A3B8]">
        We couldn’t find <code className="font-mono-tabular text-white">{requestedPath}</code>.
        Jump straight back into continuous Auto-DJ playback below.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-5 py-3 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
        <Link
          to="/party"
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Launch Party Mode
        </Link>
        <Link
          to="/mood"
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Mood Radio
        </Link>
      </div>
    </div>
  );
}
