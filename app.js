/**
 * Rimuru-MD Official Web Dashboard
 * Portal WhatsApp Multi-Device & Katalog Perintah
 */

// =========================================================================
// 1. DAFTAR BOT WHATSAPP
// -------------------------------------------------------------------------
// CARA MENAMBAH NOMOR BOT BARU:
// Cukup tambahkan baris baru ke dalam daftar BOTS di bawah ini.
// Format:
//   { name: "NamaBot", number: "628xxxxxxxxxx", tag: "C4" },
// Contoh:
//   { name: "Kuro", number: "6281234567890", tag: "C4" }
// =========================================================================
const BOTS = [
  {
    name: 'Veli',
    number: '6285136816270',
    tag: 'C1'
  },
  {
    name: 'Alya',
    number: '6285136816242',
    tag: 'C2'
  },
  {
    name: 'Antrax',
    number: '62881027926259',
    tag: 'C3'
  }
];

// =========================================================================
// 2. DAFTAR KATEGORI MENU & PERINTAH
// -------------------------------------------------------------------------
// CARA MENAMBAH KATEGORI BARU:
// Tambahkan entry baru ke dalam object MENU di bawah ini.
// Format:
//   "NAMA_KATEGORI": {
//     "emoji": "🔥",
//     "commands": ["cmd1", "cmd2", "cmd3"]
//   },
//
// CARA MENAMBAH PERINTAH KE KATEGORI YANG SUDAH ADA:
// Masuk ke kategori yang diinginkan (misal "TOOLS"), lalu tambahkan nama perintah
// di dalam array "commands" (tanpa tanda titik di depan).
// =========================================================================
const MENU = {
  "MAIN": {
    "emoji": "⚡",
    "commands": [
      "allmenu-variants",
      "allmenu",
      "benefitowner",
      "benefitpremium",
      "buypanel",
      "carifitur",
      "cek",
      "creator",
      "creator2",
      "credit",
      "daftar",
      "del",
      "donasi",
      "enable",
      "gacha",
      "gbbot",
      "hargabot",
      "hargapanel",
      "help",
      "jadibot",
      "leaderboard",
      "limit",
      "listch",
      "menu-variants",
      "menu",
      "menucat",
      "msgch",
      "order",
      "order2",
      "owner",
      "ping",
      "ping2",
      "public",
      "q",
      "rch",
      "resetlimit",
      "rules",
      "saluranbot",
      "sc",
      "seleksi",
      "set",
      "stats",
      "stopjadibot",
      "system",
      "test",
      "totalfitur",
      "tqto",
      "tqto2",
      "usercard"
    ]
  },
  "UTILITY": {
    "emoji": "🛠️",
    "commands": [
      "inspect",
      "notifmakan",
      "notiftidur",
      "reminder"
    ]
  },
  "TOOLS": {
    "emoji": "🔧",
    "commands": [
      "alultimate",
      "ambulk",
      "amdata",
      "amprem",
      "amsend",
      "amverif",
      "anticolong",
      "antitagsw",
      "ascii",
      "ban-wa",
      "bandingkan-hp",
      "barcode",
      "binary",
      "bitly",
      "breach",
      "bypass",
      "calc",
      "carbon",
      "caribug",
      "catbox",
      "ccgen",
      "cekakuntt",
      "cekhost",
      "cekidch",
      "cekml",
      "ceknamadana",
      "cekplat",
      "cekrek",
      "cekresi",
      "cekweb",
      "cekxl",
      "cjstoesm",
      "codepromt",
      "colongsw",
      "compresspdf",
      "converter",
      "dafont",
      "daftartt",
      "dbinary",
      "debiner",
      "delpp",
      "deploy",
      "ebinary",
      "ekspedisilist",
      "emojitoanimasi",
      "emojitoimage",
      "enc",
      "encode",
      "enlargerai",
      "esmtocjs",
      "extra-tools",
      "facedetector",
      "fagsocial",
      "fagsocial_video",
      "fakecam",
      "fakecamvid",
      "fakesw",
      "faketag",
      "fakevhs",
      "fetchweb",
      "fliptext",
      "gencard",
      "getpaste",
      "gh",
      "gmaps",
      "grammary",
      "gsmarena",
      "gsmarena2",
      "hapuswm",
      "hd",
      "hd2",
      "hd3",
      "hd4",
      "hd5",
      "hd8",
      "hdvid",
      "hdvideo2",
      "hitungwrmlbb",
      "hostmedia",
      "image",
      "imgtoprompt",
      "invoicemaker",
      "ip",
      "ipwho",
      "izen",
      "jadwaltv",
      "jam",
      "jjcapcut",
      "kalkulatormbg",
      "kirimpesangc",
      "linkid",
      "lookup",
      "mcstalk",
      "mikutalk",
      "morse",
      "musikapaini",
      "myip",
      "nik",
      "nikparser",
      "npmdl",
      "npmshield",
      "nulis",
      "numbgen",
      "ocr",
      "pastebin",
      "phisingataubukan",
      "preset",
      "proxy",
      "ptv",
      "qrcodefile",
      "qrcustom",
      "qwa",
      "rch",
      "readmore",
      "readqr",
      "removebg",
      "removevocal",
      "removewm",
      "resize",
      "resizevideo",
      "rvo",
      "s2c",
      "scanrepo",
      "searchgist",
      "sendngl",
      "setbio",
      "setname",
      "setpp",
      "sharetext",
      "shupload",
      "spam-otp",
      "spam-pairing",
      "spamngl",
      "speedbot",
      "spotifyvid",
      "ssdesktop",
      "sstablet",
      "ssweb",
      "struk",
      "styleteks",
      "subs4unlock",
      "suppbypass",
      "swhdv2",
      "swhdv3",
      "swhdv4",
      "tebalteks",
      "tempmail",
      "tesautopostch",
      "time",
      "tinypng",
      "toaudio",
      "toesm-tocjs",
      "toimg",
      "tomp3",
      "tourl",
      "tourl2",
      "tovideo",
      "tovn",
      "transkrip",
      "translate",
      "tweetss",
      "txt2qr",
      "uguu",
      "upch",
      "upch2",
      "uppastebin",
      "upvidey",
      "usernamegen",
      "vgist",
      "videotranscribe",
      "vocalcut",
      "weather",
      "web2zip",
      "webperf",
      "whatmusic",
      "wink",
      "wisedetail",
      "xterm-ai-tools",
      "ytsummarize"
    ]
  },
  "FUN": {
    "emoji": "🎭",
    "commands": [
      "akankah",
      "alay",
      "angka",
      "apakah",
      "artinama",
      "artinama2",
      "bagaimana",
      "benarkah",
      "berapa",
      "bisakah",
      "bucin",
      "burik",
      "cekcantik",
      "cekfemboy",
      "cekhodam",
      "cekjomok",
      "cekkhodam",
      "cekkontol",
      "cekmemek",
      "cekotot",
      "cekpacar",
      "cekperfoma",
      "cektt",
      "coba",
      "confess",
      "dare",
      "dimana",
      "dimanakah",
      "fakechat",
      "fuckmylife",
      "funcek",
      "gachabini",
      "gachahusbu",
      "gachanasip",
      "gachatomboy",
      "gachawaifu",
      "gachfemboy",
      "gay",
      "gojo-extra",
      "halah",
      "haruskah",
      "jadian",
      "jodoh",
      "kapan",
      "kapankah",
      "kematian",
      "kerangajaib",
      "lifefact",
      "lupakan",
      "mengapa",
      "mimpi",
      "moveon",
      "puisi",
      "putus",
      "ramalan",
      "randomtag",
      "rate",
      "renungan",
      "respon",
      "seberapagila",
      "senja",
      "siapa",
      "simi",
      "simi2",
      "sipaling2",
      "soulmatch",
      "sulap",
      "suratcinta",
      "tebakumur",
      "tembak",
      "terima",
      "tod",
      "tolak",
      "top",
      "truth",
      "wa-canvas"
    ]
  },
  "GAME": {
    "emoji": "🎮",
    "commands": [
      "akinator",
      "angry_birds",
      "asahotak",
      "balap",
      "blackjack",
      "bns",
      "bom",
      "breakout",
      "caklontong",
      "catur",
      "cerdascermat",
      "checkerszerotwo",
      "color_block_puzzle",
      "dino",
      "dungeon",
      "family100",
      "fisch",
      "flappy",
      "genshinprofile",
      "hangman",
      "kataacak",
      "kuis",
      "kyubigame",
      "lengkapikalimat",
      "mahjong-shinobu",
      "maths",
      "memory_match",
      "minecraft",
      "mlbb",
      "monopoli",
      "mortal_kombat",
      "nixelgames",
      "pac_man",
      "perangsarung",
      "riddle",
      "sambungkata",
      "siapakahaku",
      "slot",
      "slot2",
      "snake",
      "sonik",
      "speedydash",
      "stickman",
      "suit",
      "suitpvp",
      "supermario",
      "survival",
      "susunkata",
      "tebakan",
      "tebakanime",
      "tebakbendera",
      "tebakbola",
      "tebakdrakor",
      "tebakepep",
      "tebakff",
      "tebakfilm",
      "tebakgambar",
      "tebakgame",
      "tebakhewan",
      "tebakhp",
      "tebakjkt",
      "tebakjkt48",
      "tebakkalimat",
      "tebakkartun",
      "tebakkata",
      "tebakkimia",
      "tebaklagu",
      "tebaklirik",
      "tebaklogo",
      "tebakmakanan",
      "tebaknegara",
      "tebakprofesi",
      "tebakprovinsi",
      "tebaksurah",
      "tebaktebakan",
      "tebakwarna",
      "tekateki",
      "tetris",
      "tictactoe",
      "togel",
      "trivia",
      "truthordare",
      "ulartangga",
      "uno",
      "war-attack",
      "war",
      "werewolf",
      "wwkill",
      "wwprotect",
      "wwsee",
      "wwsorcerer"
    ]
  },
  "DOWNLOAD": {
    "emoji": "📥",
    "commands": [
      "aio",
      "aio2",
      "alightmotion",
      "applemusic",
      "blibili",
      "capcut",
      "capcutdl",
      "cocofundl",
      "dailymotiondl",
      "douyin",
      "douyindl",
      "facebook",
      "facebookdl",
      "gdrive",
      "gitclone",
      "githubdl",
      "googledrive",
      "ig",
      "ig3",
      "igaudio",
      "instagramdl",
      "instatiktok",
      "likeedl",
      "mediafire",
      "mediafiredl",
      "pindl",
      "pindl2",
      "pixeldraindl",
      "play",
      "play2",
      "rednotedl",
      "sfile",
      "sfiledl",
      "shopeedl",
      "snackvideodl",
      "soundcloud",
      "spotify",
      "spotifydl",
      "terabox",
      "threaddl",
      "tiktok",
      "tiktokdl",
      "tiktokdl2",
      "ttimg",
      "ttmp3",
      "ttmusic",
      "ttslide",
      "twitter",
      "videy",
      "Xhs",
      "yt5so",
      "yta",
      "ytmp3",
      "ytmp4",
      "ytplay",
      "yts",
      "ytv"
    ]
  },
  "SEARCH": {
    "emoji": "🔍",
    "commands": [
      "android1-get",
      "android1",
      "anime2",
      "animeapaini",
      "animelink",
      "animesanka",
      "apkcombo",
      "apkmiror",
      "apkmod-get",
      "apkmod",
      "apkpure",
      "apkzoic",
      "applemaps",
      "applemusic",
      "bingimage",
      "brainly",
      "bstation",
      "carigrup",
      "carimusik",
      "carisinyal",
      "chords",
      "clip",
      "comparation",
      "douyinsearch",
      "dramabox",
      "film",
      "filmget",
      "getmusik",
      "google",
      "gsmarena",
      "imdb",
      "jobstreetsearch",
      "kodepos",
      "lyrics",
      "mangaread",
      "mangatoon",
      "mcaddon",
      "mcpedl",
      "melolo",
      "migen",
      "movieku",
      "nerdfont-ambil",
      "nerdfont",
      "npm",
      "pap",
      "pddikti",
      "pin",
      "pin2",
      "pinterest",
      "pinterest2",
      "pinvid",
      "pixiv",
      "play",
      "play2",
      "play4",
      "playcall",
      "playch",
      "playsoundcloud",
      "playtiktok",
      "playvid",
      "ptvsearch",
      "putar-play",
      "putar-play2",
      "resep",
      "royalroad",
      "sakuranovel",
      "searchcode",
      "searchthatsong",
      "shinigami",
      "soundcloud",
      "soundmeme",
      "spotify",
      "spotplay",
      "stikerwa",
      "tenor",
      "tiktok",
      "tiktokfoto",
      "tiktoksc",
      "tokopedia",
      "ttsearch",
      "uptodown",
      "wattpadsearch",
      "webton",
      "wiki",
      "wikipedia",
      "yts"
    ]
  },
  "STICKER": {
    "emoji": "🎨",
    "commands": [
      "animebrat",
      "attp",
      "attp2",
      "brat",
      "bratanime",
      "bratbahlil",
      "bratcewek",
      "bratextra",
      "bratgreen",
      "bratgura",
      "bratlocal",
      "bratpatrick",
      "bratsquidward",
      "bratvid",
      "bratvid2",
      "bratwhite",
      "emojimix",
      "fstik",
      "kannabrat",
      "linesticker",
      "megami",
      "pack",
      "pinpack",
      "qc",
      "search",
      "smeme-animated",
      "smeme",
      "smemevid",
      "sticker",
      "stickerly",
      "stickerpack",
      "stickerpackpin",
      "swm",
      "telestick",
      "toimg",
      "tovideo",
      "ttp",
      "vn"
    ]
  },
  "MEDIA": {
    "emoji": "🎬",
    "commands": [
      "audio-effect",
      "mengkane",
      "music",
      "setaudio"
    ]
  },
  "AI": {
    "emoji": "🤖",
    "commands": [
      "age-detection",
      "ai-leaderboard",
      "ai-models",
      "ai",
      "aifilter",
      "aisantai",
      "alya",
      "anime-gen",
      "artaai",
      "asyntai",
      "bard",
      "bocchi",
      "channel-tools",
      "characterai",
      "claudehaiku",
      "copilot",
      "deepseek",
      "dolphin",
      "dpsteai",
      "editimg2",
      "elaina",
      "epsilon",
      "faceswap",
      "feelbetter",
      "felo",
      "flux",
      "furina",
      "gem",
      "gita",
      "glm4",
      "gpt2image",
      "gpt4o",
      "gpt5",
      "gptprompt",
      "hoshino",
      "humanizer",
      "hutao",
      "img2vid",
      "imgprompt",
      "jeeves",
      "jokowi-ai",
      "kimi-vision",
      "kimi",
      "kita",
      "kobo-ai",
      "kurumi",
      "lobbyff",
      "luffy_ai",
      "mahiru",
      "makima",
      "matematika",
      "megaai",
      "megumin",
      "mikasa",
      "miku",
      "mistralai",
      "musicmaker",
      "muslimai",
      "nano",
      "nanobana",
      "nanobanana",
      "nanobananapro",
      "nanoedit",
      "nijika",
      "oguricap",
      "openai",
      "opennana",
      "perplexity",
      "powerbrain",
      "prabowo-ai",
      "public",
      "quilbot",
      "quillbot",
      "quillbotai",
      "qwen3",
      "realtime",
      "rimuru-ai",
      "rimurubanana",
      "rimurubanana2",
      "roboguru",
      "simi",
      "smith",
      "sologo",
      "sora2",
      "talkingphoto",
      "text2img",
      "text2img2",
      "to3d",
      "toanime",
      "toblack",
      "tocartoon",
      "tocermin",
      "tochibi",
      "toemotebatu",
      "tofigure",
      "tofigurev2",
      "tofigurine",
      "toghibli",
      "tohijab",
      "toisland",
      "tojapanese",
      "tomanga",
      "tomekah",
      "tooilpainting",
      "txt2img",
      "txt2img2",
      "waguri-ai",
      "waguri",
      "wormgpt",
      "xterm-ai",
      "zeta"
    ]
  },
  "GROUP": {
    "emoji": "👥",
    "commands": [
      "absen",
      "acc",
      "add",
      "addantilink",
      "addcmdsticker",
      "addlist",
      "addtoxic",
      "afk",
      "antibot",
      "anticulik",
      "anticustom",
      "antidana",
      "antidocument",
      "antiflood",
      "antihidetag",
      "antijudol",
      "antiklinkch",
      "antilink",
      "antilinkall",
      "antilinkgc",
      "antilinkkick",
      "antimedia",
      "antiphising",
      "antiremove",
      "antispam",
      "antisticker",
      "antiswgc",
      "antitagsw",
      "antitoxic",
      "antivirtex",
      "autoai",
      "autodl",
      "autoforward",
      "automedia",
      "autoreply",
      "autosticker",
      "banchat",
      "botmode",
      "cekabsen",
      "cekasalmember",
      "cekidgc",
      "cekonline",
      "cekononlyadmin",
      "checksewa",
      "clearchat",
      "close",
      "delantilink",
      "delete",
      "delppgc",
      "delstickercmd",
      "deltoxic",
      "demote",
      "extra-admin",
      "game",
      "getpp",
      "getppgc",
      "giveaway",
      "goodbye",
      "groupinfo",
      "groupsecurity",
      "groupstats",
      "hapusabsen",
      "hidetag",
      "hidetag2",
      "ht",
      "htpremium",
      "info",
      "intro",
      "jadwalgroup",
      "kick-all-member",
      "kick",
      "link",
      "linkgc",
      "listadmin",
      "listafk",
      "listantilink",
      "listmember",
      "listtoxic",
      "listwarn",
      "mulaiabsen",
      "mute",
      "mutegc",
      "mutemember",
      "notifclosegroup",
      "notifdemote",
      "notifgantitag",
      "notifopengroup",
      "notifpromote",
      "notifsholat",
      "ocgc",
      "open",
      "opentime",
      "openvo",
      "pinchat",
      "poll",
      "polling",
      "promote",
      "publicthisgc",
      "resetgoodbye",
      "resetintro",
      "resetlinkgc",
      "resetrulesgrup",
      "resetwarn",
      "resetwelcome",
      "risetsider",
      "rpg",
      "rulesgrup",
      "selfthisgc",
      "setantilinkkick",
      "setbye",
      "setdeskgc",
      "setgoodbye",
      "setintro",
      "setnamegc",
      "setppgc",
      "setrulesgrup",
      "settings",
      "setwelcome",
      "setwelcomebg",
      "sider",
      "slowmode",
      "spamtag",
      "swapadmin",
      "tagadmin",
      "tagall",
      "tagsw",
      "tam",
      "topchat",
      "totag",
      "totalchat",
      "totalpesan",
      "tutupjam-bukajam",
      "unmute",
      "unmutegc",
      "unmutemember",
      "upsw",
      "warn",
      "welcome"
    ]
  },
  "RELIGI": {
    "emoji": "🌙",
    "commands": [
      "asmaulhusna",
      "audioquran",
      "autosahur",
      "bacaansholat",
      "islami",
      "jadwalsholat",
      "renungan"
    ]
  },
  "INFO": {
    "emoji": "ℹ️",
    "commands": [
      "benefitpartner",
      "berita",
      "bluearchive-char",
      "bmkggempa",
      "buildml",
      "callingcode",
      "dash",
      "fiturpremium",
      "gag",
      "gag2",
      "gagwatch",
      "gempa",
      "gunungapi",
      "harilibur",
      "hok",
      "howmuchenergy",
      "infogempa",
      "infotourney",
      "jadwalbola",
      "landsat",
      "lapor",
      "levelup",
      "listheroml",
      "livescore",
      "market",
      "ml",
      "profile",
      "runtime",
      "script",
      "totalfitur",
      "totalfitur2",
      "totalmenu",
      "tqto",
      "whatrolethis",
      "wwchar",
      "cping",
      "listallcase",
      "listallplugin"
    ]
  },
  "CEK": {
    "emoji": "🔎",
    "commands": [
      "cekbaik",
      "cekberat",
      "cekbucin",
      "cekcantik",
      "cekcreative",
      "cekcupu",
      "cekfemboy",
      "cekgabut",
      "cekgacha",
      "cekgamer",
      "cekganteng",
      "cekgila",
      "cekhoki",
      "cekimut",
      "cekintrovert",
      "cekjahat",
      "cekjodoh",
      "cekjomblo",
      "cekkarma",
      "cekkaya",
      "cekkece",
      "cekkepribadian",
      "cekkpopers",
      "ceklapar",
      "cekmalas",
      "cekmesum",
      "cekngantuk",
      "cekotaku",
      "cekoverpower",
      "cekowner",
      "cekpartner",
      "cekpelit",
      "cekpintar",
      "cekprem",
      "cekprocastinator",
      "cekpsikopat",
      "cekrezeki",
      "ceksabar",
      "ceksetia",
      "ceksexy",
      "ceksial",
      "ceksisaumur",
      "ceksocmed",
      "cektinggi",
      "cektsundere",
      "cekumur",
      "cekwibu",
      "cekyandere"
    ]
  },
  "ECONOMY": {
    "emoji": "💰",
    "commands": [
      "ceksn",
      "leaderboardorkay",
      "leaderboardorkismin",
      "primeff",
      "riyal",
      "topcurrency",
      "yen"
    ]
  },
  "USER": {
    "emoji": "👤",
    "commands": [
      "bataldaftar",
      "birthday",
      "birthdaylist",
      "buyenergi",
      "buyfitur",
      "daftar",
      "daily",
      "energi",
      "exp",
      "hastag",
      "koin",
      "level",
      "levelup",
      "listdaftar",
      "notiflimit",
      "profile",
      "referal",
      "setbirthday",
      "unreg"
    ]
  },
  "CANVAS": {
    "emoji": "🖼️",
    "commands": [
      "afinitasml",
      "afinitasml2",
      "angelnick",
      "applemusic",
      "balogo",
      "basket",
      "boardingpass",
      "buatquotes",
      "codesnap",
      "cyberspider",
      "darkangel",
      "darkness",
      "dbmeme",
      "drakememe",
      "dymc",
      "ektp",
      "facepalm",
      "fakeatm",
      "fakebankjago",
      "fakecall",
      "fakedana",
      "fakedev",
      "fakedev2",
      "fakedev3",
      "fakedev4",
      "fakedev7",
      "fakedj",
      "fakefbkomen",
      "fakeff",
      "fakeff2",
      "fakeffduo",
      "fakegopay",
      "fakeidcard",
      "fakeijazah",
      "fakeijin",
      "fakekarcis",
      "fakekatubelajat",
      "fakeml",
      "fakengl",
      "fakenikah",
      "fakenotifwa",
      "fakeovo",
      "fakepaspor",
      "fakesertifikat",
      "fakesp",
      "fakestory",
      "fakestory2",
      "fakestory3",
      "fakestory4",
      "faketiket",
      "fakewa",
      "fakexnxx",
      "gen-xnxx",
      "gura",
      "igstory",
      "igstoryimg",
      "img2ios",
      "iqc",
      "iqc2",
      "iqcpink",
      "jail",
      "jmk48",
      "juarabadminton",
      "juaraml",
      "kalender",
      "meme2",
      "meme3",
      "movieposter",
      "musiccard",
      "mvp",
      "nokia",
      "oh-no",
      "p302",
      "pacarsertifikat",
      "pakustad",
      "patrickmeme",
      "profileff",
      "profileig",
      "quoteswindows",
      "ship",
      "spongebob",
      "sroast",
      "starboy",
      "susutaro",
      "tarot",
      "tiktokchat",
      "topixel",
      "ttqc",
      "ustadz",
      "wanted",
      "wasted",
      "watercolortext"
    ]
  },
  "RANDOM": {
    "emoji": "🎲",
    "commands": [
      "anime",
      "asupan",
      "bacot",
      "barandom",
      "bucin",
      "cecanchina",
      "cecanindo",
      "cecanjapan",
      "cecanjepang",
      "cecankorea",
      "cecanthai",
      "cecanthailand",
      "cecanvietnam",
      "cosba",
      "couple",
      "dare",
      "husbu",
      "islam",
      "lahelu",
      "meme",
      "memespongbob",
      "pantun",
      "pantun2",
      "papayang",
      "ppcp",
      "quotesimage",
      "randomname",
      "sadboy",
      "superhero",
      "truth"
    ]
  },
  "PREMIUM": {
    "emoji": "⭐",
    "commands": [
      "bataljadibot",
      "newup"
    ]
  },
  "ANIME": {
    "emoji": "⛩️",
    "commands": [
      "anichin",
      "anilist",
      "animedate",
      "animedl",
      "animeimgsearch",
      "animequotes",
      "animereco",
      "animeseason",
      "animetrailer",
      "animewall",
      "anischedule",
      "autoanimechannel",
      "autoanimewinbu",
      "bluearchive",
      "character",
      "eba",
      "fotorandom002",
      "ikiru",
      "imagesearch",
      "info",
      "kasedaiki",
      "komikindo",
      "konachan",
      "kusonime",
      "latest",
      "loli",
      "manga",
      "mobinime",
      "mywaifu",
      "random",
      "rekomanime",
      "shinigamidetail",
      "story-anime",
      "tokusatsu",
      "topanime",
      "waifu_anime",
      "wuwa",
      "yande"
    ]
  },
  "ASUPAN": {
    "emoji": "📱",
    "commands": [
      "asupan",
      "asupantiktok",
      "bocil",
      "santuy",
      "ukhty"
    ]
  },
  "CLAN": {
    "emoji": "🛡️",
    "commands": [
      "clanannounce",
      "clanbank",
      "clanboss",
      "clanceckin",
      "clancreate",
      "clandemote",
      "clandesc",
      "claninfo",
      "claninvite",
      "clanjoin",
      "clanjoinraid",
      "clankick",
      "clanleaderboard",
      "clanleave",
      "clanlevel",
      "clanmembers",
      "clanpromote",
      "clanraid",
      "clanrank",
      "clanraport",
      "clanrename",
      "clanupgrade",
      "clanwar",
      "clanwaraccept",
      "clanwarhistory",
      "clanwarscore",
      "clanxp",
      "logoclan"
    ]
  },
  "COLORGRADE": {
    "emoji": "🌈",
    "commands": [
      "cc1",
      "cc2",
      "cc3"
    ]
  },
  "CONVERT": {
    "emoji": "🔄",
    "commands": [
      "audiofx",
      "tocodeqr"
    ]
  },
  "DOWNLOADER": {
    "emoji": "⬇️",
    "commands": [
      "mcpedldl"
    ]
  },
  "DOWNLOADS": {
    "emoji": "💾",
    "commands": [
      "gimage"
    ]
  },
  "ELAINA": {
    "emoji": "🧙‍♀️",
    "commands": [
      "chatdeepai",
      "faceblur",
      "fakediscord",
      "photooxy",
      "tiklydown"
    ]
  },
  "EPHOTO": {
    "emoji": "📸",
    "commands": [
      "ephoto"
    ]
  },
  "GENERAL": {
    "emoji": "🌐",
    "commands": [
      "alkitab",
      "cuaca",
      "doa",
      "fetch",
      "gimg",
      "github-trend",
      "google-img",
      "infoloker",
      "kbbi",
      "mangga-pop",
      "mcaddons",
      "mcstatus",
      "misteri",
      "mltour",
      "pinvideo",
      "pixiv",
      "playstore",
      "roblox",
      "sapa",
      "surah",
      "Tafsir",
      "telegramch",
      "wordltime"
    ]
  },
  "IMAGE": {
    "emoji": "📷",
    "commands": [
      "iqcv3",
      "uhdpaper",
      "wallpaper",
      "wallsearch"
    ]
  },
  "INTERNET": {
    "emoji": "🌍",
    "commands": [
      "dongeng",
      "fdroid",
      "wallpaper"
    ]
  },
  "ISLAMIC": {
    "emoji": "🕌",
    "commands": [
      "ayat-kursi",
      "ayat",
      "hijrah",
      "istighfar",
      "istikharah",
      "kisahnabi",
      "mandiwajib",
      "murotal",
      "murrotal",
      "nisfusyaban",
      "puasa",
      "quran",
      "rajab",
      "ramadhan2027",
      "sholawat",
      "tafsirmimpi",
      "tahlil",
      "taubat",
      "zikir"
    ]
  },
  "JPM": {
    "emoji": "📢",
    "commands": [
      "jpm",
      "jpmalbum",
      "jpmbasic",
      "stopjpmbasic"
    ]
  },
  "MAKER": {
    "emoji": "✂️",
    "commands": [
      "appmaker",
      "bratspongebob",
      "carbonlocal",
      "cewekbrat",
      "cinematic",
      "codesnap",
      "fakebca",
      "fakeboard",
      "fakebook",
      "fakech",
      "fakediscoard",
      "fakeff",
      "fakeff3",
      "fakegroup",
      "fakegroupv2",
      "fakeigprofile",
      "fakeigstory",
      "fakeml",
      "fakeml2",
      "fakenote",
      "fakestory",
      "faketele",
      "faketiktok",
      "fakett",
      "faketweet",
      "fakewa",
      "fakewafat",
      "hangingpolaroid",
      "hitamkan",
      "hotline",
      "igqc",
      "iqc",
      "iqc2",
      "iqc3",
      "iqc4",
      "iqc5",
      "jarvis",
      "logo3d",
      "logoglow",
      "logogold",
      "logometal",
      "pinkgreen",
      "quotecard",
      "quotephoto",
      "sertifikatcinta",
      "sertifikatlemot",
      "sertifikatnasa",
      "sertifitolol",
      "textlogo",
      "toblonde",
      "wanted",
      "wmp1",
      "wmp2",
      "xterm-maker"
    ]
  },
  "MEGAMI": {
    "emoji": "✨",
    "commands": [
      "hd2"
    ]
  },
  "MUSIC": {
    "emoji": "🎵",
    "commands": [
      "lirik",
      "play2",
      "play3",
      "playch",
      "playncs",
      "playzero",
      "ringtone",
      "sound-sad"
    ]
  },
  "OTHER": {
    "emoji": "📦",
    "commands": [
      "tebakejenali"
    ]
  },
  "PRIMBON": {
    "emoji": "🔮",
    "commands": [
      "artinama",
      "kecocokannamapasangan",
      "nomerhoki",
      "potensipenyakit",
      "ramalanjodoh",
      "sifatusahabisnis",
      "tafsirmimpi",
      "zodiak"
    ]
  },
  "QUOTES": {
    "emoji": "💬",
    "commands": [
      "katakata",
      "quotefilsuf",
      "quotetokoh"
    ]
  },
  "RIOO": {
    "emoji": "💎",
    "commands": [
      "blackbox",
      "chess",
      "nguli",
      "otp",
      "tebakangka"
    ]
  },
  "RPG": {
    "emoji": "⚔️",
    "commands": [
      "addexp",
      "addmoney",
      "adventure",
      "airdrop",
      "akuntt",
      "akunyt",
      "alchemy",
      "arena",
      "atm",
      "bank-nabung",
      "bank",
      "bankcek",
      "banktarik",
      "bansos",
      "beg",
      "berburu",
      "berdagang",
      "berkebun",
      "berladang",
      "blacksmith",
      "boss",
      "bossbattle",
      "breeding",
      "buy",
      "buykoin",
      "cafe",
      "casino",
      "ceklevel",
      "challenge",
      "claim",
      "coinflip",
      "collect",
      "cook",
      "cooking",
      "craft",
      "createakunyt",
      "creatett",
      "crime",
      "daily",
      "deps",
      "dice",
      "divorce",
      "duel",
      "dungeon",
      "enchant",
      "ewe",
      "ewepaksa",
      "expedition",
      "extra",
      "fightnaga",
      "fishing",
      "freelance",
      "freelimit",
      "gajian",
      "garden",
      "gift",
      "grab",
      "guild",
      "heal",
      "hero",
      "hitman",
      "hourly",
      "hunt",
      "inventory",
      "jadian",
      "jadian2",
      "jual",
      "jualan",
      "kandang",
      "karung",
      "kerja",
      "koboy",
      "kurir",
      "leaderboard",
      "leveluprpg",
      "livett",
      "lottery",
      "maling",
      "mancing",
      "marketplace",
      "marry",
      "masak",
      "meditation",
      "membunuh",
      "merampok",
      "merchant",
      "minecraftbattle",
      "mining",
      "misi",
      "monthly",
      "mulai",
      "mulung",
      "nambalban",
      "ngamen",
      "ngemis",
      "ngojek",
      "nulis",
      "nyapu",
      "open",
      "parkir",
      "pasar",
      "pelabuhan",
      "penjara",
      "pet",
      "petshop",
      "phonix",
      "pointxp",
      "polisi",
      "quest",
      "ramadhan",
      "ramuan",
      "reedem",
      "resetbansos",
      "rob",
      "roket",
      "rpg",
      "sawer",
      "sellall",
      "shop",
      "simulator",
      "skill",
      "slot",
      "slotui",
      "stamina",
      "steal",
      "streamer",
      "taxy",
      "training",
      "transfer",
      "treasure",
      "upgrade",
      "use",
      "weekly",
      "woodcut",
      "work"
    ]
  },
  "STALKER": {
    "emoji": "🕵️",
    "commands": [
      "countrystalk",
      "discordstalk",
      "ff",
      "ffstalk",
      "genshinstalk",
      "github",
      "githubstalk",
      "igstalk",
      "npmstalk",
      "pintereststalk",
      "roblox",
      "robloxplayer",
      "robloxstalk",
      "stalkdc",
      "stalkml",
      "tiktokstalk",
      "ttstalk",
      "twitter",
      "wastalk",
      "ytstalk"
    ]
  },
  "STORE_AUTOORDER": {
    "emoji": "🛒",
    "commands": [
      "addstok",
      "beli",
      "cekstok",
      "hapusproduk",
      "hapusstok",
      "kurangisaldo",
      "listproduk",
      "saldoku",
      "tambahproduk",
      "tambahsaldo",
      "topupsaldo"
    ]
  },
  "TTS": {
    "emoji": "🗣️",
    "commands": [
      "anime",
      "holotts",
      "nahida",
      "ondoku",
      "tts",
      "ttsai",
      "ttselon",
      "ttseminem",
      "ttsgoku",
      "ttsmickey",
      "ttsnahida"
    ]
  },
  "VPS": {
    "emoji": "🖥️",
    "commands": [
      "cekvps",
      "createvps",
      "delvps",
      "listvps",
      "sisavps",
      "vpskontrol"
    ]
  },
  /*
  // =====================================================================
  // KATEGORI NSFW DI-NONAKTIFKAN (DIKOMENTARI)
  // Untuk mengaktifkannya kembali, hapus tanda komentar pembuka dan penutup:
  // =====================================================================
  "NSFW": {
    "emoji": "🔞",
    "commands": [
      "hentaivid",
      "nsfw",
      "paptt"
    ]
  },
  */
};

