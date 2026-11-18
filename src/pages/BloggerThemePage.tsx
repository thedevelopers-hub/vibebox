import { useEffect, useState } from 'react';
import { Check, Copy, Download, FileCode2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import type { BreadcrumbItem } from '../seo/routeRegistry.ts';

export function BloggerThemePage({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const [xmlText, setXmlText] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/vibebox-blogger-theme.xml')
      .then((res) => res.text())
      .then((txt) => {
        setXmlText(txt);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCopy = async () => {
    if (!xmlText) return;
    try {
      await navigator.clipboard.writeText(xmlText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard fallback ignored
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">
      <Breadcrumbs items={breadcrumbs} />

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#141328] via-[#0B0D16] to-[#080A12] p-6 sm:p-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C084FC]">
          <FileCode2 className="h-4 w-4" />
          <span>BLOGGER LAYOUT V3 THEME EXPORT</span>
        </div>

        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          VIBEBOX Blogger XML Theme
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
          Complete, standalone Blogger XML theme with the NAUX-inspired Auto-DJ interface, dual-deck
          Web Audio API crossfader, real-time 4-mode canvas visualizer, official YouTube IFrame
          support, live iTunes JSONP search, LocalStorage persistence, and responsive Blogger post
          and page layouts—zero React or external build dependencies.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="/vibebox-blogger-theme.xml"
            download="vibebox-blogger-theme.xml"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#9333EA]/30 hover:brightness-110"
          >
            <Download className="h-4 w-4" />
            <span>Download Theme XML</span>
          </a>

          <button
            type="button"
            disabled={!xmlText}
            onClick={() => void handleCopy()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-50"
          >
            {copied ? <Check className="h-4 w-4 text-[#38BDF8]" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'Copied XML' : 'Copy Complete XML'}</span>
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 text-xs text-[#94A3B8] sm:grid-cols-3">
          <div>
            <div className="font-semibold text-white">1. Open Blogger Theme</div>
            <p className="mt-1">
              Go to your Blogger Dashboard → Theme → click the arrow next to Customize → Edit HTML.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white">2. Replace &amp; Save</div>
            <p className="mt-1">
              Select all existing XML, paste the complete{' '}
              <code className="font-mono-tabular text-white">vibebox-blogger-theme.xml</code>, and
              click Save.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white">3. Publish Audio Posts</div>
            <p className="mt-1">
              Use Blogger Posts/Pages normally—any{' '}
              <code className="font-mono-tabular text-white">&lt;audio&gt;</code> tag inside a post
              auto-connects to the Auto-DJ player.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between text-xs text-[#94A3B8]">
          <span>XML Preview ({loading ? 'Loading...' : `${Math.round(xmlText.length / 1024)} KB`})</span>
          <span className="font-mono-tabular text-[#38BDF8]">Validated UTF-8 · Blogger Layout v3</span>
        </div>
        <textarea
          readOnly
          aria-label="Complete Blogger XML Theme Source"
          value={xmlText.slice(0, 6000) + (xmlText.length > 6000 ? '\n\n<!-- Preview truncated; use Download Theme XML or Copy Complete XML for the full 182 KB file -->' : '')}
          className="font-mono-tabular mt-2 h-80 w-full rounded-2xl border border-white/10 bg-[#0B0D15] p-4 text-xs text-[#CBD5E1] focus:outline-none"
        />
      </section>
    </div>
  );
}
