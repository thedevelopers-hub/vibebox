import { useEffect, useRef, useState } from 'react';
import { usePlayer } from '../audio/PlayerContext.tsx';

type VisualizerStyle = 'bars' | 'circular' | 'spectrum' | 'gradient';

interface AudioVisualizerProps {
  heightClass?: string;
  showModeSelector?: boolean;
}

const MODES: { id: VisualizerStyle; label: string }[] = [
  { id: 'bars', label: 'Frequency Bars' },
  { id: 'circular', label: 'Circular Wave' },
  { id: 'spectrum', label: 'Neon Spectrum' },
  { id: 'gradient', label: 'Ambient Glow' },
];

export function AudioVisualizer({
  heightClass = 'h-48 sm:h-60',
  showModeSelector = true,
}: AudioVisualizerProps) {
  const { isPlaying, prefs, getAnalyser } = usePlayer();
  const [style, setStyle] = useState<VisualizerStyle>('bars');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const isLiveFft = prefs.playbackMode === 'preview-crossfade' && Boolean(getAnalyser());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    const freqData = new Uint8Array(128);
    const timeData = new Uint8Array(128);
    let phase = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      phase += isPlaying ? 0.045 : 0.01;

      ctx.clearRect(0, 0, w, h);

      const analyser = getAnalyser();
      if (analyser && isPlaying) {
        analyser.getByteFrequencyData(freqData);
        analyser.getByteTimeDomainData(timeData);
      } else {
        const amp = isPlaying ? 58 : 16;
        const base = isPlaying ? 72 : 22;
        for (let i = 0; i < freqData.length; i++) {
          const wave =
            Math.sin(phase + i * 0.25) * 0.6 + Math.cos(phase * 1.3 - i * 0.17) * 0.4;
          freqData[i] = Math.max(8, Math.min(255, Math.round(base + wave * amp)));
          timeData[i] = Math.round(
            128 + Math.sin(phase * 1.6 + i * 0.21) * (isPlaying ? 32 : 10),
          );
        }
      }

      let bassSum = 0;
      for (let i = 0; i < 8; i++) bassSum += freqData[i];
      const bassNorm = bassSum / (8 * 255);

      if (style === 'gradient') {
        const cx1 = w * (0.3 + Math.sin(phase * 0.7) * 0.14);
        const cy1 = h * (0.45 + Math.cos(phase * 0.6) * 0.15);
        const r1 = Math.max(80, w * (0.32 + bassNorm * 0.22));
        const g1 = ctx.createRadialGradient(cx1, cy1, 10, cx1, cy1, r1);
        g1.addColorStop(0, `rgba(168, 85, 247, ${0.42 + bassNorm * 0.4})`);
        g1.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, w, h);

        const cx2 = w * (0.72 + Math.cos(phase * 0.5) * 0.12);
        const cy2 = h * (0.55 + Math.sin(phase * 0.8) * 0.14);
        const r2 = Math.max(80, w * (0.3 + bassNorm * 0.2));
        const g2 = ctx.createRadialGradient(cx2, cy2, 10, cx2, cy2, r2);
        g2.addColorStop(0, `rgba(56, 189, 248, ${0.38 + bassNorm * 0.4})`);
        g2.addColorStop(1, 'rgba(37, 99, 235, 0)');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);

        ctx.beginPath();
        for (let i = 0; i < timeData.length; i++) {
          const x = (i / (timeData.length - 1)) * w;
          const y = h * 0.5 + ((timeData[i] - 128) / 128) * (h * 0.34);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(248, 250, 252, 0.85)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      } else if (style === 'circular') {
        const cx = w / 2;
        const cy = h / 2;
        const baseR = Math.min(w, h) * (0.24 + bassNorm * 0.05);

        const ringGrad = ctx.createLinearGradient(cx - baseR, cy - baseR, cx + baseR, cy + baseR);
        ringGrad.addColorStop(0, '#A855F7');
        ringGrad.addColorStop(1, '#38BDF8');

        const points = 64;
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2 + phase * 0.3;
          const amp = (freqData[i % 64] / 255) * (Math.min(w, h) * 0.22);
          const x1 = cx + Math.cos(angle) * baseR;
          const y1 = cy + Math.sin(angle) * baseR;
          const x2 = cx + Math.cos(angle) * (baseR + Math.max(4, amp));
          const y2 = cy + Math.sin(angle) * (baseR + Math.max(4, amp));

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = i % 2 === 0 ? '#A855F7' : '#38BDF8';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(cx, cy, baseR * 0.86, 0, Math.PI * 2);
        ctx.strokeStyle = ringGrad;
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (style === 'spectrum') {
        const specGrad = ctx.createLinearGradient(0, 0, w, 0);
        specGrad.addColorStop(0, '#9333EA');
        specGrad.addColorStop(0.5, '#6366F1');
        specGrad.addColorStop(1, '#38BDF8');

        const fillGrad = ctx.createLinearGradient(0, 0, 0, h);
        fillGrad.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
        fillGrad.addColorStop(1, 'rgba(37, 99, 235, 0.02)');

        const bins = 48;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let i = 0; i < bins; i++) {
          const x = (i / (bins - 1)) * w;
          const val = freqData[i] / 255;
          const y = h - Math.max(8, val * (h - 24));
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = fillGrad;
        ctx.fill();

        ctx.beginPath();
        for (let i = 0; i < bins; i++) {
          const x = (i / (bins - 1)) * w;
          const val = freqData[i] / 255;
          const y = h - Math.max(8, val * (h - 24));
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = specGrad;
        ctx.lineWidth = 3;
        ctx.stroke();
      } else {
        const barCount = 44;
        const gap = 5;
        const bw = (w - gap * (barCount - 1)) / barCount;
        const barGrad = ctx.createLinearGradient(0, h, 0, 0);
        barGrad.addColorStop(0, '#2563EB');
        barGrad.addColorStop(0.6, '#9333EA');
        barGrad.addColorStop(1, '#38BDF8');

        for (let i = 0; i < barCount; i++) {
          const val = freqData[i] / 255;
          const bh = Math.max(6, val * (h - 18));
          const x = i * (bw + gap);
          const y = h - bh;
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(x, y, bw, bh, 4);
          ctx.fill();
        }
      }

      rafId = window.requestAnimationFrame(draw);
    };

    rafId = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(rafId);
  }, [getAnalyser, isPlaying, style]);

  return (
    <div className="w-full">
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D15] ${heightClass}`}
      >
        <canvas
          ref={canvasRef}
          width={860}
          height={240}
          aria-label="Music visualizer"
          className="h-full w-full"
        />
        <div className="pointer-events-none absolute bottom-2.5 left-3.5 text-[11px] font-medium text-[#94A3B8]">
          {isLiveFft && isPlaying
            ? 'Live Web Audio FFT Spectrum'
            : prefs.playbackMode === 'youtube'
              ? 'Ambient Stage Visuals · YouTube video plays in dock'
              : 'Web Audio FFT activates on 30s Preview playback'}
        </div>
      </div>

      {showModeSelector && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {MODES.map((m) => {
            const active = style === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setStyle(m.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white'
                    : 'border border-white/10 bg-white/5 text-[#94A3B8] hover:text-white'
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