// 3. STATE MANAJEMEN
let selectedBotIndex = 0;
try {
  const saved = localStorage.getItem('rimuru_selected_bot');
  if (saved !== null && !isNaN(parseInt(saved)) && BOTS[parseInt(saved)]) {
    selectedBotIndex = parseInt(saved);
  }
} catch (e) {
  selectedBotIndex = 0;
}

let activeCategory = 'ALL';
let searchQuery = '';
let searchDebounce = null;
const collapsedCategories = new Set();

// 4. HELPER UTILS
function normalizeNumber(num) {
  let clean = String(num || '').replace(/[^0-9]/g, '');
  if (clean.startsWith('0')) clean = '62' + clean.slice(1);
  return clean;
}

function formatPhoneDisplay(num) {
  const n = normalizeNumber(num);
  if (n.startsWith('62') && n.length >= 11) {
    return '+62 ' + n.slice(2, 5) + '-' + n.slice(5, 9) + '-' + n.slice(9);
  }
  return '+' + n;
}

function getSelectedBot() {
  return BOTS[selectedBotIndex] || BOTS[0];
}

function createWaUrl(number, message = '.menu') {
  const clean = normalizeNumber(number);
  return 'https://wa.me/' + clean + '?text=' + encodeURIComponent(message);
}

// 5. TOAST NOTIFICATION
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;

  const icon = type === 'success' ? '✓' : 'ℹ';
  toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span class="toast-msg">' + message + '</span>';

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 2200);
}

