export interface SongTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  releaseYear: number | null;
  genre: string;
  language: string;
  moods: string[];
  categories: string[];
  sets: string[];
  artworkUrl: string;
  durationSec: number;
  hookStartSec?: number;
  sources: {
    youtube?: {
      videoId: string;
      channelName: string;
      officialUrl: string;
      embeddable: boolean;
    };
    itunesPreview?: {
      previewUrl: string;
      officialUrl: string;
    };
  };
}

export const REAL_SONGS: SongTrack[] = [
  {
    "id": "295",
    "title": "295",
    "artist": "Sidhu Moose Wala",
    "album": "Moosetape",
    "releaseYear": 2021,
    "genre": "Punjabi Hip-Hop",
    "language": "Punjabi",
    "moods": [
      "workout-radio",
      "night-drive"
    ],
    "categories": [
      "punjabi-workout"
    ],
    "sets": [
      "gym-session",
      "punjabi-night",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
    "durationSec": 270,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "n_FCrCQ6-bA",
        "channelName": "Sidhu Moose Wala",
        "officialUrl": "https://www.youtube.com/watch?v=n_FCrCQ6-bA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/f3/6d/7ff36d63-b933-3993-cd2f-f3fd770c3763/mzaf_12675758250838366519.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/295/1826848583?i=1826848930&uo=4"
      }
    }
  },
  {
    "id": "kala-chashma",
    "title": "Kala Chashma",
    "artist": "Amar Arshi, Badshah & Neha Kakkar",
    "album": "Baar Baar Dekho (Original Motion Picture Soundtrack)",
    "releaseYear": 2016,
    "genre": "Bollywood Dance",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "bollywood-party",
      "hindi-dance"
    ],
    "sets": [
      "house-party",
      "bollywood-night",
      "wedding-dance",
      "birthday-party",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/14/b8/58/14b85883-40a4-0a2e-de65-130f55726ee6/840780180390.png/600x600bb.jpg",
    "durationSec": 187,
    "hookStartSec": 42,
    "sources": {
      "youtube": {
        "videoId": "4WRJHbL4dAk",
        "channelName": "Zee Music Company",
        "officialUrl": "https://www.youtube.com/watch?v=4WRJHbL4dAk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/40/3e/0b403e59-7e56-248f-9363-662fa5d4a6d8/mzaf_7321027000281469165.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/kala-chashma/1529568803?i=1529568809&uo=4"
      }
    }
  },
  {
    "id": "badtameez-dil",
    "title": "Badtameez Dil",
    "artist": "Benny Dayal & Shefali Alvares",
    "album": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "releaseYear": 2013,
    "genre": "Bollywood Dance",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "bollywood-party",
      "hindi-dance"
    ],
    "sets": [
      "house-party",
      "bollywood-night",
      "wedding-dance",
      "birthday-party",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/600x600bb.jpg",
    "durationSec": 253,
    "hookStartSec": 35,
    "sources": {
      "youtube": {
        "videoId": "N0uDmkTV08Y",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=N0uDmkTV08Y",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/e2/af/88e2af36-3b58-3f34-32c3-d94d3086c8d5/mzaf_15476348080733865142.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/badtameez-dil/1070912669?i=1070912803&uo=4"
      }
    }
  },
  {
    "id": "kar-gayi-chull",
    "title": "Kar Gayi Chull",
    "artist": "Badshah, Fazilpuria & Neha Kakkar",
    "album": "Kapoor & Sons (Since 1921) [Original Motion Picture Soundtrack]",
    "releaseYear": 2016,
    "genre": "Bollywood Party",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "bollywood-party",
      "hindi-dance"
    ],
    "sets": [
      "house-party",
      "bollywood-night",
      "birthday-party",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b9/ec/4e/b9ec4e53-c55a-3f64-f6c2-92e72dcaec50/886445771978.jpg/600x600bb.jpg",
    "durationSec": 188,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "NTHz9ephYTw",
        "channelName": "Sony Music India",
        "officialUrl": "https://www.youtube.com/watch?v=NTHz9ephYTw",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a2/73/42/a273426d-66bc-2d7d-abd6-a3000b37ec5f/mzaf_14832496167081149978.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/kar-gayi-chull/1088788675?i=1088788681&uo=4"
      }
    }
  },
  {
    "id": "ghungroo",
    "title": "Ghungroo",
    "artist": "Arijit Singh & Shilpa Rao",
    "album": "Ghungroo (From \"War\") - Single",
    "releaseYear": 2019,
    "genre": "Bollywood Dance",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "happy-radio",
      "night-drive"
    ],
    "categories": [
      "bollywood-party",
      "hindi-dance"
    ],
    "sets": [
      "house-party",
      "bollywood-night",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f4/0b/88/f40b88d5-75cb-27b8-6b00-bba98f0f2fd0/849486006911_cover.jpg/600x600bb.jpg",
    "durationSec": 303,
    "hookStartSec": 40,
    "sources": {
      "youtube": {
        "videoId": "qFkNATtc3mc",
        "channelName": "YRF",
        "officialUrl": "https://www.youtube.com/watch?v=qFkNATtc3mc",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d1/90/95/d190958b-cb33-34b6-83d2-4d88b6ff1348/mzaf_8015651280578447253.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/ghungroo-from-war/1478998925?i=1478998926&uo=4"
      }
    }
  },
  {
    "id": "jhoome-jo-pathaan",
    "title": "Jhoome Jo Pathaan",
    "artist": "Arijit Singh & Sukriti Kakar",
    "album": "Pathaan (Original Motion Picture Soundtrack)",
    "releaseYear": 2022,
    "genre": "Bollywood Dance",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "hindi-dance",
      "bollywood-party"
    ],
    "sets": [
      "bollywood-night",
      "gym-session",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8d/6a/19/8d6a197e-2aaa-5504-cd43-533351597487/Pathaan-Album-Audio-Cover-Final.jpg/600x600bb.jpg",
    "durationSec": 208,
    "hookStartSec": 38,
    "sources": {
      "youtube": {
        "videoId": "YxWlaYCA8MU",
        "channelName": "YRF",
        "officialUrl": "https://www.youtube.com/watch?v=YxWlaYCA8MU",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/be/80/45/be8045ce-1ce5-b099-fc9d-7141b1d3d6f2/mzaf_10087280935419764280.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/jhoome-jo-pathaan/1659644976?i=1659644978&uo=4"
      }
    }
  },
  {
    "id": "aankh-marey",
    "title": "Aankh Marey",
    "artist": "Neha Kakkar, Mika Singh & Kumar Sanu",
    "album": "Simmba (Original Motion Picture Soundtrack)",
    "releaseYear": 2018,
    "genre": "Bollywood Dance",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "hindi-dance",
      "bollywood-party"
    ],
    "sets": [
      "bollywood-night",
      "wedding-dance",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/99/4c/e2/994ce25e-0fe1-1287-972d-7ab5f09e55e1/8902894360616_cover.jpg/600x600bb.jpg",
    "durationSec": 213,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "_KhQT-LGb-4",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=_KhQT-LGb-4",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/a0/7a/91a07a10-8b2d-d802-42a8-f650d9981a89/mzaf_10735478748640447377.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/aankh-marey/1447936145?i=1447936149&uo=4"
      }
    }
  },
  {
    "id": "nashe-si-chadh-gayi",
    "title": "Nashe Si Chadh Gayi",
    "artist": "Arijit Singh",
    "album": "Befikre (Original Motion Picture Soundtrack)",
    "releaseYear": 2016,
    "genre": "Bollywood Pop",
    "language": "Hindi",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "hindi-dance",
      "bollywood-party"
    ],
    "sets": [
      "bollywood-night",
      "road-trip",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/24/d9/6124d942-9d43-7863-f402-c37d9fb8e491/849486075603_cover.jpg/600x600bb.jpg",
    "durationSec": 245,
    "hookStartSec": 34,
    "sources": {
      "youtube": {
        "videoId": "HoCwa6gnmM0",
        "channelName": "YRF",
        "officialUrl": "https://www.youtube.com/watch?v=HoCwa6gnmM0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/af/d1/25/afd125f4-14ec-96db-f041-734b2be25ebf/mzaf_16119343562690640430.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/nashe-si-chadh-gayi/1181809037?i=1181809040&uo=4"
      }
    }
  },
  {
    "id": "london-thumakda",
    "title": "London Thumakda",
    "artist": "Labh Janjua, Sonu Kakkar & Neha Kakkar",
    "album": "Queen (Original Motion Picture Soundtrack)",
    "releaseYear": 2014,
    "genre": "Bollywood Wedding",
    "language": "Hindi",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "hindi-dance",
      "bollywood-party",
      "punjabi-wedding"
    ],
    "sets": [
      "wedding-dance",
      "bollywood-night",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/ed/4c/52/ed4c520a-0714-0234-60cf-5f5b09ada16b/8902894355360_cover.jpg/600x600bb.jpg",
    "durationSec": 230,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "udra3Mfw2oo",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=udra3Mfw2oo",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/04/f2/15/04f2159c-f378-3323-d3a0-c055474ec688/mzaf_11306147181651969029.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/london-thumakda/1116194763?i=1116194835&uo=4"
      }
    }
  },
  {
    "id": "gulabi-aankhen",
    "title": "Gulabi Aankhen",
    "artist": "Mohammed Rafi",
    "album": "The Train (Original Soundtrack)",
    "releaseYear": 1970,
    "genre": "Hindi Retro",
    "language": "Hindi",
    "moods": [
      "happy-radio",
      "chill-radio",
      "romantic-radio"
    ],
    "categories": [
      "hindi-retro"
    ],
    "sets": [
      "road-trip",
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/5b/90/2f/5b902fac-5017-f683-0d78-4964fc0a65fc/00044006423623.rgb.jpg/600x600bb.jpg",
    "durationSec": 200,
    "hookStartSec": 22,
    "sources": {
      "youtube": {
        "videoId": "6Z3DO-OFIjQ",
        "channelName": "Shemaroo Filmi Gaane",
        "officialUrl": "https://www.youtube.com/watch?v=6Z3DO-OFIjQ",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ff/3f/4f/ff3f4fdd-f45d-7c3b-e59b-6905f646a481/mzaf_3159744630147102218.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/gulabi-ankhen/1443477433?i=1443477434&uo=4"
      }
    }
  },
  {
    "id": "pal-pal-dil-ke-paas",
    "title": "Pal Pal Dil Ke Paas",
    "artist": "Kishore Kumar",
    "album": "Blackmail (Original Soundtrack)",
    "releaseYear": 1973,
    "genre": "Hindi Retro",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "chill-radio"
    ],
    "categories": [
      "hindi-retro",
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/2c/fd/182cfdb1-c27a-8d41-d58a-fca4ff017c69/06UMGIM37432.rgb.jpg/600x600bb.jpg",
    "durationSec": 329,
    "hookStartSec": 25,
    "sources": {
      "youtube": {
        "videoId": "AMuRRXCuy-4",
        "channelName": "Shemaroo",
        "officialUrl": "https://www.youtube.com/watch?v=AMuRRXCuy-4",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9a/6b/20/9a6b2063-8492-9a67-7d85-3c8fedcf425f/mzaf_10296051997391143250.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/pal-pal-dil-ke-paas/1443458331?i=1443458534&uo=4"
      }
    }
  },
  {
    "id": "chura-liya-hai",
    "title": "Chura Liya Hai Tumne Jo Dil Ko",
    "artist": "Asha Bhosle & Mohammed Rafi",
    "album": "Singing Icon - Asha Bhosle",
    "releaseYear": 1973,
    "genre": "Hindi Retro",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "chill-radio"
    ],
    "categories": [
      "hindi-retro",
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/87/63/24/87632416-39f8-b22b-7ecd-a299c5d6732e/192562482872.jpg/600x600bb.jpg",
    "durationSec": 288,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "Ob8rBaUT0Yk",
        "channelName": "amitava1988",
        "officialUrl": "https://www.youtube.com/watch?v=Ob8rBaUT0Yk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/0b/68/2a0b68bc-7eeb-37b5-4a13-45e116b90691/mzaf_13018029117584373768.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/chura-liya-hai-tumne-jo-dil-ko-from-yaadon-ki-baaraat/1377309727?i=1377310101&uo=4"
      }
    }
  },
  {
    "id": "ek-ladki-bheegi",
    "title": "Ek Ladki Bheegi Bhaagi Si",
    "artist": "Kishore Kumar",
    "album": "History of Indian Film Music, [Bedard Zamana Kya Jane (1959), Boot Polish (1953), Chalti Ka Naam Gaadi (1958)], Vol. 18",
    "releaseYear": 1958,
    "genre": "Hindi Retro",
    "language": "Hindi",
    "moods": [
      "happy-radio",
      "chill-radio"
    ],
    "categories": [
      "hindi-retro"
    ],
    "sets": [
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/49/f5/6c/49f56c28-d16c-0f8d-b987-f9dceb133efb/5204833038000.jpg/600x600bb.jpg",
    "durationSec": 245,
    "hookStartSec": 18,
    "sources": {
      "youtube": {
        "videoId": "ozwH49d7nOA",
        "channelName": "Saregama Music",
        "officialUrl": "https://www.youtube.com/watch?v=ozwH49d7nOA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d5/35/0e/d5350ee3-81f0-2c0b-74b5-398df9487513/mzaf_17160205623710179746.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/ek-ladki-bheegi-bhaagi-si/790495885?i=790495958&uo=4"
      }
    }
  },
  {
    "id": "tum-hi-ho",
    "title": "Tum Hi Ho",
    "artist": "Arijit Singh",
    "album": "Aashiqui 2 (Original Motion Picture Soundtrack)",
    "releaseYear": 2013,
    "genre": "Bollywood Romantic",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "sad-radio"
    ],
    "categories": [
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/600x600bb.jpg",
    "durationSec": 262,
    "hookStartSec": 40,
    "sources": {
      "youtube": {
        "videoId": "Umqb9KENgmk",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=Umqb9KENgmk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/8c/9b/3a8c9b0b-2def-750a-f615-1555bf941edf/mzaf_17229496441442805917.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/tum-hi-ho/1073359412?i=1073359419&uo=4"
      }
    }
  },
  {
    "id": "kesariya",
    "title": "Kesariya",
    "artist": "Arijit Singh",
    "album": "Kesariya (From \"Brahmastra\") - Single",
    "releaseYear": 2022,
    "genre": "Bollywood Romantic",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "happy-radio"
    ],
    "categories": [
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/13/ca/9f13ca3b-e533-03e0-f19a-f0aaa774581d/196589311191.jpg/600x600bb.jpg",
    "durationSec": 268,
    "hookStartSec": 36,
    "sources": {
      "youtube": {
        "videoId": "BddP6PYo2gs",
        "channelName": "Sony Music India",
        "officialUrl": "https://www.youtube.com/watch?v=BddP6PYo2gs",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/4c/5c/384c5c8f-3ff8-e457-b2f7-3158ce108649/mzaf_12389299033886433185.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/kesariya-from-brahmastra/1635013814?i=1635014240&uo=4"
      }
    }
  },
  {
    "id": "raataan-lambiyan",
    "title": "Raataan Lambiyan",
    "artist": "Jubin Nautiyal & Asees Kaur",
    "album": "Raataan Lambiyan (From \"Shershaah\") - Single",
    "releaseYear": 2021,
    "genre": "Bollywood Romantic",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "chill-radio"
    ],
    "categories": [
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening",
      "wedding-dance"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c3/df/e7/c3dfe71e-d532-458e-9c1c-32d40f8d9123/886449472222.jpg/600x600bb.jpg",
    "durationSec": 230,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "3EJGAKPifNs",
        "channelName": "Sony Music India",
        "officialUrl": "https://www.youtube.com/watch?v=3EJGAKPifNs",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ff/7a/7a/ff7a7a63-9947-cefa-e269-ad9602fb1ca3/mzaf_14039909875904828823.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/raataan-lambiyan-from-shershaah/1578079452?i=1578079453&uo=4"
      }
    }
  },
  {
    "id": "agar-tum-saath-ho",
    "title": "Agar Tum Saath Ho",
    "artist": "Alka Yagnik & Arijit Singh",
    "album": "Tamasha (Original Motion Picture Soundtrack)",
    "releaseYear": 2015,
    "genre": "Bollywood Romantic",
    "language": "Hindi",
    "moods": [
      "sad-radio",
      "romantic-radio"
    ],
    "categories": [
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cb/ac/67/cbac673a-9213-7118-bb4e-2440273afb03/8902894357470_cover.jpg/600x600bb.jpg",
    "durationSec": 341,
    "hookStartSec": 45,
    "sources": {
      "youtube": {
        "videoId": "sK7riqg2mr4",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=sK7riqg2mr4",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/a8/7d/75a87dcc-5b69-795d-7dcc-27d1c728f31f/mzaf_18055325784732588932.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/agar-tum-saath-ho/1071074537?i=1071074558&uo=4"
      }
    }
  },
  {
    "id": "kun-faya-kun",
    "title": "Kun Faya Kun",
    "artist": "A.R. Rahman, Javed Ali & Mohit Chauhan",
    "album": "Rockstar (Original Motion Picture Soundtrack)",
    "releaseYear": 2011,
    "genre": "Hindi Sufi",
    "language": "Hindi",
    "moods": [
      "chill-radio",
      "focus-radio"
    ],
    "categories": [
      "hindi-sufi"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/600x600bb.jpg",
    "durationSec": 471,
    "hookStartSec": 52,
    "sources": {
      "youtube": {
        "videoId": "T94PHkuydcw",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=T94PHkuydcw",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/72/5e/ce725e63-6977-b281-3766-fff46d6e0c07/mzaf_7464998292185183397.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/kun-faya-kun/1123241840?i=1123241921&uo=4"
      }
    }
  },
  {
    "id": "tere-bina",
    "title": "Tere Bina",
    "artist": "A.R. Rahman & Chinmayi",
    "album": "Guru (Original Motion Picture Soundtrack)",
    "releaseYear": 2006,
    "genre": "Hindi Sufi",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "chill-radio",
      "focus-radio"
    ],
    "categories": [
      "hindi-sufi",
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/8c/69/8d8c697e-f108-9e69-0cb1-475b45ab26a8/886970389020.jpg/600x600bb.jpg",
    "durationSec": 310,
    "hookStartSec": 38,
    "sources": {
      "youtube": {
        "videoId": "9JDSGhhiOwI",
        "channelName": "Sony Music India",
        "officialUrl": "https://www.youtube.com/watch?v=9JDSGhhiOwI",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/61/64/236164d3-f330-d526-6045-d975a4be4a64/mzaf_17030153012157637966.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/tere-bina/264849882?i=264849919&uo=4"
      }
    }
  },
  {
    "id": "khwaja-mere-khwaja",
    "title": "Khwaja Mere Khwaja",
    "artist": "A.R. Rahman",
    "album": "Jodhaa Akbar (Original Motion Picture Soundtrack)",
    "releaseYear": 2001,
    "genre": "Hindi Sufi",
    "language": "Hindi",
    "moods": [
      "focus-radio",
      "chill-radio"
    ],
    "categories": [
      "hindi-sufi"
    ],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/25/ad/89/25ad8924-f933-e7fd-a0aa-17305e14eb2d/886448872016.jpg/600x600bb.jpg",
    "durationSec": 417,
    "hookStartSec": 40,
    "sources": {
      "youtube": {
        "videoId": "4YbAaRFk70o",
        "channelName": "SonyMusicIndiaVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=4YbAaRFk70o",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cb/5a/e0/cb5ae07f-d639-6656-8a38-e203223045b2/mzaf_6569703129183494087.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/khwaja-mere-khwaja/1537961309?i=1537961313&uo=4"
      }
    }
  },
  {
    "id": "afreen-afreen",
    "title": "Afreen Afreen",
    "artist": "Rahat Fateh Ali Khan & Momina Mustehsan",
    "album": "Afreen Afreen (Coke Studio Season 9) - Single",
    "releaseYear": 2016,
    "genre": "Sufi Acoustic",
    "language": "Hindi",
    "moods": [
      "romantic-radio",
      "chill-radio"
    ],
    "categories": [
      "hindi-sufi",
      "hindi-romantic"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/95/ff/b0/95ffb0d1-ba72-767e-a4e4-6e7989524b03/190394811402.jpg/600x600bb.jpg",
    "durationSec": 400,
    "hookStartSec": 45,
    "sources": {
      "youtube": {
        "videoId": "kw4tT7SCmaY",
        "channelName": "Coke Studio Pakistan",
        "officialUrl": "https://www.youtube.com/watch?v=kw4tT7SCmaY",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/41/69/764169b7-e99f-2590-2035-042592466071/mzaf_15909503068668647721.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/afreen-afreen-coke-studio-season-9/1150347362?i=1150347366&uo=4"
      }
    }
  },
  {
    "id": "apna-time-aayega",
    "title": "Apna Time Aayega",
    "artist": "Ranveer Singh & DIVINE",
    "album": "Gully Boy (Original Motion Picture Soundtrack)",
    "releaseYear": 2019,
    "genre": "Desi Hip-Hop",
    "language": "Hindi",
    "moods": [
      "workout-radio",
      "party-radio"
    ],
    "categories": [
      "hindi-hip-hop"
    ],
    "sets": [
      "gym-session",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3a/5e/60/3a5e6034-8755-f0bf-d4f0-c7f96d3b45bb/8718857674948.png/600x600bb.jpg",
    "durationSec": 140,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "jFGKJBPFdUA",
        "channelName": "Zee Music Company",
        "officialUrl": "https://www.youtube.com/watch?v=jFGKJBPFdUA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a1/63/58/a1635896-5507-40f7-d6d4-bab46ff3dd67/mzaf_5279779209946689751.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/apna-time-aayega/1529556349?i=1529556364&uo=4"
      }
    }
  },
  {
    "id": "mirchi",
    "title": "Mirchi",
    "artist": "DIVINE ft. Stylo G, MC Altaf & Phenom",
    "album": "Mirchi (feat. MC Altaf, Stylo G & Phenom) - Single",
    "releaseYear": 2020,
    "genre": "Desi Hip-Hop",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "hindi-hip-hop"
    ],
    "sets": [
      "college-party",
      "house-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ae/a1/1b/aea11bad-10ae-96d4-5212-e3b0db53bedd/20UMGIM89461.rgb.jpg/600x600bb.jpg",
    "durationSec": 193,
    "hookStartSec": 25,
    "sources": {
      "youtube": {
        "videoId": "w5Aioq5VYF0",
        "channelName": "DIVINE",
        "officialUrl": "https://www.youtube.com/watch?v=w5Aioq5VYF0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/21/88/cd/2188cd88-bde4-5958-5d8c-1d366eb5930e/mzaf_4740066004162575331.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/mirchi-feat-mc-altaf-stylo-g-phenom/1535314469?i=1535314471&uo=4"
      }
    }
  },
  {
    "id": "kohinoor",
    "title": "Kohinoor",
    "artist": "DIVINE",
    "album": "Kohinoor",
    "releaseYear": 2019,
    "genre": "Desi Hip-Hop",
    "language": "Hindi",
    "moods": [
      "workout-radio",
      "night-drive"
    ],
    "categories": [
      "hindi-hip-hop"
    ],
    "sets": [
      "gym-session",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b4/1e/0e/b41e0e6b-4808-171c-52fd-62282e366a5b/19UMGIM88313.rgb.jpg/600x600bb.jpg",
    "durationSec": 199,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "7dt9LvdSdIA",
        "channelName": "Mass Appeal India",
        "officialUrl": "https://www.youtube.com/watch?v=7dt9LvdSdIA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3f/22/4a/3f224a77-6500-b898-d6ad-942a21d5ce61/mzaf_10646169288489533529.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/kohinoor/1481977846?i=1481978102&uo=4"
      }
    }
  },
  {
    "id": "mere-gully-mein",
    "title": "Mere Gully Mein",
    "artist": "Ranveer Singh, DIVINE & Naezy",
    "album": "Gully Boy (Original Motion Picture Soundtrack)",
    "releaseYear": 2019,
    "genre": "Desi Hip-Hop",
    "language": "Hindi",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "hindi-hip-hop"
    ],
    "sets": [
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3a/5e/60/3a5e6034-8755-f0bf-d4f0-c7f96d3b45bb/8718857674948.png/600x600bb.jpg",
    "durationSec": 185,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "pGmbUdf6lEM",
        "channelName": "Zee Music Company",
        "officialUrl": "https://www.youtube.com/watch?v=pGmbUdf6lEM",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/67/69/da67692c-8e6f-7ef1-ba30-7fb48fdae7b9/mzaf_5639533648778078727.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/mere-gully-mein/1529556349?i=1529556351&uo=4"
      }
    }
  },
  {
    "id": "brown-munde",
    "title": "Brown Munde",
    "artist": "AP Dhillon, Gurinder Gill & Shinda Kahlon",
    "album": "Brown Munde - Single",
    "releaseYear": 2020,
    "genre": "Punjabi Urban",
    "language": "Punjabi",
    "moods": [
      "party-radio",
      "night-drive",
      "workout-radio"
    ],
    "categories": [
      "punjabi-party",
      "punjabi-workout"
    ],
    "sets": [
      "punjabi-night",
      "house-party",
      "road-trip",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/a3/ac/26a3ac64-69e4-95ec-80ab-1f5a477537d2/859742042973_cover.jpg/600x600bb.jpg",
    "durationSec": 254,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "VNs_cCtdbPc",
        "channelName": "APDHILLON",
        "officialUrl": "https://www.youtube.com/watch?v=VNs_cCtdbPc",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/97/74/69/977469be-a9d5-35a7-80ad-ebe12a799ccc/mzaf_804867738726203367.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/brown-munde/1531596344?i=1531596345&uo=4"
      }
    }
  },
  {
    "id": "excuses",
    "title": "Excuses",
    "artist": "AP Dhillon, Gurinder Gill & Intense",
    "album": "Excuses - Single",
    "releaseYear": 2020,
    "genre": "Punjabi Urban",
    "language": "Punjabi",
    "moods": [
      "night-drive",
      "party-radio"
    ],
    "categories": [
      "punjabi-party"
    ],
    "sets": [
      "punjabi-night",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/47/ac/4747ac85-1658-64ae-bc82-220a4d6213d5/859747478890_cover.jpg/600x600bb.jpg",
    "durationSec": 176,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "vX2cDW8LUWk",
        "channelName": "Intense",
        "officialUrl": "https://www.youtube.com/watch?v=vX2cDW8LUWk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e8/84/c8/e884c82f-7136-54d8-6754-6b45c6968f29/mzaf_11726474689882106813.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/excuses/1588418741?i=1588418743&uo=4"
      }
    }
  },
  {
    "id": "tauba-tauba",
    "title": "Tauba Tauba",
    "artist": "Karan Aujla",
    "album": "Tauba Tauba (From \"Bad Newz\") - Single",
    "releaseYear": 2024,
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "punjabi-party",
      "bollywood-party"
    ],
    "sets": [
      "punjabi-night",
      "house-party",
      "bollywood-night"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg",
    "durationSec": 207,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "LK7-_dgAVQE",
        "channelName": "Saregama Music",
        "officialUrl": "https://www.youtube.com/watch?v=LK7-_dgAVQE",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/34/8d/63/348d6342-2c35-bf31-8131-2c8b3cfe3c09/mzaf_15374551219149804677.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/tauba-tauba-from-bad-newz/1754562143?i=1754562159&uo=4"
      }
    }
  },
  {
    "id": "softly",
    "title": "Softly",
    "artist": "Karan Aujla & Ikky",
    "album": "Making Memories",
    "releaseYear": 2023,
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "moods": [
      "chill-radio",
      "night-drive",
      "happy-radio"
    ],
    "categories": [
      "punjabi-party"
    ],
    "sets": [
      "punjabi-night",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg",
    "durationSec": 155,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "cWMxCE2HTag",
        "channelName": "Karan Aujla",
        "officialUrl": "https://www.youtube.com/watch?v=cWMxCE2HTag",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/6f/01/5f6f0130-6567-22d4-bc1a-5ccb359c3fac/mzaf_5497113703334703756.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/softly/1697533643?i=1697533818&uo=4"
      }
    }
  },
  {
    "id": "gallan-goodiyaan",
    "title": "Gallan Goodiyaan",
    "artist": "Yashita Sharma, Farhan Akhtar & Shankar Mahadevan",
    "album": "Dil Dhadakne Do (Original Motion Picture Soundtrack)",
    "releaseYear": 2015,
    "genre": "Punjabi Wedding",
    "language": "Punjabi",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "punjabi-wedding",
      "bollywood-party"
    ],
    "sets": [
      "wedding-dance",
      "birthday-party",
      "bollywood-night"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1c/f1/49/1cf149ad-2e46-cb6d-642c-4f7103b77dc8/8902894357036_cover.jpg/600x600bb.jpg",
    "durationSec": 297,
    "hookStartSec": 34,
    "sources": {
      "youtube": {
        "videoId": "jCEdTq3j-0U",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=jCEdTq3j-0U",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0a/b1/65/0ab165c2-5461-139b-3361-43d39f4f7f77/mzaf_13810064433892693288.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/gallan-goodiyaan/1071191851?i=1071192712&uo=4"
      }
    }
  },
  {
    "id": "laung-laachi",
    "title": "Laung Laachi",
    "artist": "Mannat Noor",
    "album": "Laung Laachi (Original Motion Picture Soundtrack)",
    "releaseYear": 2018,
    "genre": "Punjabi Folk Pop",
    "language": "Punjabi",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "punjabi-wedding",
      "punjabi-party"
    ],
    "sets": [
      "wedding-dance",
      "punjabi-night"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/30/d8/4130d805-a06b-7a88-efd1-acc7fd1274a8/8903431669490_cover.jpg/600x600bb.jpg",
    "durationSec": 161,
    "hookStartSec": 25,
    "sources": {
      "youtube": {
        "videoId": "YpkJO_GrCo0",
        "channelName": "T-Series Apna Punjab",
        "officialUrl": "https://www.youtube.com/watch?v=YpkJO_GrCo0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/16/47/9b/16479bc2-a34a-0b72-7488-a2261d3eacbb/mzaf_6305039084014036831.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/laung-laachi-title-track/1356564907?i=1356565549&uo=4"
      }
    }
  },
  {
    "id": "sadi-gali",
    "title": "Sadi Gali",
    "artist": "Lehmber Hussainpuri",
    "album": "Tanu Weds Manu (Original Motion Picture Soundtrack)",
    "releaseYear": 2011,
    "genre": "Punjabi Wedding",
    "language": "Punjabi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "punjabi-wedding",
      "punjabi-bhangra"
    ],
    "sets": [
      "wedding-dance",
      "punjabi-night",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1a/5f/48/1a5f4834-59b0-c7c8-d8fd-995b1c5e5e60/8902894694032_cover.jpg/600x600bb.jpg",
    "durationSec": 265,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "w_HaezV0DqI",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=w_HaezV0DqI",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/af/63/02/af630221-e849-8d2f-f279-a8159cec4c19/mzaf_1012138708851747762.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/sadi-gali/1122150562?i=1122150647&uo=4"
      }
    }
  },
  {
    "id": "morni-banke",
    "title": "Morni Banke",
    "artist": "Guru Randhawa & Neha Kakkar",
    "album": "Badhaai Ho (Original Motion Picture Soundtrack)",
    "releaseYear": 2018,
    "genre": "Punjabi Wedding",
    "language": "Punjabi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "punjabi-wedding",
      "punjabi-party"
    ],
    "sets": [
      "wedding-dance",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4c/a2/fa/4ca2fa52-4aff-9a11-cdf4-4c71e6429eff/8902894360494_cover.jpg/600x600bb.jpg",
    "durationSec": 198,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "MhgURCPNoD0",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=MhgURCPNoD0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/08/f7/4108f738-5d75-ff53-1dcc-e66a858bd6df/mzaf_11800009458843134496.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/morni-banke/1439673788?i=1439673822&uo=4"
      }
    }
  },
  {
    "id": "qismat",
    "title": "Qismat",
    "artist": "Ammy Virk",
    "album": "Qismat - Single (feat. Sargun Mehta) - Single",
    "releaseYear": 2017,
    "genre": "Punjabi Ballad",
    "language": "Punjabi",
    "moods": [
      "sad-radio",
      "romantic-radio"
    ],
    "categories": [
      "punjabi-sad"
    ],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/44/b0/87/44b08790-5f24-b9a0-2204-7ac5215658d3/8902633272507.jpg/600x600bb.jpg",
    "durationSec": 244,
    "hookStartSec": 36,
    "sources": {
      "youtube": {
        "videoId": "9xVp8m0fJSg",
        "channelName": "Speed Records",
        "officialUrl": "https://www.youtube.com/watch?v=9xVp8m0fJSg",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8d/f6/02/8df60285-5029-6ac5-88ff-b3a0198b2cf7/mzaf_9412445161708057168.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/qismat-feat-sargun-mehta/1418051669?i=1418051735&uo=4"
      }
    }
  },
  {
    "id": "mann-bharrya",
    "title": "Mann Bharrya",
    "artist": "B Praak",
    "album": "Mann Bharrya - Single",
    "releaseYear": 2017,
    "genre": "Punjabi Ballad",
    "language": "Punjabi",
    "moods": [
      "sad-radio"
    ],
    "categories": [
      "punjabi-sad"
    ],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d3/5d/94/d35d94b7-46bb-8ce3-72a4-b1e3c81043ad/8902633271111.jpg/600x600bb.jpg",
    "durationSec": 277,
    "hookStartSec": 40,
    "sources": {
      "youtube": {
        "videoId": "YrUqw7uspKg",
        "channelName": "Speed Records",
        "officialUrl": "https://www.youtube.com/watch?v=YrUqw7uspKg",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/64/ec/f164ec6e-1375-d394-8af2-4e3237e570b8/mzaf_3327102598024940466.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/mann-bharrya/1418558878?i=1418559048&uo=4"
      }
    }
  },
  {
    "id": "soch",
    "title": "Soch",
    "artist": "Harrdy Sandhu",
    "album": "Soch - Single",
    "releaseYear": 2013,
    "genre": "Punjabi Ballad",
    "language": "Punjabi",
    "moods": [
      "sad-radio",
      "romantic-radio"
    ],
    "categories": [
      "punjabi-sad"
    ],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ff/e3/bd/ffe3bdfa-ecaa-85ba-99d4-dd3c89b1c945/8902894354905_cover.jpg/600x600bb.jpg",
    "durationSec": 347,
    "hookStartSec": 35,
    "sources": {
      "youtube": {
        "videoId": "E8rpY2FwKkY",
        "channelName": "T-Series Apna Punjab",
        "officialUrl": "https://www.youtube.com/watch?v=E8rpY2FwKkY",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/8f/e4/658fe4b4-207f-71a2-8aad-d063e7c16d4f/mzaf_12662436654393664330.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/soch/1158554764?i=1158554778&uo=4"
      }
    }
  },
  {
    "id": "filhall",
    "title": "Filhall",
    "artist": "B Praak",
    "album": "Filhall (feat. Akshay Kumar & Nupur Sanon) - Single",
    "releaseYear": 2019,
    "genre": "Punjabi Ballad",
    "language": "Punjabi",
    "moods": [
      "sad-radio"
    ],
    "categories": [
      "punjabi-sad"
    ],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9d/da/9a/9dda9a1e-bf43-1726-29f6-bd3e30b8fe90/20UMGIM63902.rgb.jpg/600x600bb.jpg",
    "durationSec": 255,
    "hookStartSec": 42,
    "sources": {
      "youtube": {
        "videoId": "hMy5za-m5Ew",
        "channelName": "DM - Desi Melodies",
        "officialUrl": "https://www.youtube.com/watch?v=hMy5za-m5Ew",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/ef/37/f1ef37ae-4abb-83a7-0e47-95b00525e97c/mzaf_3839429326446909841.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/filhall-feat-akshay-kumar-nupur-sanon/1525344734?i=1525344736&uo=4"
      }
    }
  },
  {
    "id": "cheques",
    "title": "Cheques",
    "artist": "Shubh",
    "album": "Still Rollin",
    "releaseYear": 2023,
    "genre": "Punjabi Hip-Hop",
    "language": "Punjabi",
    "moods": [
      "workout-radio",
      "night-drive"
    ],
    "categories": [
      "punjabi-workout",
      "punjabi-party"
    ],
    "sets": [
      "gym-session",
      "punjabi-night"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/46/a9/dc46a9c9-794e-2d7a-1afb-97eb4ae0fff6/197188915704.jpg/600x600bb.jpg",
    "durationSec": 184,
    "hookStartSec": 24,
    "sources": {
      "youtube": {
        "videoId": "4tywp83zkmk",
        "channelName": "SHUBH",
        "officialUrl": "https://www.youtube.com/watch?v=4tywp83zkmk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5f/e9/8a/5fe98aa5-660a-2f91-b53d-558fdb9ef50b/mzaf_5845186979219129320.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/cheques/1687649537?i=1687649562&uo=4"
      }
    }
  },
  {
    "id": "still-rollin",
    "title": "Still Rollin",
    "artist": "Shubh",
    "album": "Still Rollin",
    "releaseYear": 2023,
    "genre": "Punjabi Hip-Hop",
    "language": "Punjabi",
    "moods": [
      "workout-radio",
      "night-drive"
    ],
    "categories": [
      "punjabi-workout",
      "punjabi-party"
    ],
    "sets": [
      "gym-session",
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/46/a9/dc46a9c9-794e-2d7a-1afb-97eb4ae0fff6/197188915704.jpg/600x600bb.jpg",
    "durationSec": 175,
    "hookStartSec": 24,
    "sources": {
      "youtube": {
        "videoId": "0mCVpUDCkEk",
        "channelName": "SHUBH",
        "officialUrl": "https://www.youtube.com/watch?v=0mCVpUDCkEk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/8a/04/668a0423-3b9e-10af-9118-af173fb5a127/mzaf_18037249437587947297.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/still-rollin/1687649537?i=1687649546&uo=4"
      }
    }
  },
  {
    "id": "tunak-tunak-tun",
    "title": "Tunak Tunak Tun",
    "artist": "Daler Mehndi",
    "album": "Tunak Tunak Tun",
    "releaseYear": 1998,
    "genre": "Bhangra",
    "language": "Punjabi",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "punjabi-bhangra"
    ],
    "sets": [
      "punjabi-night",
      "wedding-dance",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fc/58/90/fc5890ed-f6ea-937f-c0f8-35d9fcce0f57/886443869547.jpg/600x600bb.jpg",
    "durationSec": 303,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "QoEONbxXWIQ",
        "channelName": "Sony Music India",
        "officialUrl": "https://www.youtube.com/watch?v=QoEONbxXWIQ",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/fb/ce/1afbce13-b83b-a883-4ad3-13867039b396/mzaf_4880266552559677028.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/tunak-tunak-tun/604814335?i=604814341&uo=4"
      }
    }
  },
  {
    "id": "mundian-to-bach-ke",
    "title": "Mundian To Bach Ke",
    "artist": "Panjabi MC",
    "album": "Mundian to Bach Ke - Single",
    "releaseYear": 2002,
    "genre": "Bhangra",
    "language": "Punjabi",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "punjabi-bhangra",
      "punjabi-party"
    ],
    "sets": [
      "punjabi-night",
      "house-party",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/99/5a/97/995a9720-0aa4-19a9-8922-87c6c6c0a938/8718274959611.png/600x600bb.jpg",
    "durationSec": 246,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "x9WO2ieJMYk",
        "channelName": "Altra Moda Music",
        "officialUrl": "https://www.youtube.com/watch?v=x9WO2ieJMYk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d2/87/3c/d2873c27-86f0-b349-be98-cdab1429fc7e/mzaf_9981002874427167582.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/mundian-to-bach-ke/1671313139?i=1671313140&uo=4"
      }
    }
  },
  {
    "id": "amplifier",
    "title": "Amplifier",
    "artist": "Imran Khan",
    "album": "Unforgettable - Sped Up",
    "releaseYear": 2009,
    "genre": "Punjabi Urban",
    "language": "Punjabi",
    "moods": [
      "night-drive",
      "party-radio"
    ],
    "categories": [
      "punjabi-bhangra",
      "punjabi-party"
    ],
    "sets": [
      "punjabi-night",
      "road-trip",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d8/8e/9f/d88e9fc2-f509-62db-0d70-062fe453809b/5059552579187.jpg/600x600bb.jpg",
    "durationSec": 192,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "uuCFRaFWjwY",
        "channelName": "imrankhanworld",
        "officialUrl": "https://www.youtube.com/watch?v=uuCFRaFWjwY",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c8/c1/2e/c8c12eb1-19b4-f66f-2b74-8463ac7402e3/mzaf_14739664157299237264.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/amplifier-sped-up/1737462083?i=1737462088&uo=4"
      }
    }
  },
  {
    "id": "high-rated-gabru",
    "title": "High Rated Gabru",
    "artist": "Guru Randhawa",
    "album": "High Rated Gabru - Single",
    "releaseYear": 2017,
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "punjabi-bhangra",
      "punjabi-party"
    ],
    "sets": [
      "punjabi-night",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9c/d5/f4/9cd5f417-3477-0f42-c9ff-5da0314fe724/8903431647344_cover.jpg/600x600bb.jpg",
    "durationSec": 214,
    "hookStartSec": 25,
    "sources": {
      "youtube": {
        "videoId": "hjWf8A0YNSE",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=hjWf8A0YNSE",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d3/a0/fe/d3a0fe8d-1004-93bc-5746-363dd3284dc0/mzaf_14362248372762399838.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/high-rated-gabru/1254412548?i=1254412550&uo=4"
      }
    }
  },
  {
    "id": "lose-yourself",
    "title": "Lose Yourself",
    "artist": "Eminem",
    "album": "8 Mile (Music from and Inspired By the Motion Picture)",
    "releaseYear": 2002,
    "genre": "Hip-Hop",
    "language": "English",
    "moods": [
      "workout-radio"
    ],
    "categories": [
      "english-hip-hop"
    ],
    "sets": [
      "gym-session",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/08/23/fc/0823fcd9-cb44-695b-32bf-b3bf51d9f800/00606949351229.rgb.jpg/600x600bb.jpg",
    "durationSec": 322,
    "hookStartSec": 50,
    "sources": {
      "youtube": {
        "videoId": "xFYQQPAOz7Y",
        "channelName": "EminemMusic",
        "officialUrl": "https://www.youtube.com/watch?v=xFYQQPAOz7Y",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/5a/61/135a6154-8ca2-0523-1fa2-f4ac0ea9e1e7/mzaf_13242749689945681184.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/lose-yourself/1440903339?i=1440903439&uo=4"
      }
    }
  },
  {
    "id": "humble",
    "title": "HUMBLE.",
    "artist": "Kendrick Lamar",
    "album": "DAMN.",
    "releaseYear": 2017,
    "genre": "Hip-Hop",
    "language": "English",
    "moods": [
      "workout-radio",
      "party-radio"
    ],
    "categories": [
      "english-hip-hop"
    ],
    "sets": [
      "gym-session",
      "college-party",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/600x600bb.jpg",
    "durationSec": 177,
    "hookStartSec": 25,
    "sources": {
      "youtube": {
        "videoId": "tvTRZJ-4EyI",
        "channelName": "KendrickLamarVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=tvTRZJ-4EyI",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1f/2e/37/1f2e37be-bdd0-d770-6ea4-091011a6aade/mzaf_2360827885900940865.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/humble/1440881722?i=1440882165&uo=4"
      }
    }
  },
  {
    "id": "sunflower",
    "title": "Sunflower",
    "artist": "Post Malone & Swae Lee",
    "album": "Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)",
    "releaseYear": 2018,
    "genre": "Melodic Hip-Hop",
    "language": "English",
    "moods": [
      "chill-radio",
      "happy-radio",
      "night-drive"
    ],
    "categories": [
      "english-hip-hop",
      "english-pop"
    ],
    "sets": [
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg",
    "durationSec": 158,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "ApXoWvfEYVU",
        "channelName": "PostMaloneVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=ApXoWvfEYVU",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/f0/d6/98f0d67e-f8bf-762d-cac7-1c6b3b6b35dd/mzaf_4543283896248560946.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/sunflower-spider-man-into-the-spider-verse/1445949265?i=1445949267&uo=4"
      }
    }
  },
  {
    "id": "gods-plan",
    "title": "Gods Plan",
    "artist": "Drake",
    "album": "Scorpion",
    "releaseYear": 2018,
    "genre": "Hip-Hop",
    "language": "English",
    "moods": [
      "night-drive",
      "chill-radio"
    ],
    "categories": [
      "english-hip-hop"
    ],
    "sets": [
      "house-party",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/600x600bb.jpg",
    "durationSec": 199,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "xpVfcZ0ZcFM",
        "channelName": "DrakeVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/4a/be/c64abe74-adb4-cff5-005d-0fab3d72a806/mzaf_10276154697254415719.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/gods-plan/1406109769?i=1406109863&uo=4"
      }
    }
  },
  {
    "id": "blinding-lights",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "album": "Blinding Lights (Remix) - Single",
    "releaseYear": 2020,
    "genre": "Synth-Pop",
    "language": "English",
    "moods": [
      "night-drive",
      "workout-radio",
      "party-radio"
    ],
    "categories": [
      "english-pop",
      "english-party-hits"
    ],
    "sets": [
      "road-trip",
      "english-club-hits",
      "house-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg",
    "durationSec": 216,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "4NRXx6U8ABQ",
        "channelName": "TheWeekndVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/73/ca/1273ca46-233a-5331-189b-25ac1d656533/mzaf_976341070785891411.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/blinding-lights-remix/1542842760?i=1542842761&uo=4"
      }
    }
  },
  {
    "id": "levitating",
    "title": "Levitating",
    "artist": "Dua Lipa",
    "album": "Future Nostalgia",
    "releaseYear": 2020,
    "genre": "Dance Pop",
    "language": "English",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "english-pop",
      "english-party-hits"
    ],
    "sets": [
      "house-party",
      "birthday-party",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg",
    "durationSec": 204,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "TUVcZfQe-Kw",
        "channelName": "Dua Lipa",
        "officialUrl": "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/dc/4d/59dc4dda-93ff-8f1c-c536-f005f6ea6af5/mzaf_3066686759813252385.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/levitating/1538003494?i=1538003843&uo=4"
      }
    }
  },
  {
    "id": "as-it-was",
    "title": "As It Was",
    "artist": "Harry Styles",
    "album": "Harry's House",
    "releaseYear": 2022,
    "genre": "Synth-Pop",
    "language": "English",
    "moods": [
      "happy-radio",
      "chill-radio"
    ],
    "categories": [
      "english-pop"
    ],
    "sets": [
      "road-trip",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "durationSec": 167,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "H5v3kku4y6Q",
        "channelName": "HarryStylesVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=H5v3kku4y6Q",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/10/16/67101606-3869-ca44-6c03-e13d6322cb51/mzaf_1135399237022217274.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/as-it-was/1615584999?i=1615585008&uo=4"
      }
    }
  },
  {
    "id": "shape-of-you",
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "÷ (Deluxe)",
    "releaseYear": 2017,
    "genre": "Pop",
    "language": "English",
    "moods": [
      "happy-radio",
      "workout-radio"
    ],
    "categories": [
      "english-pop",
      "english-party-hits"
    ],
    "sets": [
      "birthday-party",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg",
    "durationSec": 234,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "JGwWNGJdvx8",
        "channelName": "Ed Sheeran",
        "officialUrl": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/c7/4f/44c74f0d-72dc-6143-d4d0-ba14d661ca0d/mzaf_9566898362556366703.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/shape-of-you/1193701079?i=1193701392&uo=4"
      }
    }
  },
  {
    "id": "perfect",
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "album": "÷ (Deluxe)",
    "releaseYear": 2017,
    "genre": "Pop Ballad",
    "language": "English",
    "moods": [
      "romantic-radio"
    ],
    "categories": [
      "english-love-songs"
    ],
    "sets": [
      "romantic-evening",
      "wedding-dance"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg",
    "durationSec": 263,
    "hookStartSec": 42,
    "sources": {
      "youtube": {
        "videoId": "2Vv-BfVoq4g",
        "channelName": "Ed Sheeran",
        "officialUrl": "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c7/ba/bc/c7babc66-f598-aaa6-bcf6-307281795817/mzaf_16337361235117168274.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/perfect/1193701079?i=1193701400&uo=4"
      }
    }
  },
  {
    "id": "all-of-me",
    "title": "All of Me",
    "artist": "John Legend",
    "album": "Love in the Future (Expanded Edition)",
    "releaseYear": 2013,
    "genre": "R&B Ballad",
    "language": "English",
    "moods": [
      "romantic-radio",
      "sad-radio"
    ],
    "categories": [
      "english-love-songs"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/22/71/b9/2271b906-85b3-06ee-e611-489b91df0b73/886444160742.jpg/600x600bb.jpg",
    "durationSec": 270,
    "hookStartSec": 40,
    "sources": {
      "youtube": {
        "videoId": "450p7goxZqg",
        "channelName": "johnlegendVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=450p7goxZqg",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ff/94/6c/ff946ca7-e49a-fdf8-ea5b-11e6f56a0417/mzaf_17369156110722174773.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/all-of-me/1441844369?i=1441844542&uo=4"
      }
    }
  },
  {
    "id": "die-with-a-smile",
    "title": "Die With A Smile",
    "artist": "Lady Gaga & Bruno Mars",
    "album": "Die With A Smile - Single",
    "releaseYear": 2024,
    "genre": "Pop Soul",
    "language": "English",
    "moods": [
      "romantic-radio"
    ],
    "categories": [
      "english-love-songs",
      "english-pop"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/ae/f2/11aef294-f57c-bab9-c9fc-529162984e62/24UMGIM85348.rgb.jpg/600x600bb.jpg",
    "durationSec": 252,
    "hookStartSec": 38,
    "sources": {
      "youtube": {
        "videoId": "kPa7bsKwL-c",
        "channelName": "LadyGagaVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=kPa7bsKwL-c",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/6a/99/076a99ed-b946-431b-6f1f-54fa187ca5bd/mzaf_8102882277995122875.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/die-with-a-smile/1762656724?i=1762656732&uo=4"
      }
    }
  },
  {
    "id": "thinking-out-loud",
    "title": "Thinking Out Loud",
    "artist": "Ed Sheeran",
    "album": "x (Wembley Edition)",
    "releaseYear": 2014,
    "genre": "Acoustic Soul",
    "language": "English",
    "moods": [
      "romantic-radio",
      "chill-radio"
    ],
    "categories": [
      "english-love-songs"
    ],
    "sets": [
      "romantic-evening",
      "wedding-dance"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/36/f9/2d36f9a7-2c3e-ce0f-7fb6-036feecb221f/825646974450.jpg/600x600bb.jpg",
    "durationSec": 282,
    "hookStartSec": 36,
    "sources": {
      "youtube": {
        "videoId": "lp-EO5I60KA",
        "channelName": "Ed Sheeran",
        "officialUrl": "https://www.youtube.com/watch?v=lp-EO5I60KA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/a5/f2/78a5f25e-ad1b-718d-82ad-b82e676c1855/mzaf_6133970271589343093.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/thinking-out-loud/1050204616?i=1050204631&uo=4"
      }
    }
  },
  {
    "id": "wake-me-up",
    "title": "Wake Me Up",
    "artist": "Avicii",
    "album": "True",
    "releaseYear": 2013,
    "genre": "Progressive House",
    "language": "English",
    "moods": [
      "happy-radio",
      "workout-radio",
      "party-radio"
    ],
    "categories": [
      "english-edm",
      "english-party-hits"
    ],
    "sets": [
      "english-club-hits",
      "road-trip",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/5b/1e/185b1ef5-5d97-19d8-aebf-8e29e41874ef/13UAAIM59255.rgb.jpg/600x600bb.jpg",
    "durationSec": 250,
    "hookStartSec": 45,
    "sources": {
      "youtube": {
        "videoId": "IcrbM1l_BoI",
        "channelName": "AviciiOfficialVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=IcrbM1l_BoI",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/68/1e/60/681e601f-e1f2-4ebb-37de-adf00bdf57b6/mzaf_8266263075137964740.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/wake-me-up/1440872730?i=1440872929&uo=4"
      }
    }
  },
  {
    "id": "titanium",
    "title": "Titanium",
    "artist": "David Guetta ft. Sia",
    "album": "Nothing But the Beat",
    "releaseYear": 2011,
    "genre": "EDM",
    "language": "English",
    "moods": [
      "workout-radio",
      "party-radio"
    ],
    "categories": [
      "english-edm"
    ],
    "sets": [
      "gym-session",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/600x600bb.jpg",
    "durationSec": 245,
    "hookStartSec": 44,
    "sources": {
      "youtube": {
        "videoId": "JRfuAukYTKg",
        "channelName": "David Guetta",
        "officialUrl": "https://www.youtube.com/watch?v=JRfuAukYTKg",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/dd/8f/45dd8ffc-0164-1f70-c53d-bf91a1d80b1a/mzaf_3092057092144618662.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/titanium-feat-sia/693225996?i=693226464&uo=4"
      }
    }
  },
  {
    "id": "dont-you-worry-child",
    "title": "Dont You Worry Child",
    "artist": "Swedish House Mafia ft. John Martin",
    "album": "Don't You Worry Child (feat. John Martin) - EP",
    "releaseYear": 2012,
    "genre": "Progressive House",
    "language": "English",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "english-edm",
      "english-party-hits"
    ],
    "sets": [
      "english-club-hits",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7a/a0/33/7aa0335b-167b-c15a-fcac-22e22ed2ea03/5099997933755.jpg/600x600bb.jpg",
    "durationSec": 258,
    "hookStartSec": 46,
    "sources": {
      "youtube": {
        "videoId": "1y6smkh6c-0",
        "channelName": "SHMVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=1y6smkh6c-0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/77/06/19/77061943-7598-9d06-d1d4-7fe6e4b89a7c/mzaf_9832849938043881705.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/dont-you-worry-child-feat-john-martin-acoustic-version/6798736826?i=6798736835&uo=4"
      }
    }
  },
  {
    "id": "levels-avicii",
    "title": "Levels",
    "artist": "Avicii",
    "album": "Levels - EP",
    "releaseYear": 2011,
    "genre": "EDM",
    "language": "English",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "english-edm"
    ],
    "sets": [
      "english-club-hits",
      "gym-session",
      "house-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/38/43/67384338-9ed7-fc68-5927-93f1fcf4705d/11UMGIM36900.rgb.jpg/600x600bb.jpg",
    "durationSec": 339,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "_ovdm2yX4MA",
        "channelName": "AviciiOfficialVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=_ovdm2yX4MA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/dc/bd/66dcbd68-b557-bdfd-f2c2-a05491758783/mzaf_13654489760720011690.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/levels/1440787344?i=1440787349&uo=4"
      }
    }
  },
  {
    "id": "uptown-funk",
    "title": "Uptown Funk",
    "artist": "Mark Ronson ft. Bruno Mars",
    "album": "Uptown Special",
    "releaseYear": 2014,
    "genre": "Funk Pop",
    "language": "English",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "english-party-hits",
      "english-pop"
    ],
    "sets": [
      "house-party",
      "birthday-party",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7e/30/c5/7e30c572-aa47-5f7b-c6fd-42d50cd2c56d/886444959797.jpg/600x600bb.jpg",
    "durationSec": 270,
    "hookStartSec": 34,
    "sources": {
      "youtube": {
        "videoId": "OPf0YbXqDm0",
        "channelName": "MarkRonsonVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/99/1f/91991fe5-aa77-87e4-edbc-6d68c95e5f18/mzaf_10685317694850942114.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/uptown-funk-feat-bruno-mars/943946661?i=943946671&uo=4"
      }
    }
  },
  {
    "id": "cant-stop-the-feeling",
    "title": "Cant Stop the Feeling!",
    "artist": "Justin Timberlake",
    "album": "TROLLS (Original Motion Picture Soundtrack)",
    "releaseYear": 2016,
    "genre": "Dance Pop",
    "language": "English",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "english-party-hits",
      "english-pop"
    ],
    "sets": [
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/68/19/43/68194388-efa7-3afe-8a15-a4c3eebef1f6/886445915211.jpg/600x600bb.jpg",
    "durationSec": 238,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "ru0K8uYEZWw",
        "channelName": "justintimberlakeVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=ru0K8uYEZWw",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/41/2d/86412d20-2f4d-39fc-221b-3f643d7c99c6/mzaf_9909715182585785919.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/cant-stop-the-feeling/1154238159?i=1154239184&uo=4"
      }
    }
  },
  {
    "id": "party-rock-anthem",
    "title": "Party Rock Anthem",
    "artist": "LMFAO",
    "album": "Sorry for Party Rocking (Deluxe Version)",
    "releaseYear": 2011,
    "genre": "Electro House",
    "language": "English",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "english-party-hits",
      "english-edm"
    ],
    "sets": [
      "house-party",
      "college-party",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/d9/07/21d9076e-a52c-4f94-5176-011a9ec878e7/11UMGIM14032.rgb.jpg/600x600bb.jpg",
    "durationSec": 262,
    "hookStartSec": 38,
    "sources": {
      "youtube": {
        "videoId": "KQ6zr6kCPj8",
        "channelName": "LMFAOVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=KQ6zr6kCPj8",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fe/63/a1/fe63a1b8-091f-9d45-594f-bb982166297f/mzaf_8877172162075707701.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/party-rock-anthem-feat-lauren-bennett-goonrock/1440636622?i=1440636627&uo=4"
      }
    }
  },
  {
    "id": "i-gotta-feeling",
    "title": "I Gotta Feeling",
    "artist": "Black Eyed Peas",
    "album": "THE E.N.D. (THE ENERGY NEVER DIES)",
    "releaseYear": 2009,
    "genre": "Dance Pop",
    "language": "English",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "english-party-hits"
    ],
    "sets": [
      "house-party",
      "birthday-party",
      "english-club-hits"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/fc/47/42fc4794-3c69-8c00-e528-1c7e92b5ac93/09UMGIM13833.rgb.jpg/600x600bb.jpg",
    "durationSec": 289,
    "hookStartSec": 36,
    "sources": {
      "youtube": {
        "videoId": "uSD4vsh1zDA",
        "channelName": "BlackEyedPeasVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=uSD4vsh1zDA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/88/5e/6a/885e6adb-f307-d849-a3e0-47280088b5a4/mzaf_12588254824919596992.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/i-gotta-feeling/1440768902?i=1440769310&uo=4"
      }
    }
  },
  {
    "id": "weightless",
    "title": "Weightless",
    "artist": "Marconi Union",
    "album": "The Ambient Zone Just Music Cafe, Vol. 4",
    "releaseYear": 2011,
    "genre": "Ambient",
    "language": "English",
    "moods": [
      "focus-radio",
      "chill-radio"
    ],
    "categories": [],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/3a/d6/c33ad6a3-ec91-62e4-0912-d4a873d4fed0/cover.jpg/600x600bb.jpg",
    "durationSec": 480,
    "hookStartSec": 20,
    "sources": {
      "youtube": {
        "videoId": "UfcAVejslrU",
        "channelName": "JustMusicTV",
        "officialUrl": "https://www.youtube.com/watch?v=UfcAVejslrU",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/69/07/656907c9-eb54-c59c-72b9-dad8489a0165/mzaf_3316991574698499044.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/weightless/571977211?i=571977598&uo=4"
      }
    }
  },
  {
    "id": "experience-einaudi",
    "title": "Experience",
    "artist": "Ludovico Einaudi",
    "album": "In a Time Lapse",
    "releaseYear": 2013,
    "genre": "Neo-Classical",
    "language": "English",
    "moods": [
      "focus-radio",
      "sad-radio"
    ],
    "categories": [],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/13/fd/7b/13fd7bfd-125a-4493-dc85-96aef9c25562/12UMGIM65023.rgb.jpg/600x600bb.jpg",
    "durationSec": 315,
    "hookStartSec": 40,
    "sources": {
      "youtube": {
        "videoId": "1e9B31FLT-s",
        "channelName": "LudovicoEinaudiVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=1e9B31FLT-s",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ab/9a/93/ab9a931d-93d3-71f8-8faf-73366409df82/mzaf_5843577385542178088.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/experience/1440772612?i=1440772740&uo=4"
      }
    }
  },
  {
    "id": "river-flows-in-you",
    "title": "River Flows in You",
    "artist": "Yiruma",
    "album": "Yiruma 2nd Album 'First Love' (The Original & the Very First Recording)",
    "releaseYear": 2001,
    "genre": "Piano Instrumental",
    "language": "English",
    "moods": [
      "focus-radio",
      "chill-radio",
      "romantic-radio"
    ],
    "categories": [],
    "sets": [],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/f4/9b/5ff49b8c-d0bb-3748-14f4-131edfb332ce/first_love_3000.jpg/600x600bb.jpg",
    "durationSec": 189,
    "hookStartSec": 18,
    "sources": {
      "youtube": {
        "videoId": "7maJOI3QMu0",
        "channelName": "YirumaVEVO",
        "officialUrl": "https://www.youtube.com/watch?v=7maJOI3QMu0",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/e8/db/5de8db2a-16e9-9952-1e92-72c8bd66c466/mzaf_12453809584145821574.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/river-flows-in-you/1436677753?i=1436677761&uo=4"
      }
    }
  },
  {
    "id": "vaathi-coming",
    "title": "Vaathi Coming",
    "artist": "Anirudh Ravichander & Gana Balachandar",
    "album": "Master (Original Motion Picture Soundtrack)",
    "releaseYear": 2020,
    "genre": "Tamil Kuthu",
    "language": "Tamil",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "tamil-kuthu"
    ],
    "sets": [
      "college-party",
      "house-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a3/f2/dc/a3f2dc29-fc54-07bb-8f9c-2a3936d21a5d/886448363347.jpg/600x600bb.jpg",
    "durationSec": 228,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "fRD_3vJagxk",
        "channelName": "Sony Music South",
        "officialUrl": "https://www.youtube.com/watch?v=fRD_3vJagxk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d7/72/96/d77296ea-677d-45f9-4267-996bbc6801c8/mzaf_2392699048273414940.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/vaathi-coming/1502968254?i=1502968258&uo=4"
      }
    }
  },
  {
    "id": "arabic-kuthu",
    "title": "Arabic Kuthu",
    "artist": "Anirudh Ravichander & Jonita Gandhi",
    "album": "Arabic Kuthu (From \"Beast\") - Single",
    "releaseYear": 2022,
    "genre": "Tamil Kuthu",
    "language": "Tamil",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "tamil-kuthu"
    ],
    "sets": [
      "college-party",
      "wedding-dance"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e9/19/b9/e919b921-d5a8-9e9a-8508-3551da375aee/196626458629.jpg/600x600bb.jpg",
    "durationSec": 280,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "KUN5Uf9mObQ",
        "channelName": "Sun TV",
        "officialUrl": "https://www.youtube.com/watch?v=KUN5Uf9mObQ",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/58/ac/9a/58ac9a48-9e3e-15c9-5085-3a13a6187992/mzaf_12322264242631159198.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/arabic-kuthu-from-beast/1609970851?i=1609971105&uo=4"
      }
    }
  },
  {
    "id": "rowdy-baby",
    "title": "Rowdy Baby",
    "artist": "Dhanush & Dhee",
    "album": "Maari 2 (Original Motion Picture Soundtrack) - Single",
    "releaseYear": 2018,
    "genre": "Tamil Kuthu",
    "language": "Tamil",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "tamil-kuthu"
    ],
    "sets": [
      "birthday-party",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/0b/4f/090b4ffb-f4eb-f975-ae79-ce5446eeabc8/718598836276.jpg/600x600bb.jpg",
    "durationSec": 281,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "x6Q7c9RyMzk",
        "channelName": "Wunderbar Films",
        "officialUrl": "https://www.youtube.com/watch?v=x6Q7c9RyMzk",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/17/90/911790e5-27e3-6021-da30-bddf59576e3d/mzaf_3831305118076812899.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/rowdy-baby/1702730225?i=1702730486&uo=4"
      }
    }
  },
  {
    "id": "kolaveri-di",
    "title": "Why This Kolaveri Di",
    "artist": "Dhanush & Anirudh Ravichander",
    "album": "3 (Original Motion Picture Soundtrack) [Telugu]",
    "releaseYear": 2011,
    "genre": "Tamil Pop",
    "language": "Tamil",
    "moods": [
      "happy-radio",
      "chill-radio"
    ],
    "categories": [
      "tamil-kuthu"
    ],
    "sets": [
      "road-trip"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/07/86/83/07868369-2b62-343b-9993-4311f9d59dfa/886443435902.jpg/600x600bb.jpg",
    "durationSec": 260,
    "hookStartSec": 24,
    "sources": {
      "youtube": {
        "videoId": "YR12Z8f1Dh8",
        "channelName": "Sony Music South",
        "officialUrl": "https://www.youtube.com/watch?v=YR12Z8f1Dh8",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/b6/47/9cb647c8-7a88-e45a-3d96-26d60432fd9e/mzaf_18327520659217913330.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/why-this-kolaveri-di-the-soup-of-love/514729309?i=514729349&uo=4"
      }
    }
  },
  {
    "id": "naatu-naatu",
    "title": "Naatu Naatu",
    "artist": "Rahul Sipligunj & Kaala Bhairava",
    "album": "RRR",
    "releaseYear": 2021,
    "genre": "Telugu Mass",
    "language": "Telugu",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "telugu-mass"
    ],
    "sets": [
      "college-party",
      "wedding-dance",
      "gym-session"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/79IEesucPo8/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "79IEesucPo8",
        "channelName": "T-Series Telugu",
        "officialUrl": "https://www.youtube.com/watch?v=79IEesucPo8",
        "embeddable": true
      }
    }
  },
  {
    "id": "butta-bomma",
    "title": "Butta Bomma",
    "artist": "Armaan Malik",
    "album": "Butta Bomma (Remix) [From \"Ala Vaikunthapurramuloo\"] - Single",
    "releaseYear": 2024,
    "genre": "Telugu Pop",
    "language": "Telugu",
    "moods": [
      "happy-radio",
      "romantic-radio"
    ],
    "categories": [
      "telugu-mass"
    ],
    "sets": [
      "wedding-dance",
      "birthday-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/46/aa/48/46aa4863-c1ec-4574-e98e-80b8c1f3ef69/cover.jpg/600x600bb.jpg",
    "durationSec": 198,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "2mDCVzruYzQ",
        "channelName": "Aditya Music",
        "officialUrl": "https://www.youtube.com/watch?v=2mDCVzruYzQ",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/28/e0/d3/28e0d30a-2afe-66e4-ac03-69b6d779fecd/mzaf_7857615290499608693.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/butta-bomma-remix-from-ala-vaikunthapurramuloo/1736706821?i=1736707044&uo=4"
      }
    }
  },
  {
    "id": "oo-antava",
    "title": "Oo Antava Oo Oo Antava",
    "artist": "Indravathi Chauhan",
    "album": "Pushpa",
    "releaseYear": 2021,
    "genre": "Telugu Mass",
    "language": "Telugu",
    "moods": [
      "party-radio"
    ],
    "categories": [
      "telugu-mass"
    ],
    "sets": [
      "house-party",
      "college-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/u_wB6byrl5k/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "u_wB6byrl5k",
        "channelName": "Aditya Music",
        "officialUrl": "https://www.youtube.com/watch?v=u_wB6byrl5k",
        "embeddable": true
      }
    }
  },
  {
    "id": "ramuloo-ramulaa",
    "title": "Ramuloo Ramulaa",
    "artist": "Anurag Kulkarni & Mangli",
    "album": "Ramuloo Ramulaa (From \"Ala Vaikunthapurramuloo\") - Single",
    "releaseYear": 2019,
    "genre": "Telugu Mass",
    "language": "Telugu",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "telugu-mass"
    ],
    "sets": [
      "wedding-dance",
      "college-party"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/4d/7c/4a/4d7c4a33-0c3b-b0e5-1e5a-8182d9a25811/cover.jpg/600x600bb.jpg",
    "durationSec": 246,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "Bg8Yb9zGYyA",
        "channelName": "Aditya Music PLAYBACK",
        "officialUrl": "https://www.youtube.com/watch?v=Bg8Yb9zGYyA",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/7b/7d/217b7d89-df73-12db-ca5f-2fee71f47dce/mzaf_2385408187580859158.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/in/album/ramuloo-ramulaa-from-ala-vaikunthapurramuloo/1485104772?i=1485104774&uo=4"
      }
    }
  },
  {
    "id": "52-gaj-ka-daman",
    "title": "52 Gaj Ka Daman",
    "artist": "Renuka Panwar",
    "album": "52 Gaj Ka Daman",
    "releaseYear": 2020,
    "genre": "Haryanvi DJ",
    "language": "Haryanvi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "haryanvi-party"
    ],
    "sets": [
      "wedding-dance",
      "birthday-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/CZt-rVn2BJs/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 24,
    "sources": {
      "youtube": {
        "videoId": "CZt-rVn2BJs",
        "channelName": "Mahra Tora",
        "officialUrl": "https://www.youtube.com/watch?v=CZt-rVn2BJs",
        "embeddable": true
      }
    }
  },
  {
    "id": "teri-aakhya-ka-yo-kajal",
    "title": "Teri Aakhya Ka Yo Kajal",
    "artist": "DC Madana",
    "album": "Teri Aakhya Ka Yo Kajal",
    "releaseYear": 2018,
    "genre": "Haryanvi DJ",
    "language": "Haryanvi",
    "moods": [
      "party-radio"
    ],
    "categories": [
      "haryanvi-party"
    ],
    "sets": [
      "wedding-dance",
      "house-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/GftlBD-Apu8/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 24,
    "sources": {
      "youtube": {
        "videoId": "GftlBD-Apu8",
        "channelName": "Sonotek Punjabi",
        "officialUrl": "https://www.youtube.com/watch?v=GftlBD-Apu8",
        "embeddable": true
      }
    }
  },
  {
    "id": "chatak-matak",
    "title": "Chatak Matak",
    "artist": "Renuka Panwar",
    "album": "Chatak Matak",
    "releaseYear": 2020,
    "genre": "Haryanvi DJ",
    "language": "Haryanvi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "haryanvi-party"
    ],
    "sets": [
      "wedding-dance"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/s9AICwTKgOg/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 22,
    "sources": {
      "youtube": {
        "videoId": "s9AICwTKgOg",
        "channelName": "VATS RECORDS",
        "officialUrl": "https://www.youtube.com/watch?v=s9AICwTKgOg",
        "embeddable": true
      }
    }
  },
  {
    "id": "lollipop-lagelu",
    "title": "Lollipop Lagelu",
    "artist": "Pawan Singh",
    "album": "Lollipop Lagelu",
    "releaseYear": 2015,
    "genre": "Bhojpuri Dance",
    "language": "Bhojpuri",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "bhojpuri-party"
    ],
    "sets": [
      "college-party",
      "birthday-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/Gr8G_ldltDE/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 20,
    "sources": {
      "youtube": {
        "videoId": "Gr8G_ldltDE",
        "channelName": "Wave Music",
        "officialUrl": "https://www.youtube.com/watch?v=Gr8G_ldltDE",
        "embeddable": true
      }
    }
  },
  {
    "id": "rinkiya-ke-papa",
    "title": "Rinkiya Ke Papa",
    "artist": "Manoj Tiwari",
    "album": "Rinkiya Ke Papa",
    "releaseYear": 2012,
    "genre": "Bhojpuri Dance",
    "language": "Bhojpuri",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "bhojpuri-party"
    ],
    "sets": [
      "birthday-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/2Mv8UOiyTq0/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 22,
    "sources": {
      "youtube": {
        "videoId": "2Mv8UOiyTq0",
        "channelName": "T-Series Hamaar Bhojpuri",
        "officialUrl": "https://www.youtube.com/watch?v=2Mv8UOiyTq0",
        "embeddable": true
      }
    }
  },
  {
    "id": "chhalakata-hamro",
    "title": "Chhalakata Hamro Jawaniya",
    "artist": "Pawan Singh & Priyanka Singh",
    "album": "Bhojpuriya Raja",
    "releaseYear": 2016,
    "genre": "Bhojpuri Dance",
    "language": "Bhojpuri",
    "moods": [
      "party-radio"
    ],
    "categories": [
      "bhojpuri-party"
    ],
    "sets": [
      "wedding-dance"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/c4JD7rEtIj8/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 24,
    "sources": {
      "youtube": {
        "videoId": "c4JD7rEtIj8",
        "channelName": "Worldwide Records Bhojpuri",
        "officialUrl": "https://www.youtube.com/watch?v=c4JD7rEtIj8",
        "embeddable": true
      }
    }
  },
  {
    "id": "chogada",
    "title": "Chogada",
    "artist": "Darshan Raval & Asees Kaur",
    "album": "Loveyatri",
    "releaseYear": 2018,
    "genre": "Gujarati Garba",
    "language": "Gujarati",
    "moods": [
      "happy-radio",
      "party-radio"
    ],
    "categories": [
      "gujarati-garba",
      "bollywood-party"
    ],
    "sets": [
      "wedding-dance",
      "birthday-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/asYxxtiWUyw/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "asYxxtiWUyw",
        "channelName": "T-Series",
        "officialUrl": "https://www.youtube.com/watch?v=asYxxtiWUyw",
        "embeddable": true
      }
    }
  },
  {
    "id": "dholida",
    "title": "Dholida",
    "artist": "Janhvi Shrimankar & Shail Hada",
    "album": "Gangubai Kathiawadi",
    "releaseYear": 2022,
    "genre": "Gujarati Garba",
    "language": "Gujarati",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "gujarati-garba"
    ],
    "sets": [
      "wedding-dance"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/WGUsxa7l98M/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "WGUsxa7l98M",
        "channelName": "Saregama Music",
        "officialUrl": "https://www.youtube.com/watch?v=WGUsxa7l98M",
        "embeddable": true
      }
    }
  },
  {
    "id": "nagada-sang-dhol",
    "title": "Nagada Sang Dhol",
    "artist": "Shreya Ghoshal & Osman Mir",
    "album": "Goliyon Ki Raasleela Ram-Leela",
    "releaseYear": 2013,
    "genre": "Gujarati Garba",
    "language": "Gujarati",
    "moods": [
      "party-radio",
      "workout-radio"
    ],
    "categories": [
      "gujarati-garba",
      "hindi-dance"
    ],
    "sets": [
      "wedding-dance",
      "bollywood-night"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/3X7x4Ye-tqo/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 32,
    "sources": {
      "youtube": {
        "videoId": "3X7x4Ye-tqo",
        "channelName": "Sony Music India",
        "officialUrl": "https://www.youtube.com/watch?v=3X7x4Ye-tqo",
        "embeddable": true
      }
    }
  },
  {
    "id": "khalasi",
    "title": "Khalasi",
    "artist": "Aditya Gadhvi & Achint",
    "album": "Coke Studio Bharat",
    "releaseYear": 2023,
    "genre": "Gujarati Folk Fusion",
    "language": "Gujarati",
    "moods": [
      "happy-radio",
      "chill-radio"
    ],
    "categories": [
      "gujarati-garba"
    ],
    "sets": [
      "road-trip"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/t7wSjy9Lv-o/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 26,
    "sources": {
      "youtube": {
        "videoId": "t7wSjy9Lv-o",
        "channelName": "Coke Studio India ",
        "officialUrl": "https://www.youtube.com/watch?v=t7wSjy9Lv-o",
        "embeddable": true
      }
    }
  },
  {
    "id": "zingaat",
    "title": "Zingaat",
    "artist": "Ajay-Atul",
    "album": "Sairat",
    "releaseYear": 2016,
    "genre": "Marathi Dance",
    "language": "Marathi",
    "moods": [
      "party-radio",
      "happy-radio"
    ],
    "categories": [
      "marathi-party"
    ],
    "sets": [
      "wedding-dance",
      "college-party",
      "birthday-party"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/2gcsgfzqN8k/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 34,
    "sources": {
      "youtube": {
        "videoId": "2gcsgfzqN8k",
        "channelName": "Zee Music Marathi",
        "officialUrl": "https://www.youtube.com/watch?v=2gcsgfzqN8k",
        "embeddable": true
      }
    }
  },
  {
    "id": "apsara-aali",
    "title": "Apsara Aali",
    "artist": "Bela Shende & Ajay-Atul",
    "album": "Natarang (Original Motion Picture Soundtrack)",
    "releaseYear": 2010,
    "genre": "Marathi Lavani",
    "language": "Marathi",
    "moods": [
      "party-radio"
    ],
    "categories": [
      "marathi-party"
    ],
    "sets": [
      "wedding-dance"
    ],
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c4/d3/61/c4d3615e-b652-e204-026c-827db678a280/8718857704249.png/600x600bb.jpg",
    "durationSec": 238,
    "hookStartSec": 28,
    "sources": {
      "youtube": {
        "videoId": "a6iA2HgamOE",
        "channelName": "Marathi Music Station",
        "officialUrl": "https://www.youtube.com/watch?v=a6iA2HgamOE",
        "embeddable": true
      },
      "itunesPreview": {
        "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/46/45/8d/46458d12-536b-d6ea-ee12-06e0e7cf3ee5/mzaf_15583309538213083711.plus.aac.p.m4a",
        "officialUrl": "https://music.apple.com/us/album/apsara-aali/1529534266?i=1529534275&uo=4"
      }
    }
  },
  {
    "id": "wajle-ki-bara",
    "title": "Sairat Zaala Ji",
    "artist": "Ajay Gogavale & Chinmayi",
    "album": "Sairat",
    "releaseYear": 2016,
    "genre": "Marathi Romantic",
    "language": "Marathi",
    "moods": [
      "romantic-radio",
      "happy-radio"
    ],
    "categories": [
      "marathi-party"
    ],
    "sets": [
      "romantic-evening"
    ],
    "artworkUrl": "https://i.ytimg.com/vi/ZL3MnrnLLpo/hqdefault.jpg",
    "durationSec": 220,
    "hookStartSec": 30,
    "sources": {
      "youtube": {
        "videoId": "ZL3MnrnLLpo",
        "channelName": "Marathi Love Vibes",
        "officialUrl": "https://www.youtube.com/watch?v=ZL3MnrnLLpo",
        "embeddable": true
      }
    }
  }
];

export function getSongsForCollection(kind: "category" | "mood" | "set" | "language" | "genre", id: string): SongTrack[] {
  if (kind === "category") return REAL_SONGS.filter((s) => s.categories.includes(id));
  if (kind === "mood") return REAL_SONGS.filter((s) => s.moods.includes(id));
  if (kind === "set") return REAL_SONGS.filter((s) => s.sets.includes(id));
  return REAL_SONGS;
}
