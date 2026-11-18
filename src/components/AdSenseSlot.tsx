// Non-intrusive AdSense placement slot, disabled until AdSense publisher approval.
// Never placed adjacent to play, skip, pause, or playlist controls.

interface AdSenseSlotProps {
  slotId?: string;
}

export function AdSenseSlot({ slotId = '' }: AdSenseSlotProps) {
  const adsEnabled = Boolean(import.meta.env.VITE_ADSENSE_CLIENT_ID && slotId);
  if (!adsEnabled) {
    // Hidden cleanly until approved so visitors never see empty placeholder boxes
    return null;
  }

  return (
    <aside
      aria-label="Sponsored placement"
      className="mx-auto my-8 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center text-xs text-[#64748B]"
    >
      <ins
        className="adsbygoogle block"
        data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