// 6. COPY TO CLIPBOARD
async function copyText(text, label = text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    showToast('Perintah <strong>' + label + '</strong> disalin ke clipboard!');
    return true;
  } catch (err) {
    showToast('Gagal menyalin teks', 'error');
    return false;
  }
}

// 7. RENDER DAFTAR BOT
function updateFloatingWa() {
  const bot = getSelectedBot();
  const floatingBtn = document.getElementById('floatingWaBtn');
  if (floatingBtn && bot) {
    floatingBtn.href = createWaUrl(bot.number, '.menu');
    floatingBtn.title = 'Chat WhatsApp (' + bot.name + ' - ' + bot.tag + ')';
  }
}

function renderBotsList() {
  const container = document.getElementById('botListContainer');
  if (!container) return;

  container.innerHTML = '';
  BOTS.forEach((bot, idx) => {
    const isSelected = idx === selectedBotIndex;
    const card = document.createElement('div');
    card.className = 'bot-item-card' + (isSelected ? ' is-selected' : '');

    const waLink = createWaUrl(bot.number, '.menu');
    const avatarGradients = [
      'linear-gradient(135deg, #10b981, #06b6d4)',
      'linear-gradient(135deg, #06b6d4, #6366f1)',
      'linear-gradient(135deg, #8b5cf6, #ec4899)',
      'linear-gradient(135deg, #f59e0b, #ef4444)'
    ];
    const grad = avatarGradients[idx % avatarGradients.length];

    card.innerHTML = `
      <div class="bot-item-left" data-action="select" data-idx="${idx}">
        <div class="bot-item-radio">
          <span class="radio-circle ${isSelected ? 'checked' : ''}"></span>
        </div>
        <div class="bot-avatar" style="background: ${grad};">
          <span>${bot.name.charAt(0)}</span>
        </div>
        <div class="bot-info-meta">
          <div class="bot-name-line">
            <strong class="bot-title">${bot.name}</strong>
            <span class="bot-server-tag">${bot.tag}</span>
            ${isSelected ? '<span class="bot-selected-pill">Selected</span>' : ''}
          </div>
          <div class="bot-number-text">${formatPhoneDisplay(bot.number)}</div>
        </div>
      </div>
      <div class="bot-item-actions">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-item-wa" title="Chat WhatsApp dengan ${bot.name}">
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.54 1.55 2.4 3.6 2.4 5.79 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
          </svg>
          <span>Chat</span>
        </a>
      </div>
    `;

    card.querySelector('[data-action="select"]').addEventListener('click', () => {
      selectBot(idx);
    });

    container.appendChild(card);
  });

  updateFloatingWa();
}

