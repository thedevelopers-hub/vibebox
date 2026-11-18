// Dual-mode Real Music Playback Engine:
// 1. Official YouTube IFrame Player API (Full Songs & Official Videos — no fake crossfade)
// 2. Web Audio Dual-Deck Crossfade Engine (Authorized CORS 30s Apple Music Previews)

export interface RealEngineCallbacks {
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  onTrackEnded: () => void;
  onCrossfadeNeeded: () => void;
  onCrossfadeFinished: () => void;
  onPlaybackUnavailable: (reason: string) => void;
}

interface YTPlayerInstance {
  loadVideoById: (opts: { videoId: string; startSeconds?: number }) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  setVolume: (vol: number) => void;
  mute: () => void;
  unMute: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          height?: string | number;
          width?: string | number;
          videoId?: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: () => void;
            onStateChange?: (e: { data: number }) => void;
            onError?: (e: { data: number }) => void;
          };
        },
      ) => YTPlayerInstance;
      PlayerState?: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function buildFadeOutCurve(steps = 32): Float32Array {
  const arr = new Float32Array(steps);
  for (let i = 0; i < steps; i++) arr[i] = Math.cos((i / (steps - 1)) * Math.PI * 0.5);
  return arr;
}

function buildFadeInCurve(steps = 32): Float32Array {
  const arr = new Float32Array(steps);
  for (let i = 0; i < steps; i++) arr[i] = Math.sin((i / (steps - 1)) * Math.PI * 0.5);
  return arr;
}

let ytApiPromise: Promise<void> | null = null;

function loadYoutubeIframeApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise<void>((resolve) => {
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      resolve();
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

export class RealPlayerEngine {
  private callbacks: RealEngineCallbacks;
  private activeSourceType: 'youtube' | 'preview' = 'youtube';

  // YouTube Player
  private ytPlayer: YTPlayerInstance | null = null;
  private ytContainerId: string | null = null;
  private ytReady = false;
  private pendingYtLoad: { videoId: string; startSeconds: number } | null = null;

  // Web Audio Preview Dual-Deck Crossfader
  private ctx: AudioContext | null = null;
  private audioA: HTMLAudioElement | null = null;
  private audioB: HTMLAudioElement | null = null;
  private gainA: GainNode | null = null;
  private gainB: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private activeDeck: 'A' | 'B' = 'A';
  private isCrossfading = false;
  private fadeTimerId: number | null = null;

  private pollId: number | null = null;
  private volume = 0.85;
  private muted = false;
  private crossfadeSec = 4;
  private repeatOne = false;

  constructor(callbacks: RealEngineCallbacks) {
    this.callbacks = callbacks;
  }

  public startPolling(): void {
    if (this.pollId !== null || typeof window === 'undefined') return;
    this.pollId = window.setInterval(() => this.tick(), 250);
  }

  private tick(): void {
    if (this.activeSourceType === 'youtube') {
      if (!this.ytPlayer || !this.ytReady) return;
      try {
        const state = this.ytPlayer.getPlayerState();
        if (state === 1) {
          const ct = this.ytPlayer.getCurrentTime() || 0;
          const dur = this.ytPlayer.getDuration() || 0;
          this.callbacks.onProgress(ct, dur);
        }
      } catch {
        // ignore transitional YT state errors
      }
      return;
    }

    // Preview deck polling
    const audio = this.activeDeck === 'A' ? this.audioA : this.audioB;
    if (!audio) return;
    const ct = audio.currentTime || 0;
    const dur = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
    if (!audio.paused || ct > 0) {
      this.callbacks.onProgress(ct, dur);
    }

    if (
      !audio.paused &&
      !this.repeatOne &&
      !this.isCrossfading &&
      this.crossfadeSec > 0 &&
      dur > this.crossfadeSec + 2 &&
      ct >= dur - this.crossfadeSec
    ) {
      this.callbacks.onCrossfadeNeeded();
    }
  }

  public async mountYoutubeContainer(elementId: string): Promise<void> {
    if (typeof window === 'undefined') return;
    this.startPolling();
    if (this.ytPlayer && this.ytContainerId === elementId) return;

    await loadYoutubeIframeApi();
    const el = document.getElementById(elementId);
    if (!el || !window.YT?.Player) return;

    this.ytContainerId = elementId;
    this.ytReady = false;

    this.ytPlayer = new window.YT.Player(el, {
      width: '100%',
      height: '100%',
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        enablejsapi: 1,
        origin: window.location.origin,
      },
      events: {
        onReady: () => {
          this.ytReady = true;
          this.applyYoutubeVolume();
          if (this.pendingYtLoad) {
            const { videoId, startSeconds } = this.pendingYtLoad;
            this.pendingYtLoad = null;
            this.ytPlayer?.loadVideoById({ videoId, startSeconds });
          }
        },
        onStateChange: (e) => {
          if (this.activeSourceType !== 'youtube') return;
          if (e.data === 1) {
            this.callbacks.onPlayStateChange(true);
          } else if (e.data === 2) {
            this.callbacks.onPlayStateChange(false);
          } else if (e.data === 0) {
            if (this.repeatOne) {
              this.ytPlayer?.seekTo(0, true);
              this.ytPlayer?.playVideo();
            } else {
              this.callbacks.onTrackEnded();
            }
          }
        },
        onError: (e) => {
          if (this.activeSourceType !== 'youtube') return;
          const reason =
            e.data === 101 || e.data === 150
              ? 'This official video restricts embedded playback on external sites.'
              : 'This official YouTube video is currently unavailable for embedded playback.';
          this.callbacks.onPlaybackUnavailable(reason);
        },
      },
    });
  }

  private applyYoutubeVolume(): void {
    if (!this.ytPlayer || !this.ytReady) return;
    try {
      if (this.muted) this.ytPlayer.mute();
      else {
        this.ytPlayer.unMute();
        this.ytPlayer.setVolume(Math.round(this.volume * 100));
      }
    } catch {
      // ignore
    }
  }

  private ensurePreviewGraph(): void {
    if (typeof window === 'undefined') return;
    this.startPolling();
    if (this.ctx && this.audioA && this.audioB) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.value = this.muted ? 0 : this.volume;

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    master.connect(analyser);
    analyser.connect(ctx.destination);

    const makeDeck = (initGain: number) => {
      const audio = new Audio();
      audio.crossOrigin = 'anonymous';
      audio.preload = 'auto';
      const src = ctx.createMediaElementSource(audio);
      const gain = ctx.createGain();
      gain.gain.value = initGain;
      src.connect(gain);
      gain.connect(master);
      return { audio, gain };
    };

    const dA = makeDeck(1);
    const dB = makeDeck(0);

    dA.audio.addEventListener('ended', () => this.handlePreviewEnded('A'));
    dB.audio.addEventListener('ended', () => this.handlePreviewEnded('B'));
    dA.audio.addEventListener('error', () => this.handlePreviewError('A'));
    dB.audio.addEventListener('error', () => this.handlePreviewError('B'));

    this.ctx = ctx;
    this.masterGain = master;
    this.analyser = analyser;
    this.audioA = dA.audio;
    this.gainA = dA.gain;
    this.audioB = dB.audio;
    this.gainB = dB.gain;
  }

  private handlePreviewEnded(deck: 'A' | 'B'): void {
    if (this.activeSourceType !== 'preview' || deck !== this.activeDeck || this.isCrossfading) {
      return;
    }
    if (this.repeatOne) {
      const audio = deck === 'A' ? this.audioA : this.audioB;
      if (audio) {
        audio.currentTime = 0;
        void audio.play();
      }
      return;
    }
    this.callbacks.onTrackEnded();
  }

  private handlePreviewError(deck: 'A' | 'B'): void {
    if (this.activeSourceType !== 'preview' || deck !== this.activeDeck) return;
    this.callbacks.onPlaybackUnavailable('Authorized audio preview stream could not be loaded.');
  }

  public getAnalyser(): AnalyserNode | null {
    return this.activeSourceType === 'preview' ? this.analyser : null;
  }

  public setConfig(cfg: {
    volume: number;
    muted: boolean;
    crossfadeSec: number;
    repeatOne: boolean;
  }): void {
    this.volume = Math.max(0, Math.min(1, cfg.volume));
    this.muted = cfg.muted;
    this.crossfadeSec = Math.max(0, Math.min(10, cfg.crossfadeSec));
    this.repeatOne = cfg.repeatOne;

    this.applyYoutubeVolume();

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        this.muted ? 0 : this.volume,
        this.ctx.currentTime,
        0.04,
      );
    }
  }

  public playYoutube(videoId: string, startSeconds = 0): void {
    this.stopPreviewDecks();
    this.activeSourceType = 'youtube';

    if (this.ytPlayer && this.ytReady) {
      this.ytPlayer.loadVideoById({ videoId, startSeconds });
      this.applyYoutubeVolume();
      this.callbacks.onPlayStateChange(true);
    } else {
      this.pendingYtLoad = { videoId, startSeconds };
    }
  }

  public async playPreviewImmediate(previewUrl: string): Promise<void> {
    this.stopYoutubeOnly();
    this.activeSourceType = 'preview';
    this.ensurePreviewGraph();
    this.cancelCrossfade();

    const active = this.activeDeck === 'A' ? this.audioA : this.audioB;
    const standby = this.activeDeck === 'A' ? this.audioB : this.audioA;
    const activeGain = this.activeDeck === 'A' ? this.gainA : this.gainB;
    const standbyGain = this.activeDeck === 'A' ? this.gainB : this.gainA;
    if (!active || !standby || !activeGain || !standbyGain || !this.ctx) return;

    standby.pause();
    standby.currentTime = 0;
    standbyGain.gain.setValueAtTime(0, this.ctx.currentTime);
    activeGain.gain.cancelScheduledValues(this.ctx.currentTime);
    activeGain.gain.setValueAtTime(1, this.ctx.currentTime);

    active.src = previewUrl;
    active.load();
    active.currentTime = 0;

    try {
      await active.play();
      this.callbacks.onPlayStateChange(true);
    } catch {
      this.callbacks.onPlayStateChange(false);
    }
  }

  public preloadPreview(previewUrl: string): void {
    if (this.activeSourceType !== 'preview' || this.isCrossfading) return;
    const standby = this.activeDeck === 'A' ? this.audioB : this.audioA;
    if (!standby) return;
    if (standby.src !== previewUrl) {
      standby.src = previewUrl;
      standby.load();
    }
  }

  public async crossfadeToPreview(previewUrl: string, durationSec?: number): Promise<void> {
    this.stopYoutubeOnly();
    this.activeSourceType = 'preview';
    this.ensurePreviewGraph();

    if (this.isCrossfading) {
      await this.playPreviewImmediate(previewUrl);
      return;
    }

    const active = this.activeDeck === 'A' ? this.audioA : this.audioB;
    const standby = this.activeDeck === 'A' ? this.audioB : this.audioA;
    const activeGain = this.activeDeck === 'A' ? this.gainA : this.gainB;
    const standbyGain = this.activeDeck === 'A' ? this.gainB : this.gainA;
    if (!active || !standby || !activeGain || !standbyGain || !this.ctx) return;

    const fadeDur = Math.max(0.5, durationSec ?? this.crossfadeSec);
    if (standby.src !== previewUrl) {
      standby.src = previewUrl;
      standby.load();
    }
    standby.currentTime = 0;
    this.isCrossfading = true;

    const now = this.ctx.currentTime;
    standbyGain.gain.cancelScheduledValues(now);
    standbyGain.gain.setValueAtTime(0.0001, now);
    activeGain.gain.cancelScheduledValues(now);
    activeGain.gain.setValueAtTime(1, now);

    try {
      await standby.play();
    } catch {
      this.isCrossfading = false;
      this.callbacks.onPlaybackUnavailable('Failed to crossfade preview stream.');
      return;
    }

    activeGain.gain.setValueCurveAtTime(buildFadeOutCurve(), now, fadeDur);
    standbyGain.gain.setValueCurveAtTime(buildFadeInCurve(), now, fadeDur);
    this.callbacks.onPlayStateChange(true);

    const outDeck = this.activeDeck;
    const inDeck = outDeck === 'A' ? 'B' : 'A';
    this.fadeTimerId = window.setTimeout(() => {
      const oldAudio = outDeck === 'A' ? this.audioA : this.audioB;
      const oldGain = outDeck === 'A' ? this.gainA : this.gainB;
      if (oldAudio) {
        oldAudio.pause();
        oldAudio.currentTime = 0;
      }
      if (oldGain && this.ctx) {
        oldGain.gain.cancelScheduledValues(this.ctx.currentTime);
        oldGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
      this.activeDeck = inDeck;
      this.isCrossfading = false;
      this.fadeTimerId = null;
      this.callbacks.onCrossfadeFinished();
    }, fadeDur * 1000 + 60);
  }

  private cancelCrossfade(): void {
    if (this.fadeTimerId !== null) {
      window.clearTimeout(this.fadeTimerId);
      this.fadeTimerId = null;
    }
    this.isCrossfading = false;
  }

  private stopPreviewDecks(): void {
    this.cancelCrossfade();
    this.audioA?.pause();
    this.audioB?.pause();
  }

  private stopYoutubeOnly(): void {
    if (this.ytPlayer && this.ytReady) {
      try {
        this.ytPlayer.pauseVideo();
      } catch {
        // ignore
      }
    }
  }

  public pause(): void {
    if (this.activeSourceType === 'youtube') {
      this.stopYoutubeOnly();
    } else {
      this.stopPreviewDecks();
    }
    this.callbacks.onPlayStateChange(false);
  }

  public resume(): void {
    if (this.activeSourceType === 'youtube') {
      if (this.ytPlayer && this.ytReady) {
        this.ytPlayer.playVideo();
        this.callbacks.onPlayStateChange(true);
      }
    } else {
      const active = this.activeDeck === 'A' ? this.audioA : this.audioB;
      if (active) {
        void active.play();
        this.callbacks.onPlayStateChange(true);
      }
    }
  }

  public seek(seconds: number): void {
    if (this.activeSourceType === 'youtube') {
      if (this.ytPlayer && this.ytReady) {
        this.ytPlayer.seekTo(seconds, true);
      }
    } else {
      const active = this.activeDeck === 'A' ? this.audioA : this.audioB;
      if (active && Number.isFinite(active.duration)) {
        active.currentTime = Math.max(0, Math.min(active.duration - 0.1, seconds));
      }
    }
  }

  public destroy(): void {
    this.cancelCrossfade();
    if (this.pollId !== null) {
      window.clearInterval(this.pollId);
      this.pollId = null;
    }
    this.audioA?.pause();
    this.audioB?.pause();
    void this.ctx?.close();
    try {
      this.ytPlayer?.destroy();
    } catch {
      // ignore
    }
  }
}
