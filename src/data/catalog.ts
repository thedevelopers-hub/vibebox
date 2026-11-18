export type SynthTexture = 'rain-warmth' | 'club-pulse' | 'acoustic-breeze' | 'sunrise-drone' | 'vinyl-dust';

export interface SynthPreset {
  bpm: number;
  rootMidi: number;
  scaleIntervals: number[];
  chordProgressions: number[][];
  waveform: 'sine' | 'triangle' | 'sawtooth';
  filterCutoffHz: number;
  grooveStyle: 'four-on-floor' | 'syncopated-afro' | 'boom-bap-soft' | 'bossa-clave' | 'minimal-pulse';
  texture: SynthTexture;
  label: string;
}

export interface EditorialFaq {
  question: string;
  answer: string;
}

export interface ListeningPairing {
  title: string;
  sonicProfile: string;
  whyItWorks: string;
}

export interface DiscoveryEntry {
  category: 'mood' | 'genre' | 'language' | 'collection';
  slug: string;
  path: string;
  title: string;
  shortLabel: string;
  kicker: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  editorialIntro: string[];
  sonicAnalysisTitle: string;
  sonicAnalysisBody: string;
  tempoLabel: string;
  harmonicContext: string;
  keyInstruments: string[];
  pairings: ListeningPairing[];
  faqs: EditorialFaq[];
  relatedPaths: string[];
  synthPreset: SynthPreset;
}

export interface MusicToolEntry {
  slug: string;
  path: string;
  title: string;
  shortLabel: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  editorialIntro: string[];
  practicalTips: string[];
  faqs: EditorialFaq[];
  relatedPaths: string[];
}