function selectBot(idx) {
  if (idx < 0 || idx >= BOTS.length) return;
  selectedBotIndex = idx;
  try {
    localStorage.setItem('rimuru_selected_bot', String(idx));
  } catch (e) { }

  renderBotsList();
  renderMenu();
  showToast('Bot target dipilih: <strong>' + BOTS[idx].name + ' (' + BOTS[idx].tag + ')</strong>');
}

// 8. RENDER CHIPS & DROPDOWN FILTER KATEGORI
function setupCategoriesFilter() {
  const selectEl = document.getElementById('categorySelect');
  const chipsScroll = document.getElementById('chipsScrollArea');

  if (selectEl) {
    const totalCats = Object.keys(MENU).length;
    selectEl.innerHTML = '<option value="ALL">Semua Kategori (' + totalCats + ')</option>';
    for (const [cat, data] of Object.entries(MENU)) {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = `${data.emoji} ${cat} (${data.commands.length})`;
      selectEl.appendChild(opt);
    }

    selectEl.addEventListener('change', (e) => {
      setCategory(e.target.value);
    });
  }

  if (chipsScroll) {
    renderChips();
  }
}

function renderChips() {
  const chipsScroll = document.getElementById('chipsScrollArea');
  if (!chipsScroll) return;

  chipsScroll.innerHTML = '';

  let totalAll = 0;
  for (const k in MENU) totalAll += MENU[k].commands.length;

  const allCategories = ['ALL', ...Object.keys(MENU)];

  allCategories.forEach((cat) => {
    const isAll = cat === 'ALL';
    const count = isAll ? totalAll : MENU[cat].commands.length;
    const emoji = isAll ? '🌟' : MENU[cat].emoji;
    const label = isAll ? 'Semua' : cat;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-chip' + (activeCategory === cat ? ' active' : '');
    btn.innerHTML = `
      <span class="chip-emoji">${emoji}</span>
      <span class="chip-name">${label}</span>
      <span class="chip-count">${count}</span>
    `;

    btn.addEventListener('click', () => {
      setCategory(cat);
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });

    chipsScroll.appendChild(btn);
  });
}

function setCategory(cat) {
  activeCategory = cat;

  const selectEl = document.getElementById('categorySelect');
  if (selectEl && selectEl.value !== cat) {
    selectEl.value = cat;
  }

  document.querySelectorAll('.filter-chip').forEach((c) => {
    const chipName = c.querySelector('.chip-name')?.textContent;
    const isMatch = (cat === 'ALL' && chipName === 'Semua') || chipName === cat;
    c.classList.toggle('active', isMatch);
  });

  const filterBadge = document.getElementById('activeFilterBadge');
  if (filterBadge) {
    if (cat !== 'ALL') {
      filterBadge.textContent = 'Kategori: ' + cat;
      filterBadge.style.display = 'inline-flex';
    } else {
      filterBadge.style.display = 'none';
    }
  }

  renderMenu();
}

// 9. RENDER MENU COMMANDS
function renderMenu() {
  const container = document.getElementById('categoriesContainer');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('displayedCount');
  if (!container) return;

  container.innerHTML = '';
  const q = searchQuery.trim().toLowerCase();
  const currentBot = getSelectedBot();

  let totalMatches = 0;
  let categoryMatches = 0;

  for (const [catName, catData] of Object.entries(MENU)) {
    if (activeCategory !== 'ALL' && activeCategory !== catName) continue;

    const filteredCommands = q
      ? catData.commands.filter(cmd => cmd.toLowerCase().includes(q))
      : catData.commands;

    if (filteredCommands.length === 0) continue;

    categoryMatches++;
    totalMatches += filteredCommands.length;

    const isCollapsed = collapsedCategories.has(catName);

    const catCard = document.createElement('section');
    catCard.className = 'category-group' + (isCollapsed ? ' is-collapsed' : '');
    catCard.id = 'cat-' + catName.toLowerCase();

    const catHead = document.createElement('div');
    catHead.className = 'category-header';
    catHead.innerHTML = `
      <div class="cat-header-left">
        <span class="cat-icon-badge">${catData.emoji}</span>
        <div class="cat-title-wrap">
          <h2 class="cat-title-text">${catName}</h2>
          <span class="cat-subtitle">${filteredCommands.length} perintah ${q ? 'ditemukan' : 'tersedia'}</span>
        </div>
      </div>
      <div class="cat-header-right">
        <span class="cat-pill-count">${filteredCommands.length}</span>
        <button type="button" class="cat-toggle-btn" aria-label="Buka atau tutup kategori ${catName}">
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    `;

    catHead.addEventListener('click', (e) => {
      if (collapsedCategories.has(catName)) {
        collapsedCategories.delete(catName);
        catCard.classList.remove('is-collapsed');
      } else {
        collapsedCategories.add(catName);
        catCard.classList.add('is-collapsed');
      }
    });

    const catBody = document.createElement('div');
    catBody.className = 'category-body';

    const grid = document.createElement('div');
    grid.className = 'commands-grid';

    filteredCommands.forEach((cmd) => {
      const fullCmd = '.' + cmd;
      const cmdItem = document.createElement('div');
      cmdItem.className = 'command-item';
      cmdItem.title = 'Klik untuk salin ' + fullCmd;

      const cmdWaLink = createWaUrl(currentBot.number, fullCmd);

      cmdItem.innerHTML = `
        <div class="command-main-btn" data-action="copy" data-cmd="${fullCmd}">
          <span class="cmd-dot">.</span>
          <span class="cmd-name">${cmd}</span>
          <span class="cmd-action-hint">
            <svg class="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="hint-text">Copy</span>
          </span>
        </div>
        <a href="${cmdWaLink}" target="_blank" rel="noopener noreferrer" class="cmd-send-wa" title="Kirim ${fullCmd} ke ${currentBot.name}" aria-label="Kirim ke WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.54 1.55 2.4 3.6 2.4 5.79 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
          </svg>
        </a>
      `;

      const copyBtn = cmdItem.querySelector('[data-action="copy"]');
      copyBtn.addEventListener('click', async () => {
        const ok = await copyText(fullCmd);
        if (ok) {
          cmdItem.classList.add('copied');
          const hint = cmdItem.querySelector('.hint-text');
          if (hint) hint.textContent = 'Tersalin!';
          setTimeout(() => {
            cmdItem.classList.remove('copied');
            if (hint) hint.textContent = 'Copy';
          }, 1200);
        }
      });

      grid.appendChild(cmdItem);
    });

    catBody.appendChild(grid);
    catCard.appendChild(catHead);
    catCard.appendChild(catBody);
    container.appendChild(catCard);
  }

  if (countEl) countEl.textContent = totalMatches.toLocaleString('id-ID');

  if (emptyState) {
    emptyState.style.display = totalMatches === 0 ? 'block' : 'none';
  }
}