export const MOODS: DiscoveryEntry[] = [
  {
    category: 'mood',
    slug: 'late-night-focus',
    path: '/moods/late-night-focus',
    title: 'Late-Night Focus',
    shortLabel: 'Late-Night Focus',
    kicker: 'Mood Guide · Deep Concentration & Low-Stimulus Acoustics',
    seoTitle: 'Late-Night Focus Music Guide & Sound Lab | VIBEBOX',
    seoDescription:
      'Discover warm, low-stimulus late-night focus music characteristics, harmonic profiles, and an interactive Web Audio ambient synth deck.',
    summary:
      'Subdued harmonic movement, softened high frequencies, and steady mid-tempo pulses designed to reduce cognitive distraction during quiet evening work.',
    editorialIntro: [
      'Effective late-night focus music avoids sudden dynamic peaks, dense vocal hooks, and harsh upper-mid frequencies around 3 kHz to 5 kHz where human hearing is most alert. Instead, producers rely on gentle low-pass filtering, warm electric piano voicings, and subtle room resonance.',
      'From a harmonic standpoint, minor seventh and major ninth chords played at moderate tempos between 70 and 86 BPM create forward momentum without demanding active analytical attention. Use the interactive Sound Lab below to audition how filter cutoff and vinyl warmth alter concentration texture in real time.',
    ],
    sonicAnalysisTitle: 'Why Low-Pass Warmth Supports Sustained Attention',
    sonicAnalysisBody:
      'By rolling off brittle transients above 2,400 Hz and anchoring the mix around fundamental bass tones between 65 Hz and 140 Hz, sound blends naturally into quiet room acoustics rather than competing with reading or coding.',
    tempoLabel: '72–86 BPM',
    harmonicContext: 'Dorian & Minor Ninth Voicings',
    keyInstruments: ['Muted Rhodes Electric Piano', 'Felt Upright Piano', 'Sub-Bass Sine', 'Brushed Snare', 'Filtered Room Ambience'],
    pairings: [
      {
        title: 'Felt Piano & Tape Delay Sketches',
        sonicProfile: 'Sparse hammer transients with gentle wow-and-flutter pitch drift.',
        whyItWorks: 'Predictable phrase lengths help anchor reading rhythm without surprising the ear.',
      },
      {
        title: 'Dub-Influenced Minimal Chord Studies',
        sonicProfile: 'Deep sub-harmonic root notes paired with rhythmic echo trails.',
        whyItWorks: 'Creates a wide spatial backdrop that keeps late-evening silence from feeling sterile.',
      },
      {
        title: 'Soft Rain & Rhodes Progressions',
        sonicProfile: 'Pink-noise rainfall texture layered underneath warm seventh chords.',
        whyItWorks: 'Consistent broadband texture masks sudden household or street sounds.',
      },
    ],
    faqs: [
      {
        question: 'What tempo works best for late-night study or deep work?',
        answer:
          'Tempos between 70 and 88 BPM often feel unhurried while still providing subtle forward momentum. Instrumental tracks without prominent lyrics also reduce verbal working-memory interference.',
      },
      {
        question: 'Why does lo-fi or muted instrumentation feel less fatiguing at night?',
        answer:
          'Rolling off high frequencies and softening sharp drum transients reduces ear fatigue during long headphone sessions, especially at modest listening volumes.',
      },
    ],
    relatedPaths: [
      '/genres/lo-fi-instrumental-beats',
      '/genres/ambient-electronic',
      '/collections/global-late-night-sessions',
      '/tools/ambient-soundscape-mixer',
    ],
    synthPreset: {
      bpm: 78,
      rootMidi: 50, // D3
      scaleIntervals: [0, 2, 3, 5, 7, 9, 10],
      chordProgressions: [
        [0, 3, 7, 10],
        [5, 8, 12, 15],
        [7, 10, 14, 17],
        [2, 5, 9, 12],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1150,
      grooveStyle: 'boom-bap-soft',
      texture: 'rain-warmth',
      label: 'D Dorian Rhodes & Rain',
    },
  },
  {
    category: 'mood',
    slug: 'euphoric-club-energy',
    path: '/moods/euphoric-club-energy',
    title: 'Euphoric Club Energy',
    shortLabel: 'Euphoric Club Energy',
    kicker: 'Mood Guide · Kinetic Rhythm & Uplifting Synth Architecture',
    seoTitle: 'Euphoric Club Music Guide & Live Groove Synth | VIBEBOX',
    seoDescription:
      'Explore uplifting dance music structure, four-on-the-floor rhythmic tension, and test live synth progressions in the VIBEBOX Sound Lab.',
    summary:
      'Propulsive four-on-the-floor kick patterns, bright major-seventh arpeggios, and dynamic filter sweeps built for collective movement and high-energy rooms.',
    editorialIntro: [
      'Euphoric dance music balances physical low-end weight with soaring upper-register harmony. Rather than relying solely on loudness, classic house, melodic techno, and Nu-Disco arrangements build anticipation through gradual filter openings and rhythmic call-and-response.',
      'Between 120 and 128 BPM, the human stride and heartbeat lock easily onto quarter-note pulse divisions. Experiment with the live groove synth below to hear how opening the low-pass filter transforms a restrained bass loop into a bright peak-time progression.',
    ],
    sonicAnalysisTitle: 'Tension, Release & The Four-on-the-Floor Anchor',
    sonicAnalysisBody:
      'Steady quarter-note kick drums establish rhythmic certainty, freeing upper synth voices to explore syncopated off-beat chords and suspended ninth resolutions that create emotional lift.',
    tempoLabel: '120–128 BPM',
    harmonicContext: 'Mixolydian & Major Seventh Lifts',
    keyInstruments: ['Analog Poly Synth', '909-Style Kick & Open Hat', 'Octave Bassline', 'Chord Stab Voices', 'Percussive Clap'],
    pairings: [
      {
        title: 'Classic Piano House & Organ Bass',
        sonicProfile: 'Bright percussive keyboard chords riding over punchy sub-bass.',
        whyItWorks: 'Immediate harmonic clarity delivers uplift without needing heavy distortion.',
      },
      {
        title: 'Melodic Synth Arpeggio Sessions',
        sonicProfile: 'Rolling sixteenth-note patterns opening slowly across 16-bar phrases.',
        whyItWorks: 'Sustains momentum over extended listening sets and workouts.',
      },
    ],
    faqs: [
      {
        question: 'What BPM range defines classic house and euphoric club grooves?',
        answer:
          'Most house and disco-rooted club music sits comfortably between 118 and 128 BPM, giving dancers room for groove while maintaining brisk energy.',
      },
      {
        question: 'How do producers create emotional lift without vocals?',
        answer:
          'Suspended chords (sus2 and sus4), ascending octave basslines, and gradually brightening low-pass filters produce a clear sense of arrival.',
      },
    ],
    relatedPaths: [
      '/genres/indie-synthpop',
      '/genres/afrobeats-percussion-grooves',
      '/tools/bpm-tap-tempo-calculator',
      '/tools/chord-progression-explorer',
    ],
    synthPreset: {
      bpm: 124,
      rootMidi: 53, // F3
      scaleIntervals: [0, 2, 4, 5, 7, 9, 10],
      chordProgressions: [
        [0, 4, 7, 11],
        [7, 11, 14, 17],
        [9, 12, 16, 19],
        [5, 9, 12, 16],
      ],
      waveform: 'sawtooth',
      filterCutoffHz: 2400,
      grooveStyle: 'four-on-floor',
      texture: 'club-pulse',
      label: 'F Major 7th House Pulse',
    },
  },
  {
    category: 'mood',
    slug: 'rainy-day-acoustic',
    path: '/moods/rainy-day-acoustic',
    title: 'Rainy Day Acoustic',
    shortLabel: 'Rainy Day Acoustic',
    kicker: 'Mood Guide · Intimate Plucked Strings & Unhurried Cadence',
    seoTitle: 'Rainy Day Acoustic Music Guide & Sound Palette | VIBEBOX',
    seoDescription:
      'Explore intimate acoustic music idioms, fingerstyle harmonic voicings, and a calming Web Audio nylon-plucked soundscape on VIBEBOX.',
    summary:
      'Close-miked wooden instruments, gentle fingerpicked intervals, and natural room air suited to overcast mornings and quiet reflection.',
    editorialIntro: [
      'Acoustic listening thrives on dynamic subtlety—the brush of fingers across nylon or bronze strings, the woody resonance of a hollow soundbox, and unquantized phrasing that breathes naturally with the player.',
      'Unlike heavily compressed club mixes, acoustic arrangements leave generous quiet space between notes. Listen to how plucked harmonic intervals pair with soft rain noise inside the interactive VIBEBOX audio engine.',
    ],
    sonicAnalysisTitle: 'Micro-Dynamics and Wooden Resonance',
    sonicAnalysisBody:
      'Natural acoustic instruments carry rich even-order overtones in the 250 Hz to 900 Hz body range. Leaving ample headroom lets soft phrases stay conversational and intimate.',
    tempoLabel: '68–94 BPM',
    harmonicContext: 'Open-String Major & Add9 Voicings',
    keyInstruments: ['Nylon-String Guitar', 'Warm Upright Bass', 'Felt Mallet Percussion', 'Soft Brush Kit', 'Room Ambience'],
    pairings: [
      {
        title: 'Nylon-String Fingerstyle & Bossa Sketches',
        sonicProfile: 'Warm thumb bass alternating against syncopated upper chord plucks.',
        whyItWorks: 'Gentle rhythmic sway brings warmth to quiet afternoons.',
      },
      {
        title: 'Chamber Folk & Cello Drones',
        sonicProfile: 'Sustained bowed low strings beneath sparse acoustic arpeggios.',
        whyItWorks: 'Bridges contemplative classical textures with contemporary songwriting.',
      },
    ],
    faqs: [
      {
        question: 'What makes add9 and maj7 chords sound nostalgic in acoustic music?',
        answer:
          'Adding the second or seventh degree introduces gentle harmonic color without sharp dissonance, evoking warmth and openness.',
      },
    ],
    relatedPaths: [
      '/genres/bossa-nova-guitar',
      '/collections/acoustic-world-horizons',
      '/languages/portuguese',
      '/tools/chord-progression-explorer',
    ],
    synthPreset: {
      bpm: 84,
      rootMidi: 55, // G3
      scaleIntervals: [0, 2, 4, 7, 9],
      chordProgressions: [
        [0, 4, 7, 14],
        [4, 7, 11, 14],
        [9, 12, 16, 19],
        [5, 9, 12, 14],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1650,
      grooveStyle: 'bossa-clave',
      texture: 'rain-warmth',
      label: 'G Add9 Acoustic Pluck & Rain',
    },
  },
  {
    category: 'mood',
    slug: 'sunrise-ambient-calm',
    path: '/moods/sunrise-ambient-calm',
    title: 'Sunrise Ambient Calm',
    shortLabel: 'Sunrise Ambient Calm',
    kicker: 'Mood Guide · Beatless Soundscapes & Gradual Harmonic Drift',
    seoTitle: 'Sunrise Ambient Calm Music & Soundscape Studio | VIBEBOX',
    seoDescription:
      'Explore beatless ambient soundscapes, pentatonic drone harmony, and build calm morning textures with VIBEBOX Web Audio tools.',
    summary:
      'Beatless or gently pulsing harmonic washes built from slow oscillator envelopes, pentatonic intervals, and open spatial sustain.',
    editorialIntro: [
      'Early-morning ambient music replaces rigid percussion with slow attack envelopes and long decay tails. When notes fade in gradually over hundreds of milliseconds, the listener experiences music as shifting atmosphere rather than discrete beats.',
      'Pentatonic and Lydian pitch collections eliminate harsh semitone clashes, allowing overlapping synth pads and chime-like harmonics to drift peacefully.',
    ],
    sonicAnalysisTitle: 'Slow Envelopes & Beatless Listening',
    sonicAnalysisBody:
      'Extending attack times removes sharp percussive impact, letting harmonic overtones bloom gently across the stereo field without startling a rested ear.',
    tempoLabel: 'Beatless / 60–72 BPM',
    harmonicContext: 'Major Pentatonic & Lydian Sustains',
    keyInstruments: ['Warm Sine Pad', 'Harmonic Bell Overtones', 'Tape-Filtered Drone', 'Soft Wind Noise'],
    pairings: [
      {
        title: 'Japanese Environmental & Kankyō Ongaku',
        sonicProfile: 'Minimalist glass-like keyboard tones crafted for architectural spaces.',
        whyItWorks: 'Honors silence as an active compositional element.',
      },
      {
        title: 'Modular Drone & Acoustic Field Layers',
        sonicProfile: 'Slowly evolving analog harmonics blended with natural morning air.',
        whyItWorks: 'Eases transitions into reading, meditation, or calm creative routines.',
      },
    ],
    faqs: [
      {
        question: 'How does beatless ambient music maintain interest without drums?',
        answer:
          'Subtle shifts in harmonic timbre, stereo panning, and slow filter modulation create gradual motion even in the absence of a drum pulse.',
      },
    ],
    relatedPaths: [
      '/genres/ambient-electronic',
      '/languages/japanese',
      '/tools/ambient-soundscape-mixer',
      '/collections/analog-warmth-essentials',
    ],
    synthPreset: {
      bpm: 64,
      rootMidi: 48, // C3
      scaleIntervals: [0, 2, 4, 6, 7, 9, 11],
      chordProgressions: [
        [0, 4, 7, 11],
        [2, 6, 9, 14],
        [7, 11, 14, 18],
        [5, 9, 12, 16],
      ],
      waveform: 'sine',
      filterCutoffHz: 1450,
      grooveStyle: 'minimal-pulse',
      texture: 'sunrise-drone',
      label: 'C Lydian Morning Horizon',
    },
  },
];

export const GENRES: DiscoveryEntry[] = [
  {
    category: 'genre',
    slug: 'ambient-electronic',
    path: '/genres/ambient-electronic',
    title: 'Ambient Electronic',
    shortLabel: 'Ambient Electronic',
    kicker: 'Genre Atlas · Atmospheric Synthesis & Spatial Sound Design',
    seoTitle: 'Ambient Electronic Music Guide & Live Synth | VIBEBOX',
    seoDescription:
      'Understand ambient electronic music history, synthesizer textures, modal harmony, and play a live Web Audio ambient patch on VIBEBOX.',
    summary:
      'Tone, texture, and acoustic space prioritized over conventional verse-chorus song structure, rooted in tape loops, modular synthesis, and environmental acoustics.',
    editorialIntro: [
      'Emerging in the 1970s through tape-loop experimentation and early polyphonic synthesizers, ambient electronic music treats timbre and room resonance as primary compositional materials. Pioneering works demonstrated that music could be both deeply rewarding to active attention and unobtrusive as background atmosphere.',
      'Modern ambient spans warm analog drones, granular acoustic processing, and Japanese environmental music (kankyō ongaku). Use the VIBEBOX sound engine to isolate warm sine layers against harmonic pads.',
    ],
    sonicAnalysisTitle: 'Timbre, Modulation & Spatial Depth',
    sonicAnalysisBody:
      'Slow low-frequency oscillators (LFOs) gently shift filter brightness and pitch stability, mimicking the organic breath of acoustic ensembles.',
    tempoLabel: 'Free / 60–90 BPM',
    harmonicContext: 'Modal Sustains & Suspended Voicings',
    keyInstruments: ['Polyphonic Analog Synth', 'Tape Delay', 'Granular Pad', 'Subtle Sub Drone'],
    pairings: [
      {
        title: 'Berlin School Sequencer Meditations',
        sonicProfile: 'Hypnotic repeating analog arpeggios layered under wide string pads.',
        whyItWorks: 'Combines steady rhythmic curiosity with expansive harmonic space.',
      },
      {
        title: 'Electro-Acoustic Tape Works',
        sonicProfile: 'Cello or piano phrases processed through warm magnetic saturation.',
        whyItWorks: 'Pairs human tactile nuance with limitless electronic sustain.',
      },
    ],
    faqs: [
      {
        question: 'What distinguishes ambient electronic from standard chillout music?',
        answer:
          'Chillout usually retains a clear pop or downtempo beat structure, whereas ambient electronic often minimizes or removes rhythmic pulse to foreground atmosphere and tone.',
      },
    ],
    relatedPaths: [
      '/moods/sunrise-ambient-calm',
      '/languages/german',
      '/languages/japanese',
      '/tools/ambient-soundscape-mixer',
    ],
    synthPreset: {
      bpm: 68,
      rootMidi: 45, // A2
      scaleIntervals: [0, 2, 4, 7, 9],
      chordProgressions: [
        [0, 7, 12, 16],
        [5, 9, 12, 16],
        [2, 7, 11, 14],
        [0, 4, 7, 14],
      ],
      waveform: 'sine',
      filterCutoffHz: 1200,
      grooveStyle: 'minimal-pulse',
      texture: 'sunrise-drone',
      label: 'A Sus2 Spatial Pad',
    },
  },
  {
    category: 'genre',
    slug: 'lo-fi-instrumental-beats',
    path: '/genres/lo-fi-instrumental-beats',
    title: 'Lo-Fi Instrumental Beats',
    shortLabel: 'Lo-Fi Beats',
    kicker: 'Genre Atlas · Dusty Swing Grooves & Jazz-Inflected Harmony',
    seoTitle: 'Lo-Fi Instrumental Beats Guide & Beat Synth | VIBEBOX',
    seoDescription:
      'Learn how lo-fi hip-hop beats blend jazz seventh chords, swing percussion, and tape warmth, and audition live grooves on VIBEBOX.',
    summary:
      'Unquantized boom-bap swing, warm Rhodes and upright piano seventh chords, and subtle analog tape coloration inspired by 1990s hardware samplers.',
    editorialIntro: [
      'Lo-fi instrumental hip-hop grew directly out of hardware sampler craft—chopping warm soul and jazz vinyl chords on classic 12-bit and 16-bit drum machines. Its signature intimacy comes from imperfect timing: snares sit slightly behind the beat while hi-hats swing loosely.',
      'Rather than chasing bright studio polish, lo-fi production embraces rolled-off treble, gentle compression, and nostalgic vinyl texture. Trigger the live beat engine below to hear how swing and soft filtering shape the groove.',
    ],
    sonicAnalysisTitle: 'Micro-Timing Swing & Extended Jazz Chords',
    sonicAnalysisBody:
      'Delaying every second sixteenth note by 54% to 60% creates an organic human nod, while minor 7th and 9th voicings provide rich harmonic color in just two bars.',
    tempoLabel: '74–90 BPM',
    harmonicContext: 'Jazz ii–V–I & Minor 9th Loops',
    keyInstruments: ['Electric Piano', 'Hardware Sampler Kick & Snare', 'Muffled Upright Bass', 'Vinyl Texture'],
    pairings: [
      {
        title: 'Jazz-Hop & Rhodes Loops',
        sonicProfile: 'Two-bar electric piano turnaround over dusty brushed drums.',
        whyItWorks: 'Compact loops provide comforting predictability for reading and focus.',
      },
      {
        title: 'Japanese Chillhop Traditions',
        sonicProfile: 'Crisp acoustic guitar flourishes woven into mellow sampled grooves.',
        whyItWorks: 'Highlights melodic warmth alongside relaxed boom-bap percussion.',
      },
    ],
    faqs: [
      {
        question: 'Why do lo-fi beats often use vinyl crackle or tape hiss?',
        answer:
          'Subtle analog noise fills quiet gaps between drum hits, lending physical warmth and continuity reminiscent of vintage vinyl records.',
      },
    ],
    relatedPaths: [
      '/moods/late-night-focus',
      '/collections/global-late-night-sessions',
      '/tools/bpm-tap-tempo-calculator',
      '/tools/chord-progression-explorer',
    ],
    synthPreset: {
      bpm: 82,
      rootMidi: 52, // E3
      scaleIntervals: [0, 2, 3, 5, 7, 9, 10],
      chordProgressions: [
        [0, 3, 7, 10],
        [5, 9, 12, 16],
        [2, 5, 9, 12],
        [7, 10, 14, 17],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1100,
      grooveStyle: 'boom-bap-soft',
      texture: 'vinyl-dust',
      label: 'E Minor 7th Lo-Fi Loop',
    },
  },
  {
    category: 'genre',
    slug: 'afrobeats-percussion-grooves',
    path: '/genres/afrobeats-percussion-grooves',
    title: 'Afrobeats & West African Grooves',
    shortLabel: 'Afrobeats Grooves',
    kicker: 'Genre Atlas · Syncopated Polyrhythm & Log-Drum Bounce',
    seoTitle: 'Afrobeats Rhythm Guide & Percussion Lab | VIBEBOX',
    seoDescription:
      'Explore West African Afrobeats rhythmic structure, clave syncopation, and interactive Web Audio groove synthesis on VIBEBOX.',
    summary:
      'Infectious 3-2 and 2-3 timeline syncopations, interlocking shaker-and-rimshot percussion, and buoyant melodic basslines spanning Lagos, Accra, and London.',
    editorialIntro: [
      'Contemporary Afrobeats draws vitality from rich West African rhythmic timelines, Ghanaian highlife guitar phrasing, and modern electronic drum programming. Unlike rigid straight-ahead club beats, its magic lives in the pocket between kick, rimshot, and shaker.',
      'Tempos typically hover between 96 and 114 BPM—fast enough to move effortlessly, yet spacious enough for expressive vocal cadence and crisp percussive accents.',
    ],
    sonicAnalysisTitle: 'The Timeline Clave & Pocket Syncopation',
    sonicAnalysisBody:
      'Syncopated rimshots accent the "and" of beats, creating conversational call-and-response against grounded low-end bass notes.',
    tempoLabel: '98–114 BPM',
    harmonicContext: 'Warm Pentatonic & Minor Seventh Hooks',
    keyInstruments: ['Log Drum & Sub Bass', 'Crisp Rimshot', 'Interlocking Shaker', 'Muted Electric Guitar', 'Warm Synth Plucks'],
    pairings: [
      {
        title: 'Highlife-Inflected Guitar Grooves',
        sonicProfile: 'Clean single-coil guitar arpeggios dancing above buoyant percussion.',
        whyItWorks: 'Melodic lightness balances the punch of modern sub-bass.',
      },
      {
        title: 'Alte & Midnight Afro-Soul',
        sonicProfile: 'Slower 96 BPM tempos with lush electric piano harmony.',
        whyItWorks: 'Translates dancefloor polyrhythms into relaxed evening listening.',
      },
    ],
    faqs: [
      {
        question: 'What tempo is typical for contemporary Afrobeats?',
        answer:
          'Most Afrobeats tracks fall between 96 and 115 BPM, creating an unhurried bounce where syncopated percussion patterns remain crystal clear.',
      },
    ],
    relatedPaths: [
      '/moods/euphoric-club-energy',
      '/languages/english',
      '/languages/french',
      '/tools/bpm-tap-tempo-calculator',
    ],
    synthPreset: {
      bpm: 106,
      rootMidi: 50, // D3
      scaleIntervals: [0, 2, 3, 5, 7, 9, 10],
      chordProgressions: [
        [0, 3, 7, 10],
        [7, 10, 14, 17],
        [5, 8, 12, 15],
        [3, 7, 10, 14],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1850,
      grooveStyle: 'syncopated-afro',
      texture: 'club-pulse',
      label: 'D Minor Syncopated Pocket',
    },
  },
  {
    category: 'genre',
    slug: 'indie-synthpop',
    path: '/genres/indie-synthpop',
    title: 'Indie Synthpop',
    shortLabel: 'Indie Synthpop',
    kicker: 'Genre Atlas · Detuned Analog Leads & Driving Pop Hooks',
    seoTitle: 'Indie Synthpop Music Guide & Analog Synth | VIBEBOX',
    seoDescription:
      'Explore indie synthpop instrumentation, chorus-drenched analog pads, driving eighth-note basslines, and live Web Audio synthesis on VIBEBOX.',
    summary:
      'Crisp electronic drum machines paired with lush chorus-treated synthesizers, melodic eighth-note basslines, and bittersweet major-minor harmonic turns.',
    editorialIntro: [
      'From 1980s Sheffield and Manchester pioneers to modern bedroom synth-pop producers across Seoul, Stockholm, and Montreal, indie synthpop marries danceable motorik or drum-machine propulsion with intimate songwriting.',
      'Its unmistakable shimmer comes from detuned sawtooth oscillators softened through stereo chorus and bright plate-style decay.',
    ],
    sonicAnalysisTitle: 'Detuned Oscillators & Driving Eighth-Note Bass',
    sonicAnalysisBody:
      'Steady eighth-note root bass provides momentum while wide polyphonic synth pads carry emotional tension between tonic and submediant chords.',
    tempoLabel: '108–126 BPM',
    harmonicContext: 'Bittersweet Major & Relative Minor Shifts',
    keyInstruments: ['Analog Poly Synth', 'Eighth-Note Juno Bass', 'Gated Electronic Snare', 'Clean Chorus Guitar'],
    pairings: [
      {
        title: 'Dreamy Midnight Drive Pop',
        sonicProfile: 'Wide stereo pads with bright arpeggiated counter-melodies.',
        whyItWorks: 'Delivers momentum and nostalgia simultaneously.',
      },
      {
        title: 'City Pop & Modern Korean Synth',
        sonicProfile: 'Sophisticated major seventh extensions with crisp slap-style synth bass.',
        whyItWorks: 'Connects 1980s urban boogie harmony with contemporary indie production.',
      },
    ],
    faqs: [
      {
        question: 'Why do indie synthpop leads sound wide and shimmering?',
        answer:
          'Layering two slightly detuned oscillators and passing them through subtle chorus modulation thickens the tone naturally.',
      },
    ],
    relatedPaths: [
      '/moods/euphoric-club-energy',
      '/languages/korean',
      '/languages/japanese',
      '/collections/analog-warmth-essentials',
    ],
    synthPreset: {
      bpm: 116,
      rootMidi: 55, // G3
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordProgressions: [
        [0, 4, 7, 11],
        [9, 12, 16, 19],
        [4, 7, 11, 14],
        [7, 11, 14, 17],
      ],
      waveform: 'sawtooth',
      filterCutoffHz: 2100,
      grooveStyle: 'four-on-floor',
      texture: 'club-pulse',
      label: 'G Major 7th Neon Analog',
    },
  },
  {
    category: 'genre',
    slug: 'bossa-nova-guitar',
    path: '/genres/bossa-nova-guitar',
    title: 'Bossa Nova & Samba Jazz',
    shortLabel: 'Bossa Nova',
    kicker: 'Genre Atlas · Rio Guitar Clave & Sophisticated Harmony',
    seoTitle: 'Bossa Nova Music Guide & Clave Rhythm Lab | VIBEBOX',
    seoDescription:
      'Discover Bossa Nova guitar rhythm, jazz-influenced chord extensions, and hear the signature clave pulse in VIBEBOX Sound Lab.',
    summary:
      'Born in Rio de Janeiro in the late 1950s, Bossa Nova pairs understated vocal intimacy with interlocking nylon-guitar batida rhythms and lush jazz extensions.',
    editorialIntro: [
      'Bossa Nova transformed Brazilian samba by stripping away massive street percussion and distilling its rhythmic sway onto a solo acoustic guitar. The thumb outlines a steady alternating bass while fingers pluck syncopated upper chord tones across a two-bar clave.',
      'Its harmonic language—rich in major sevenths, minor sixths, and chromatic passing basslines—remains a cornerstone of global songwriting.',
    ],
    sonicAnalysisTitle: 'The Batida Guitar Pattern & Chromatic Motion',
    sonicAnalysisBody:
      'Rather than strumming every beat, the right hand anticipates chord changes by an eighth note, giving the music an effortless floating quality.',
    tempoLabel: '92–120 BPM',
    harmonicContext: 'Chromatic ii–V Substitutions & Maj7 Extensions',
    keyInstruments: ['Nylon Acoustic Guitar', 'Upright Double Bass', 'Brushed Snare Rim', 'Soft Shaker'],
    pairings: [
      {
        title: 'Classic Rio Acoustic Quartets',
        sonicProfile: 'Nylon guitar, upright bass, brushed drums, and airy flute or piano.',
        whyItWorks: 'Exemplifies clarity, warmth, and conversational interplay.',
      },
      {
        title: 'Contemporary Brazilian MPB & Neo-Bossa',
        sonicProfile: 'Modern Rhodes and clean electric tones grounded in traditional clave sway.',
        whyItWorks: 'Bridges mid-century elegance with contemporary production.',
      },
    ],
    faqs: [
      {
        question: 'How does Bossa Nova differ from traditional Samba?',
        answer:
          'Samba emphasizes exuberant ensemble percussion and carnival energy, whereas Bossa Nova slows and softens the rhythm into an intimate chamber-jazz style led by nylon guitar.',
      },
    ],
    relatedPaths: [
      '/moods/rainy-day-acoustic',
      '/languages/portuguese',
      '/collections/acoustic-world-horizons',
      '/tools/chord-progression-explorer',
    ],
    synthPreset: {
      bpm: 102,
      rootMidi: 53, // F3
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordProgressions: [
        [0, 4, 7, 11],
        [2, 5, 9, 12],
        [7, 10, 14, 17],
        [1, 5, 8, 12],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1550,
      grooveStyle: 'bossa-clave',
      texture: 'acoustic-breeze',
      label: 'F Maj7 Bossa Clave',
    },
  },
];

export const LANGUAGE_TRADITIONS: DiscoveryEntry[] = [
  {
    category: 'language',
    slug: 'english',
    path: '/languages/english',
    title: 'English-Language Music Traditions',
    shortLabel: 'English',
    kicker: 'Global Language Guide · North America, UK, Ireland, Australia & Diaspora',
    seoTitle: 'English Music Discovery Guide & Genres | VIBEBOX',
    seoDescription:
      'Explore English-language music traditions from UK electronic and Americana folk to indie synthpop with interactive VIBEBOX audio tools.',
    summary:
      'Spanning Appalachian folk ballads, Detroit soul, UK garage, and Pacific Northwest indie, English-language songwriting spans diverse rhythmic and harmonic dialects.',
    editorialIntro: [
      'Because English-language music circulates across distinct regional scenes—from Nashville acoustic picking and Chicago house to London broken beat and Melbourne neo-psychedelia—its sonic identity is defined less by a single rhythm than by constant cross-pollination.',
      'Use this guide to explore harmonic moods common across contemporary English-language indie, electronic, and acoustic traditions.',
    ],
    sonicAnalysisTitle: 'Regional Dialects Inside English Songwriting',
    sonicAnalysisBody:
      'British electronic scenes emphasize syncopated bassweight and breakbeats, while North American folk and soul traditions lean on acoustic backbeat and pentatonic vocal phrasing.',
    tempoLabel: '76–130 BPM',
    harmonicContext: 'Pentatonic, Dorian & Mixolydian Pop',
    keyInstruments: ['Electric & Acoustic Guitar', 'Analog Synth', 'Drum Machine', 'Electric Piano'],
    pairings: [
      {
        title: 'UK Downtempo & Broken Beat',
        sonicProfile: 'Syncopated jazz-inflected drums under warm basslines.',
        whyItWorks: 'Demonstrates London’s enduring club-meets-jazz heritage.',
      },
      {
        title: 'Indie Folk & Chamber Acoustic',
        sonicProfile: 'Open-tuned acoustic guitars paired with intimate vocal harmonies.',
        whyItWorks: 'Highlights lyrical storytelling and dynamic space.',
      },
    ],
    faqs: [
      {
        question: 'Is there an international localization of VIBEBOX in English?',
        answer: 'Yes. English is the canonical primary edition of VIBEBOX, alongside reviewed Spanish, French, and Hindi editions.',
      },
    ],
    relatedPaths: ['/genres/indie-synthpop', '/genres/lo-fi-instrumental-beats', '/collections/analog-warmth-essentials'],
    synthPreset: {
      bpm: 112,
      rootMidi: 52,
      scaleIntervals: [0, 2, 4, 7, 9],
      chordProgressions: [
        [0, 4, 7, 11],
        [7, 11, 14, 17],
        [9, 12, 16, 19],
        [5, 9, 12, 16],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1800,
      grooveStyle: 'four-on-floor',
      texture: 'club-pulse',
      label: 'E Major Indie Groove',
    },
  },
  {
    category: 'language',
    slug: 'hindi',
    path: '/languages/hindi',
    title: 'Hindi & South Asian Soundscapes',
    shortLabel: 'Hindi (हिन्दी)',
    kicker: 'Global Language Guide · Hindustani Raga Intervals & Modern Fusion',
    seoTitle: 'Hindi Music Discovery & Raga Harmony Guide | VIBEBOX',
    seoDescription:
      'Explore Hindi music traditions, Hindustani raga modal colors, tabla rhythmic cycles, and modern indie fusion on VIBEBOX.',
    summary:
      'From Hindustani classical raag scales and poetic ghazal phrasing to Mumbai indie-electronic fusion and soulful acoustic songwriting.',
    editorialIntro: [
      'Hindi music carries extraordinary melodic depth rooted in Hindustani classical ragas—modal frameworks that associate specific pitch intervals, ornamental glides (meend), and moods with times of day. Contemporary independent artists across Mumbai, Delhi, and Bengaluru weave these traditional intervals into ambient electronics, lo-fi beats, and acoustic folk.',
      'Listen to the modal drone preset in the Sound Lab below to hear how sustained root-fifth harmonics frame lyrical upper-register melodies.',
    ],
    sonicAnalysisTitle: 'Modal Drone Anchors & Rhythmic Cycles (Tala)',
    sonicAnalysisBody:
      'Unlike Western functional chord changes, raga-inspired arrangements anchor over a continuous tonic-fifth drone (tanpura), allowing intricate melodic curves to shine.',
    tempoLabel: '72–112 BPM',
    harmonicContext: 'Kafi, Yaman & Bhairav Modal Colors',
    keyInstruments: ['Tanpura-Inspired Drone', 'Tabla-Style Percussion', 'Acoustic Harmonium Pad', 'Flute Lead'],
    pairings: [
      {
        title: 'Indie Hindi Acoustic & Sufi Folk',
        sonicProfile: 'Warm acoustic guitar strummed beneath soaring modal vocal lines.',
        whyItWorks: 'Blends traditional poetic cadence with contemporary intimacy.',
      },
      {
        title: 'South Asian Ambient & Electronica',
        sonicProfile: 'Modular synth textures built around classical raga pitch sets.',
        whyItWorks: 'Honors ancient harmonic resonance inside modern sound design.',
      },
    ],
    faqs: [
      {
        question: 'Does VIBEBOX offer a reviewed Hindi interface edition?',
        answer:
          'Yes. You can switch to our reviewed Hindi edition (/hi) from the language switcher to browse core discovery guides in Hindi.',
      },
    ],
    relatedPaths: ['/hi', '/moods/sunrise-ambient-calm', '/collections/acoustic-world-horizons'],
    synthPreset: {
      bpm: 84,
      rootMidi: 48, // C3
      scaleIntervals: [0, 2, 4, 6, 7, 9, 11], // Yaman / Lydian flavor
      chordProgressions: [
        [0, 7, 12, 16],
        [2, 7, 11, 14],
        [6, 9, 12, 18],
        [0, 4, 7, 11],
      ],
      waveform: 'sine',
      filterCutoffHz: 1500,
      grooveStyle: 'minimal-pulse',
      texture: 'sunrise-drone',
      label: 'Yaman-Inspired Modal Drone',
    },
  },
  {
    category: 'language',
    slug: 'spanish',
    path: '/languages/spanish',
    title: 'Spanish-Language Global Rhythms',
    shortLabel: 'Spanish (Español)',
    kicker: 'Global Language Guide · Latin America, Caribbean & Iberian Traditions',
    seoTitle: 'Spanish Music Traditions & Rhythm Guide | VIBEBOX',
    seoDescription:
      'Explore Spanish-language music from bolero acoustic guitar and Latin jazz to modern alternative electronic scenes on VIBEBOX.',
    summary:
      'Encompassing Madrid indie pop, Buenos Aires rock nacional, Caribbean clave traditions, and contemporary Latin alternative electronics.',
    editorialIntro: [
      'Spanish-language music bridges continents through shared poetic cadence and astonishing rhythmic diversity—from the intimate nylon-string boleros of Mexico and Cuba to Bogotá’s vibrant synth-cumbia and Madrid’s electronic underground.',
      'Even in modern minimalist productions, subtle tresillo (3+3+2) rhythmic subdivisions lend natural warmth and forward sway.',
    ],
    sonicAnalysisTitle: 'The Tresillo Pulse & Acoustic Guitar Storytelling',
    sonicAnalysisBody:
      'Subdividing eight eighth notes into 3+3+2 creates an immediately recognizable bounce shared across Caribbean, Andean, and contemporary urban rhythms.',
    tempoLabel: '88–118 BPM',
    harmonicContext: 'Phrygian Cadences & Warm Minor Sevenths',
    keyInstruments: ['Nylon & Acoustic Guitar', 'Hand Percussion', 'Warm Sub Bass', 'Electric Piano'],
    pairings: [
      {
        title: 'Modern Bolero & Latin Alternative',
        sonicProfile: 'Slow, expressive acoustic voicings paired with subtle electronic textures.',
        whyItWorks: 'Preserves emotional storytelling while embracing crisp modern production.',
      },
      {
        title: 'Electro-Cumbia & Andean Downtempo',
        sonicProfile: 'Organic wind and string samples riding hypnotic mid-tempo percussion.',
        whyItWorks: 'Bridges folk heritage with club-ready low end.',
      },
    ],
    faqs: [
      {
        question: 'Can I browse VIBEBOX in Spanish?',
        answer: 'Yes. A fully reviewed Spanish edition is available at /es with dedicated Spanish copy and Sound Lab presets.',
      },
    ],
    relatedPaths: ['/es', '/genres/bossa-nova-guitar', '/collections/acoustic-world-horizons'],
    synthPreset: {
      bpm: 96,
      rootMidi: 52, // E3
      scaleIntervals: [0, 1, 4, 5, 7, 8, 10],
      chordProgressions: [
        [0, 4, 7, 10],
        [1, 5, 8, 12],
        [3, 7, 10, 14],
        [0, 3, 7, 10],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1700,
      grooveStyle: 'bossa-clave',
      texture: 'acoustic-breeze',
      label: 'E Spanish Modal Acoustic',
    },
  },
  {
    category: 'language',
    slug: 'french',
    path: '/languages/french',
    title: 'French Chanson, Touch & Electronica',
    shortLabel: 'French (Français)',
    kicker: 'Global Language Guide · Parisian Electronic Touch & Poetic Chanson',
    seoTitle: 'French Music Discovery: Chanson & French Touch | VIBEBOX',
    seoDescription:
      'Discover French music from acoustic chanson harmony to filtered French Touch house grooves with interactive audio presets on VIBEBOX.',
    summary:
      'Connecting mid-century Parisian chanson lyricism, Impressionist piano harmony, and the crisp filtered grooves of French electronic producers.',
    editorialIntro: [
      'French music holds a distinctive dialogue between classical harmonic color—echoing Debussy and Satie’s ninth chords—and sleek electronic groove craft. From Brussels and Paris to Montreal and Dakar, francophone artists continually reinvent pop, rap, and club music.',
      'French Touch electronic music famously used sweeping resonant low-pass filters and crisp compressed drums to turn concise disco loops into hypnotic anthems.',
    ],
    sonicAnalysisTitle: 'Impressionist Chords & Resonant Filter Sweeps',
    sonicAnalysisBody:
      'Combining crisp analog percussion with filtered seventh chords balances dancefloor precision with airy elegance.',
    tempoLabel: '108–124 BPM',
    harmonicContext: 'Major Ninths & Chromatic Jazz Extensions',
    keyInstruments: ['Filtered Poly Synth', 'Warm Bassline', 'Crisp 4/4 Percussion', 'Upright Felt Piano'],
    pairings: [
      {
        title: 'French Touch Filtered Disco Grooves',
        sonicProfile: 'Punchy compressed drums beneath sweeping harmonic loops.',
        whyItWorks: 'Demonstrates how timbre movement can carry an entire arrangement.',
      },
      {
        title: 'Contemporary Francophone Indie',
        sonicProfile: 'Whispered vocal phrasing over warm analog keyboards.',
        whyItWorks: 'Maintains the intimacy of classic chanson in a modern studio frame.',
      },
    ],
    faqs: [
      {
        question: 'Is VIBEBOX available in French?',
        answer: 'Yes. Visit /fr for the reviewed French-language edition of VIBEBOX.',
      },
    ],
    relatedPaths: ['/fr', '/genres/indie-synthpop', '/moods/euphoric-club-energy'],
    synthPreset: {
      bpm: 120,
      rootMidi: 53,
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordProgressions: [
        [0, 4, 7, 11],
        [9, 12, 16, 19],
        [5, 9, 12, 16],
        [7, 11, 14, 17],
      ],
      waveform: 'sawtooth',
      filterCutoffHz: 1950,
      grooveStyle: 'four-on-floor',
      texture: 'club-pulse',
      label: 'F Maj9 Parisian Filter Groove',
    },
  },
  {
    category: 'language',
    slug: 'portuguese',
    path: '/languages/portuguese',
    title: 'Portuguese & Lusophone Grooves',
    shortLabel: 'Portuguese',
    kicker: 'Global Language Guide · Brazil, Portugal, Angola & Cabo Verde',
    seoTitle: 'Portuguese & Brazilian Music Discovery Guide | VIBEBOX',
    seoDescription:
      'Explore Portuguese-language music spanning Brazilian Bossa Nova, MPB, Lisbon fado guitars, and Lusophone rhythms on VIBEBOX.',
    summary:
      'Rich acoustic guitar traditions linking Rio de Janeiro’s Bossa Nova and MPB, Lisbon’s fado melancholy, and Cabo Verde’s morna and coladeira.',
    editorialIntro: [
      'Across Brazil, Portugal, Angola, and Cabo Verde, Portuguese-language music celebrates nuanced rhythmic syncopation and deeply expressive chord progressions. Even upbeat dance styles often carry a bittersweet emotional grace known as saudade.',
      'Harmonically, Brazilian MPB and Bossa Nova rank among the richest popular songwriting traditions in the world, welcoming altered dominant chords and fluid bass counter-melodies.',
    ],
    sonicAnalysisTitle: 'Syncopated Guitar & Voice-Led Basslines',
    sonicAnalysisBody:
      'Stepwise descending basslines smoothly connect lush seventh chords, making complex harmonies feel natural and conversational.',
    tempoLabel: '86–116 BPM',
    harmonicContext: 'Altered Dominants & Lush Major Sevenths',
    keyInstruments: ['Nylon Acoustic Guitar', 'Twelve-String Guitar', 'Brushed Percussion', 'Warm Electric Piano'],
    pairings: [
      {
        title: 'Samba-Jazz & Rio Acoustic Sessions',
        sonicProfile: 'Fluid acoustic guitar chord voicings paired with brushed snare rhythms.',
        whyItWorks: 'Effortless rhythmic poise ideal for daytime focus or evening unwinding.',
      },
      {
        title: 'Modern Lusophone Electronic Soul',
        sonicProfile: 'Warm Rhodes chords combined with Lisbon and Luanda club percussion.',
        whyItWorks: 'Connects Atlantic acoustic heritage with modern bass music.',
      },
    ],
    faqs: [
      {
        question: 'When will a localized Portuguese interface edition launch?',
        answer:
          'Portuguese UI and editorial translations are prepared in our i18n architecture and awaiting native editorial review before public indexing.',
      },
    ],
    relatedPaths: ['/genres/bossa-nova-guitar', '/moods/rainy-day-acoustic', '/collections/acoustic-world-horizons'],
    synthPreset: {
      bpm: 100,
      rootMidi: 55,
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordProgressions: [
        [0, 4, 7, 11],
        [2, 5, 9, 12],
        [7, 10, 14, 17],
        [0, 4, 7, 11],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1500,
      grooveStyle: 'bossa-clave',
      texture: 'acoustic-breeze',
      label: 'G Maj7 Lusophone Clave',
    },
  },
  {
    category: 'language',
    slug: 'german',
    path: '/languages/german',
    title: 'German Electronic & Avant-Pop',
    shortLabel: 'German',
    kicker: 'Global Language Guide · Kosmische Musik, Techno & Berlin Minimalism',
    seoTitle: 'German Electronic & Music Discovery Guide | VIBEBOX',
    seoDescription:
      'Explore German music history from Düsseldorf kosmische synthesizers and motorik rhythms to Berlin dub techno on VIBEBOX.',
    summary:
      'Defined by pioneering Düsseldorf synthesizer minimalism, hypnotic 4/4 motorik grooves, and Berlin’s deep spatial dub-techno architecture.',
    editorialIntro: [
      'Few musical cultures reshaped electronic instrumentation as profoundly as Germany’s 1970s kosmische and Düsseldorf pioneers, followed by Berlin’s post-1989 dub-techno and minimal electronic scenes. Precision rhythm meets vast architectural reverb.',
      'Even outside instrumentals, contemporary German indie and Neue Neue Deutsche Welle artists bring crisp synth minimalism and deadpan rhythmic focus.',
    ],
    sonicAnalysisTitle: 'Motorik Precision & Dub-Techno Space',
    sonicAnalysisBody:
      'Repetitive, disciplined rhythmic cells allow microscopic changes in filter resonance and echo feedback to become the central narrative.',
    tempoLabel: '112–130 BPM',
    harmonicContext: 'Minimal Minor Triads & Resonant Echoes',
    keyInstruments: ['Modular Sequencer', 'Analog Sub Kick', 'Echoed Minor Chord Stab', 'Filtered White Noise'],
    pairings: [
      {
        title: 'Berlin Dub-Techno Studies',
        sonicProfile: 'Deep muted kick drums paired with oceanic delayed minor chords.',
        whyItWorks: 'Hypnotic focus music that bridges ambient stillness and steady pulse.',
      },
      {
        title: 'Motorik Synth & Krautrock Heritage',
        sonicProfile: 'Unrelenting steady pulse supporting bright melodic synth lines.',
        whyItWorks: 'Creates effortless forward motion for long creative sessions.',
      },
    ],
    faqs: [
      {
        question: 'What is a motorik beat?',
        answer:
          'Popularized by 1970s Düsseldorf bands, motorik is a steady, unaccented 4/4 drum groove designed to evoke continuous highway motion.',
      },
    ],
    relatedPaths: ['/genres/ambient-electronic', '/moods/late-night-focus', '/collections/analog-warmth-essentials'],
    synthPreset: {
      bpm: 118,
      rootMidi: 45,
      scaleIntervals: [0, 2, 3, 5, 7, 8, 10],
      chordProgressions: [
        [0, 3, 7, 10],
        [0, 3, 7, 10],
        [5, 8, 12, 15],
        [7, 10, 14, 17],
      ],
      waveform: 'sawtooth',
      filterCutoffHz: 1250,
      grooveStyle: 'four-on-floor',
      texture: 'vinyl-dust',
      label: 'A Minor Dub-Techno Pulse',
    },
  },
  {
    category: 'language',
    slug: 'korean',
    path: '/languages/korean',
    title: 'Korean Indie, R&B & Modern Pop',
    shortLabel: 'Korean',
    kicker: 'Global Language Guide · Seoul Indie, K-R&B & Sleek Studio Craft',
    seoTitle: 'Korean Indie, R&B & Music Discovery Guide | VIBEBOX',
    seoDescription:
      'Explore Korean music beyond charts: Seoul indie synthpop, lush K-R&B jazz chords, and crisp modern sound design on VIBEBOX.',
    summary:
      'Blending crisp contemporary studio engineering, neo-soul chord progressions, Hongdae indie guitar bands, and expansive pop arrangements.',
    editorialIntro: [
      'Beyond arena pop choreography, South Korea supports a remarkably inventive ecosystem of K-R&B vocalists, Hongdae indie bands, and electronic beatmakers. Korean producers frequently fuse classic 1990s R&B ninth chords with razor-sharp modern transient design.',
      'Notice how seamlessly arrangements shift between sparse intimate verses and richly harmonized choruses.',
    ],
    sonicAnalysisTitle: 'Neo-Soul Extensions & Crisp Vocal Production',
    sonicAnalysisBody:
      'Warm Rhodes eleventh chords anchored by tight sub-bass leave room for intricate melodic runs and layered harmonies.',
    tempoLabel: '78–118 BPM',
    harmonicContext: 'Neo-Soul Minor 11ths & Chromatic Turnarounds',
    keyInstruments: ['Electric Piano', 'Tight Analog Synth Bass', 'Clean Strat Guitar', 'Crisp Finger Snaps'],
    pairings: [
      {
        title: 'Seoul Midnight K-R&B',
        sonicProfile: 'Laid-back 84 BPM grooves with lush jazz-inflected keyboard chords.',
        whyItWorks: 'Polished yet relaxed, suited to late-evening city listening.',
      },
      {
        title: 'Hongdae Synth & Dream Pop',
        sonicProfile: 'Reverb-washed guitars paired with bright melodic synth hooks.',
        whyItWorks: 'Captures youthful warmth and nocturnal atmosphere.',
      },
    ],
    faqs: [
      {
        question: 'When will a Korean UI edition of VIBEBOX be published?',
        answer:
          'Korean localization keys are built into our architecture and scheduled for native musicological review before live indexing.',
      },
    ],
    relatedPaths: ['/genres/indie-synthpop', '/genres/lo-fi-instrumental-beats', '/collections/global-late-night-sessions'],
    synthPreset: {
      bpm: 88,
      rootMidi: 54, // F#3
      scaleIntervals: [0, 2, 3, 5, 7, 9, 10],
      chordProgressions: [
        [0, 3, 7, 10],
        [5, 9, 12, 16],
        [7, 10, 14, 17],
        [4, 7, 11, 14],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1650,
      grooveStyle: 'boom-bap-soft',
      texture: 'vinyl-dust',
      label: 'F#m7 Seoul Midnight R&B',
    },
  },
  {
    category: 'language',
    slug: 'japanese',
    path: '/languages/japanese',
    title: 'Japanese City Pop, Jazz & Environmental',
    shortLabel: 'Japanese',
    kicker: 'Global Language Guide · Tokyo City Pop, Kankyō Ongaku & Jazz Kissaten',
    seoTitle: 'Japanese City Pop & Ambient Music Guide | VIBEBOX',
    seoDescription:
      'Explore Japanese music traditions from 1980s Tokyo City Pop harmony to ambient kankyō ongaku and jazz listening culture on VIBEBOX.',
    summary:
      'Uniting bright Tokyo City Pop jazz chords, meticulous kankyō ongaku environmental minimalism, and Japan’s deep vinyl listening-bar (kissaten) heritage.',
    editorialIntro: [
      'Japanese contemporary music combines obsessive attention to acoustic detail with sophisticated harmonic borrowing from jazz and fusion. In the 1980s, Tokyo studios crafted City Pop—sun-drenched grooves sparkling with major seventh chords and crisp slap bass—while pioneering composers simultaneously invented environmental ambient music for galleries and architecture.',
      'Even today, Japanese instrumentalists and beatmakers favor clean spatial separation where every percussion hit and keyboard harmonic breathes clearly.',
    ],
    sonicAnalysisTitle: 'Tokyo Seventh Voicings & Intentional Silence (Ma)',
    sonicAnalysisBody:
      'The Japanese aesthetic principle of "ma"—meaningful negative space between sounds—gives both City Pop grooves and ambient synthesizer works remarkable clarity.',
    tempoLabel: '64–116 BPM',
    harmonicContext: 'IVmaj7–iii7–vi7 City Pop & Pentatonic Space',
    keyInstruments: ['FM Electric Piano', 'Glass Chime Synth', 'Muted Bass', 'Crisp Acoustic Snare'],
    pairings: [
      {
        title: 'Kankyō Ongaku Environmental Works',
        sonicProfile: 'Soft bell-like keyboard melodies floating over quiet room air.',
        whyItWorks: 'Turns any study or living room into a tranquil acoustic sanctuary.',
      },
      {
        title: 'Shibuya-Kei & Tokyo Jazz-Hop',
        sonicProfile: 'Playful Bossa and jazz chord turns over crisp hip-hop drums.',
        whyItWorks: 'Bright, cosmopolitan energy without overwhelming loudness.',
      },
    ],
    faqs: [
      {
        question: 'What chord progression defines the classic Japanese City Pop sound?',
        answer:
          'The famous IVmaj7 – III7 – vi7 – I7 turnaround (often called the Royal Road progression) creates its signature nostalgic yet upbeat shimmer.',
      },
    ],
    relatedPaths: ['/moods/sunrise-ambient-calm', '/genres/lo-fi-instrumental-beats', '/genres/ambient-electronic'],
    synthPreset: {
      bpm: 108,
      rootMidi: 53, // F3
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordProgressions: [
        [5, 9, 12, 16], // IVmaj7
        [4, 8, 11, 14], // III7
        [9, 12, 16, 19], // vi7
        [0, 4, 7, 10], // I7
      ],
      waveform: 'triangle',
      filterCutoffHz: 2050,
      grooveStyle: 'four-on-floor',
      texture: 'sunrise-drone',
      label: 'Tokyo IVmaj7 Turnaround',
    },
  },
];

export const COLLECTIONS: DiscoveryEntry[] = [
  {
    category: 'collection',
    slug: 'global-late-night-sessions',
    path: '/collections/global-late-night-sessions',
    title: 'Global Late-Night Sessions',
    shortLabel: 'Late-Night Sessions',
    kicker: 'Curated Editorial Collection · Nocturnal Listening Across 4 Continents',
    seoTitle: 'Global Late-Night Sessions Music Collection | VIBEBOX',
    seoDescription:
      'A curated listening framework pairing Tokyo jazz-hop, Berlin dub textures, Seoul R&B, and warm Rhodes grooves for calm nocturnal sessions.',
    summary:
      'A cross-cultural listening arc connecting nocturnal instrumental scenes from Tokyo, Berlin, London, and Seoul through shared harmonic warmth.',
    editorialIntro: [
      'Rather than assembling arbitrary playlists, VIBEBOX collections document real acoustic threads shared across borders. Global Late-Night Sessions traces how producers in four distinct cities arrive at surprisingly similar sonic comfort after midnight: softened treble, unhurried 76–88 BPM pockets, and extended minor chords.',
      'Use this collection as an editorial listening map alongside our interactive Sound Lab to dial in your own midnight studio atmosphere.',
    ],
    sonicAnalysisTitle: 'Shared Nocturnal Acoustics Across Borders',
    sonicAnalysisBody:
      'Whether built from Berlin tape delays or Seoul electric pianos, midnight music minimizes sharp midrange transients to protect listening comfort at low volumes.',
    tempoLabel: '76–88 BPM',
    harmonicContext: 'Minor Ninths & Warm Tape Saturation',
    keyInstruments: ['Electric Piano', 'Muted Sub-Bass', 'Soft Vinyl Ambience', 'Brushed Percussion'],
    pairings: [
      {
        title: 'Chapter 01 · Tokyo After-Hours Jazz-Hop',
        sonicProfile: 'Clean upright piano chops over relaxed swing drums.',
        whyItWorks: 'Sets an approachable, grounded harmonic opening.',
      },
      {
        title: 'Chapter 02 · Berlin Sub-Bass Echoes',
        sonicProfile: 'Deep minor chords dissolving into warm rhythmic delay.',
        whyItWorks: 'Deepens spatial focus for late-night reading or design work.',
      },
      {
        title: 'Chapter 03 · Seoul Midnight Keys',
        sonicProfile: 'Lush neo-soul eleventh voicings with gentle room warmth.',
        whyItWorks: 'Brings human intimacy to the closing arc of the session.',
      },
    ],
    faqs: [
      {
        question: 'Does VIBEBOX rank tracks by fabricated stream counts?',
        answer:
          'No. VIBEBOX never fabricates popularity charts or stream counts; our collections focus strictly on acoustic texture, harmony, and cultural context.',
      },
    ],
    relatedPaths: ['/moods/late-night-focus', '/genres/lo-fi-instrumental-beats', '/languages/japanese', '/languages/korean'],
    synthPreset: {
      bpm: 80,
      rootMidi: 50,
      scaleIntervals: [0, 2, 3, 5, 7, 9, 10],
      chordProgressions: [
        [0, 3, 7, 10],
        [5, 8, 12, 15],
        [7, 10, 14, 17],
        [0, 3, 7, 14],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1180,
      grooveStyle: 'boom-bap-soft',
      texture: 'vinyl-dust',
      label: 'Midnight Cross-Cultural Patch',
    },
  },
  {
    category: 'collection',
    slug: 'analog-warmth-essentials',
    path: '/collections/analog-warmth-essentials',
    title: 'Analog Warmth Essentials',
    shortLabel: 'Analog Warmth',
    kicker: 'Curated Editorial Collection · Tape Saturation & Hardware Synthesis',
    seoTitle: 'Analog Warmth Essentials Sound Collection | VIBEBOX',
    seoDescription:
      'Explore why analog synthesizers, magnetic tape saturation, and harmonic overtones feel timeless across electronic and pop production.',
    summary:
      'An introduction to analog synthesizer character, soft harmonic saturation, and living pitch drift across ambient, synthpop, and dub.',
    editorialIntro: [
      'Digital perfection can sometimes sound sterile when every note hits exact pitch and identical volume. Classic analog synthesizers and magnetic tape machines naturally introduce subtle second- and third-harmonic saturation plus gentle oscillator drift.',
      'This collection celebrates the tactile physics of voltage-controlled filters and hardware keyboards across electronic genres.',
    ],
    sonicAnalysisTitle: 'Why Subtle Harmonic Imperfection Feels Alive',
    sonicAnalysisBody:
      'Microscopic pitch instability between layered oscillators creates gentle chorus movement, warming up sustained chords without extra effects.',
    tempoLabel: '68–118 BPM',
    harmonicContext: 'Rich Sawtooth & Triangle Overtones',
    keyInstruments: ['Polyphonic Analog Synth', 'Tape Echo', 'Resonant Low-Pass Filter', 'Electronic Kick'],
    pairings: [
      {
        title: 'Chapter 01 · Warm Pad Meditations',
        sonicProfile: 'Slow attack chords breathing through 24dB low-pass filters.',
        whyItWorks: 'Demonstrates pure oscillator warmth without rhythmic distraction.',
      },
      {
        title: 'Chapter 02 · Hardware Sequencer Grooves',
        sonicProfile: 'Syncopated basslines sculpted with tactile filter cutoff envelopes.',
        whyItWorks: 'Brings rhythmic clarity and punch to analog textures.',
      },
    ],
    faqs: [
      {
        question: 'Can browser Web Audio reproduce analog-style filter warmth?',
        answer:
          'Yes. By pairing biquad low-pass filters with subtle oscillator detuning and gentle wave shaping, VIBEBOX synthesizes warm textures directly in your browser.',
      },
    ],
    relatedPaths: ['/genres/ambient-electronic', '/genres/indie-synthpop', '/languages/german', '/tools/chord-progression-explorer'],
    synthPreset: {
      bpm: 104,
      rootMidi: 48,
      scaleIntervals: [0, 2, 4, 5, 7, 9, 11],
      chordProgressions: [
        [0, 4, 7, 11],
        [5, 9, 12, 16],
        [2, 5, 9, 12],
        [7, 11, 14, 17],
      ],
      waveform: 'sawtooth',
      filterCutoffHz: 1400,
      grooveStyle: 'four-on-floor',
      texture: 'sunrise-drone',
      label: 'Warm Tape Poly Synth',
    },
  },
  {
    category: 'collection',
    slug: 'acoustic-world-horizons',
    path: '/collections/acoustic-world-horizons',
    title: 'Acoustic World Horizons',
    shortLabel: 'Acoustic Horizons',
    kicker: 'Curated Editorial Collection · Plucked Strings & Global Folk Cadence',
    seoTitle: 'Acoustic World Horizons Music Collection | VIBEBOX',
    seoDescription:
      'Journey through nylon-string Bossa Nova, Spanish bolero guitars, and South Asian modal drones in VIBEBOX Acoustic World Horizons.',
    summary:
      'Celebrating wooden acoustic resonance, hand percussion, and modal melody traditions across Brazil, Spain, India, and West Africa.',
    editorialIntro: [
      'Before amplification, every musical culture evolved instruments shaped to carry naturally inside courtyards, halls, and homes. Plucked nylon strings, resonant gourds, wooden flutes, and hand drums remain deeply grounding in an era of heavy digital compression.',
      'Acoustic World Horizons connects regional plucked-string idioms that share warmth, intimacy, and transparent rhythmic craft.',
    ],
    sonicAnalysisTitle: 'Resonant Wood, Air & Uncompressed Space',
    sonicAnalysisBody:
      'Preserving natural transient decay allows listeners to hear the physical room and tactile instrument craft behind each phrase.',
    tempoLabel: '80–110 BPM',
    harmonicContext: 'Open-String Modal & Major Seventh Chords',
    keyInstruments: ['Nylon Acoustic Guitar', 'Hand Percussion', 'Acoustic Bass', 'Modal Drone'],
    pairings: [
      {
        title: 'Chapter 01 · Rio & Lisbon Acoustic Strings',
        sonicProfile: 'Syncopated thumb-and-finger chord patterns with warm wood tone.',
        whyItWorks: 'Invites calm daytime listening with gentle kinetic sway.',
      },
      {
        title: 'Chapter 02 · Iberian & Latin Bolero Studies',
        sonicProfile: 'Expressive minor arpeggios and intimate rhythmic percussion.',
        whyItWorks: 'Highlights melodic lyricism without studio clutter.',
      },
    ],
    faqs: [
      {
        question: 'Why pair acoustic traditions from different continents together?',
        answer:
          'Comparing rhythmic timelines and chord voicings side by side reveals how human acoustic craftsmanship solves similar expressive questions in unique ways.',
      },
    ],
    relatedPaths: ['/moods/rainy-day-acoustic', '/genres/bossa-nova-guitar', '/languages/portuguese', '/languages/spanish'],
    synthPreset: {
      bpm: 92,
      rootMidi: 55,
      scaleIntervals: [0, 2, 4, 7, 9],
      chordProgressions: [
        [0, 4, 7, 14],
        [5, 9, 12, 16],
        [4, 7, 11, 14],
        [0, 4, 7, 11],
      ],
      waveform: 'triangle',
      filterCutoffHz: 1750,
      grooveStyle: 'bossa-clave',
      texture: 'acoustic-breeze',
      label: 'Global Nylon & Breeze',
    },
  },
];

export const TOOLS: MusicToolEntry[] = [
  {
    slug: 'bpm-tap-tempo-calculator',
    path: '/tools/bpm-tap-tempo-calculator',
    title: 'BPM Tap Tempo & Groove Calculator',
    shortLabel: 'BPM Tap Tempo',
    seoTitle: 'BPM Tap Tempo Calculator & Metronome | VIBEBOX',
    seoDescription:
      'Measure song tempo accurately with keyboard or tap input, calculate delay times in milliseconds, and audition an interactive Web Audio metronome.',
    summary:
      'Tap along to any rhythm using your mouse, touch screen, or Spacebar to measure exact beats per minute, delay milliseconds, and listen with a Web Audio click.',
    editorialIntro: [
      'Knowing the exact tempo (BPM) of a piece helps DJs match transitions, producers dial in rhythmic echo delays, and musicians lock into comfortable practice speeds. Instead of guessing, tap steadily for four to eight beats to compute a smoothed average BPM.',
      'This tool also calculates common note-division intervals in milliseconds (quarter, eighth, dotted eighth, and sixteenth notes) so you can configure delay effects or sequencer grids immediately.',
    ],
    practicalTips: [
      'Tap with the Spacebar or click button across at least 6–8 beats for a stable average.',
      'Switch on the built-in Web Audio Metronome to verify your tempo against quarter-note or eighth-note accents.',
      'Use the Dotted Eighth (ms) readout to dial classic rhythmic guitar and synth echoes.',
    ],
    faqs: [
      {
        question: 'How is BPM calculated from tap intervals?',
        answer:
          'VIBEBOX measures the time difference in milliseconds between consecutive taps, averages recent intervals for stability, and divides 60,000 by the mean beat duration.',
      },
      {
        question: 'Why are delay times shown in milliseconds?',
        answer:
          'Audio plugins and hardware delay units accept timing in milliseconds (ms). Syncing delay ms to your track BPM keeps echoes locked tightly to the groove.',
      },
    ],
    relatedPaths: ['/genres/afrobeats-percussion-grooves', '/moods/euphoric-club-energy', '/tools/chord-progression-explorer'],
  },
  {
    slug: 'chord-progression-explorer',
    path: '/tools/chord-progression-explorer',
    title: 'Interactive Chord & Scale Explorer',
    shortLabel: 'Chord Explorer',
    seoTitle: 'Interactive Chord Progression & Scale Explorer | VIBEBOX',
    seoDescription:
      'Play real polyphonic chord progressions across lo-fi, city pop, bossa nova, and ambient modes directly in your browser with VIBEBOX.',
    summary:
      'Audition genre-authentic chord progressions and musical modes in real time using polyphonic Web Audio synthesis, complete with interval breakdowns.',
    editorialIntro: [
      'Harmony gives music its emotional temperature. Shifting from a basic minor triad to a minor ninth or major seventh chord immediately changes a loop from stark to nostalgic or cinematic.',
      'Select a root note, choose a musical tradition—such as Lo-Fi Minor Ninths, Tokyo City Pop IVmaj7 Turnaround, or Bossa Nova Clave—and trigger individual chords or loop the full four-bar progression.',
    ],
    practicalTips: [
      'Click any individual chord card to hear its voicing immediately and inspect its exact note names.',
      'Toggle Auto-Loop to hear how the four-bar progression resolves back to the root.',
      'Adjust synth brightness with the Filter Cutoff slider to test warm Rhodes vs. bright analog pads.',
    ],
    faqs: [
      {
        question: 'What is a chord extension like maj7 or m9?',
        answer:
          'Extensions add upper scale degrees (the 7th, 9th, or 11th note above the root) onto a standard three-note triad, adding warmth and harmonic nuance.',
      },
    ],
    relatedPaths: ['/genres/bossa-nova-guitar', '/genres/lo-fi-instrumental-beats', '/languages/japanese', '/tools/ambient-soundscape-mixer'],
  },
  {
    slug: 'ambient-soundscape-mixer',
    path: '/tools/ambient-soundscape-mixer',
    title: 'Ambient Soundscape & Focus Mixer',
    shortLabel: 'Soundscape Mixer',
    seoTitle: 'Ambient Soundscape & Focus Noise Mixer | VIBEBOX',
    seoDescription:
      'Blend warm rain noise, vinyl crackle, sub-harmonic drones, and soft harmonic pads in real time using pure browser Web Audio synthesis.',
    summary:
      'Craft personalized focus and relaxation soundscapes by mixing independent Web Audio acoustic layers—rain warmth, gentle wind, vinyl dust, and harmonic pads.',
    editorialIntro: [
      'Continuous acoustic textures help mask erratic environmental distractions such as distant traffic or office chatter. Rather than looping short, repetitive audio files with noticeable seams, VIBEBOX synthesizes every noise and harmonic layer continuously using real-time Web Audio generators.',
      'Combine soft filtered pink-noise rain with a quiet C Lydian harmonic pad for study sessions, or solo pure brown-noise room warmth for uninterrupted reading.',
    ],
    practicalTips: [
      'Keep harmonic pad levels subtle (25–40%) beneath broadband rain or room warmth for deep reading.',
      'Use Master Brightness to roll off high frequencies during evening sessions.',
      'Save your preferred balance locally in your browser with one click.',
    ],
    faqs: [
      {
        question: 'Does the Soundscape Mixer stream large audio files?',
        answer:
          'No. Every layer is generated procedurally in real time via the browser Web Audio API, keeping bandwidth near zero and eliminating audible loop seams.',
      },
    ],
    relatedPaths: ['/moods/late-night-focus', '/moods/sunrise-ambient-calm', '/genres/ambient-electronic'],
  },
];

export const ALL_DISCOVERY_ENTRIES: DiscoveryEntry[] = [
  ...MOODS,
  ...GENRES,
  ...LANGUAGE_TRADITIONS,
  ...COLLECTIONS,
];

export function findEntryByPath(pathname: string): DiscoveryEntry | undefined {
  return ALL_DISCOVERY_ENTRIES.find((item) => item.path === pathname);
}

export function findToolByPath(pathname: string): MusicToolEntry | undefined {
  return TOOLS.find((item) => item.path === pathname);
}