// 10. SETUP SEARCH & INPUT LISTENERS
function setupSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const resetBtn = document.getElementById('resetFilterBtn');

  if (!input) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value;
    searchQuery = val;
    if (clearBtn) {
      clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
    }

    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      renderMenu();
    }, 60);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      input.focus();
      renderMenu();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      input.value = '';
      searchQuery = '';
      if (clearBtn) clearBtn.style.display = 'none';
      setCategory('ALL');
      input.focus();
    });
  }

  // Shortcut Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
}

// 11. EXPAND / COLLAPSE ALL
function setupExpandCollapse() {
  const expandBtn = document.getElementById('expandAllBtn');
  const collapseBtn = document.getElementById('collapseAllBtn');

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      collapsedCategories.clear();
      document.querySelectorAll('.category-group').forEach((g) => {
        g.classList.remove('is-collapsed');
      });
      showToast('Semua kategori dibuka');
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      for (const k in MENU) {
        collapsedCategories.add(k);
      }
      document.querySelectorAll('.category-group').forEach((g) => {
        g.classList.add('is-collapsed');
      });
      showToast('Semua kategori ditutup');
    });
  }
}

// 12. MOBILE NAVIGATION TABS
function setupMobileNav() {
  const tabButtons = document.querySelectorAll('.mobile-nav-bar .tab-btn');
  const layout = document.getElementById('layoutContainer');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (layout) {
        layout.setAttribute('data-mobile-view', tab);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// 13. BACK TO TOP BUTTON
function setupBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 14. INITIALIZATION
function initApp() {
  let totalCommands = 0;
  for (const k in MENU) {
    totalCommands += MENU[k].commands.length;
  }
  const totalCats = Object.keys(MENU).length;

  const statCmd = document.getElementById('statTotalCommands');
  const statCat = document.getElementById('statTotalCategories');
  const totalFeatureCount = document.getElementById('totalFeatureCount');
  const tabCmdCount = document.getElementById('tabCmdCount');
  const botBadgeCount = document.getElementById('botBadgeCount');
  const tabBotCount = document.getElementById('tabBotCount');

  const formattedTotal = totalCommands.toLocaleString('id-ID');
  if (statCmd) statCmd.textContent = formattedTotal;
  if (statCat) statCat.textContent = totalCats;
  if (totalFeatureCount) totalFeatureCount.textContent = formattedTotal;
  if (tabCmdCount) tabCmdCount.textContent = formattedTotal;
  if (botBadgeCount) botBadgeCount.textContent = BOTS.length + ' Bot';
  if (tabBotCount) tabBotCount.textContent = BOTS.length;

  renderBotsList();
  setupCategoriesFilter();
  setupSearch();
  setupExpandCollapse();
  setupMobileNav();
  setupBackToTop();
  renderMenu();

  console.log('Rimuru-MD Dashboard loaded successfully with', totalCats, 'categories and', totalCommands, 'commands.');
}

document.addEventListener('DOMContentLoaded', initApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
}
