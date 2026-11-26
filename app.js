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
    tag: ''
   },  
  // {
  //   name: 'Exodus',
  //   number: '6285111347385',
  //   tag: ''
  //  }
  //  {
  //  name: 'Antrax',
  //  number: '62881027926259',
  //  tag: 'SF1'
  // }
  
  // {
  //  name: 'Alya',
  //  number: '6285136816242',
  //  tag: 'BYU2'
  // }
  
  // {
  //   name: 'Vandebry',
  //   number: '51901677155',
  //   tag: 'PERU'
  // }
  
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
      "allmenu",
      "bataljadibot",
      "benefitowner",
      "benefitpremium",
      "buypanel",
      "carifitur",
      "creator2",
      "credit",
      "daftar",
      "dashboard",
      "donasi",
      "enable",
      "gbbot",
      "hargabot",
      "hargapanel",
      "help",
      "jadian",
      "jadibot",
      "leaderboard",
      "menu",
      "menucat",
      "owner",
      "ping",
      "ping2",
      "rules",
      "saluran",
      "sc",
      "seleksif02",
      "sewa",
      "sewa2",
      "stats",
      "stopjadibot",
      "system",
      "test",
      "totalfitur",
      "tqto2",
      "usercard"
    ]
  },
  "UTILITY": {
    "emoji": "🛠️",
    "commands": [
      "inspect",
      "remind"
    ]
  },
  "TOOLS": {
    "emoji": "🔧",
    "commands": [
      "aislop",
      "alultimate",
      "bandingkan-hp",
      "barcode",
      "bicolink",
      "biner",
      "bitly",
      "blurface",
      "breach",
      "bypass",
      "calc",
      "carbon",
      "caribug",
      "catbox",
      "ccgen",
      "cekidch",
      "cekidgc",
      "cekml",
      "ceknamadana",
      "cekplat",
      "cekrek",
      "cekresi",
      "cekxl",
      "checkhost",
      "cjstoesm",
      "collatz",
      "colongsw",
      "compresspdf",
      "cuaca",
      "dafont",
      "dbinary",
      "debiner",
      "delpp",
      "ebinary",
      "ekspedisilist",
      "emojitoanimasi",
      "emojitoimage",
      "encode",
      "encrypt",
      "enlargerai",
      "esmtocjs",
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
      "ghuser",
      "grammarly",
      "grepplugin",
      "gsmarena",
      "gsmarena2",
      "hapuswm",
      "hd2",
      "hd3",
      "hd4",
      "hd5",
      "hd8",
      "hdvideo2",
      "hitungwrmlbb",
      "hostmedia",
      "imagetoasci",
      "imgtools",
      "imgtoprompt",
      "inspect",
      "invoicemaker",
      "ip",
      "ipwho",
      "izen",
      "jadwaltv",
      "jarak",
      "jjcapcut",
      "jne",
      "kalkulatormbg",
      "kamusdaerah",
      "kirimpesangc",
      "kodepos",
      "linkid",
      "linkvertise",
      "lookup",
      "mcstalk",
      "mcstatus",
      "mikutalk",
      "musikapaini",
      "myip",
      "netprem",
      "nftools",
      "nik",
      "nikparser",
      "npmdl",
      "npmshield",
      "nulis",
      "objectdetection",
      "ocr",
      "ouo",
      "pastebin",
      "pddikti",
      "phisingataubukan",
      "pomodoro",
      "preset",
      "promptcode",
      "proxy",
      "ptv",
      "q",
      "qrcodefile",
      "qrcustom",
      "qwa",
      "randomname",
      "rch",
      "reactch",
      "readmore",
      "readqr",
      "remind",
      "remini",
      "removebg",
      "removewm",
      "resize",
      "resizevideo",
      "s2c",
      "scanrepo",
      "searchcode",
      "searchgist",
      "sendngl",
      "setbio",
      "setname",
      "setpp",
      "shareteks",
      "shzupload",
      "spamngl",
      "speedbot",
      "speedtest",
      "spotivid",
      "ssdesktop",
      "sstablet",
      "ssweb",
      "struk",
      "styleteks",
      "subdo",
      "subs4unlock",
      "suppbypass",
      "tebalteks",
      "tempmail",
      "tesautopostch",
      "time",
      "timeis",
      "tinypng",
      "toaudio",
      "tocodeqr",
      "toesm",
      "toimg",
      "tomp3",
      "tourl",
      "tovideo",
      "tovn",
      "transkrip",
      "translate",
      "turnitin",
      "tweetss",
      "txt2qr",
      "uguu",
      "upch2",
      "upload",
      "upvidey",
      "usernamegen",
      "vgist",
      "videotranscribe",
      "vocalcut",
      "vocalremover",
      "weather",
      "web2zip",
      "whatmusic",
      "wisedetail",
      "worldtime"
    ]
  },
  "FUN": {
    "emoji": "🎭",
    "commands": [
      "akankah",
      "alay",
      "angka",
      "apakah",
      "ara",
      "artinama2",
      "autorimuru",
      "bagaimana",
      "bego",
      "benarkah",
      "berapa",
      "bisakah",
      "bucin",
      "burik",
      "cantikcek",
      "cekfemboy",
      "cekkhodam",
      "cekkontol",
      "cekmemek",
      "cekotot",
      "cekpacar",
      "cekperforma",
      "cektt",
      "coba",
      "confess",
      "dare",
      "dimana",
      "dimanakah",
      "fakechat",
      "fuckmylife",
      "gachabini",
      "gachafemboy",
      "gachahusbu",
      "gachanasip",
      "gachatomboy",
      "gachawaifu",
      "gay",
      "goblokcek",
      "gquote",
      "halah",
      "haruskah",
      "jodoh",
      "jomok",
      "kapan",
      "kapankah",
      "kematian",
      "kerang",
      "lifefact",
      "lupakan",
      "mengapa",
      "mimpi",
      "mimpi2",
      "morse",
      "moveon",
      "pakustad",
      "puisi",
      "putus",
      "ramal",
      "rate",
      "renungan",
      "sapa",
      "seberapagila",
      "senja",
      "sertifikatlemot",
      "simi",
      "simi2",
      "sipaling",
      "soulmatch",
      "sulap",
      "suratcinta",
      "tarot",
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
      "akunyt",
      "angrybirds",
      "asahotak",
      "attack",
      "balap",
      "benaratausalah",
      "blackjack",
      "bomb",
      "breakout",
      "caklontong",
      "catur",
      "cerdascermat",
      "checkers",
      "colorblock",
      "createakun",
      "dino",
      "dungeon",
      "family100",
      "fightnaga",
      "fisht",
      "flappy",
      "genshinprofile",
      "hangman",
      "kataacak",
      "kuis",
      "kyubigame",
      "lengkapikalimat",
      "listhero",
      "mahjong",
      "maths",
      "mct",
      "memorymatch",
      "mlbb",
      "monopoli",
      "mortalkombat",
      "nixelgames",
      "pacman",
      "pelabuhan",
      "perangsarung",
      "polisi",
      "riddle",
      "rimuru-chess",
      "rimuru-tebakangka",
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
      "susunkata",
      "tebakanime",
      "tebakbendera",
      "tebakbola",
      "tebakdrakor",
      "tebakejenali",
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
      "alightmotiondl",
      "applemusic",
      "bilibili",
      "capcut",
      "capcutdl",
      "cocofundl",
      "dailymotiondl",
      "dlit",
      "dodfav",
      "dood",
      "douyin",
      "douyindl",
      "dramaboxdl",
      "facebook",
      "facebookdl",
      "gdrive",
      "gdrivelegacy",
      "gimage",
      "gitclone",
      "githubdl",
      "igaudio",
      "igdl",
      "igvox",
      "instagram3",
      "instagramdl",
      "likeedl",
      "mcpedldl",
      "mediafire",
      "mediafiredl",
      "mfapi",
      "pindl",
      "pindl2",
      "pixeldraindl",
      "play",
      "play2",
      "playvid",
      "rednotedl",
      "sfile",
      "sfiledl",
      "shopeedl",
      "snackvideodl",
      "soundcloudplay",
      "spotifydl",
      "spotifyplay",
      "terabox",
      "threaddl",
      "tiklydown",
      "tiktok",
      "tiktok2",
      "tiktokmusic",
      "tt",
      "ttalt",
      "ttimg",
      "ttmp3",
      "ttslide",
      "twitter",
      "ucdrivedl",
      "videy",
      "vidoy",
      "wallpaper",
      "xgust",
      "xhs",
      "yt5so",
      "ytdirect",
      "ytmp3",
      "ytmp4",
      "ytplay"
    ]
  },
  "SEARCH": {
    "emoji": "🔍",
    "commands": [
      "advance-comparation",
      "android1",
      "android1-get",
      "anime2",
      "animeapaini",
      "animelink",
      "animesanka",
      "apkcombo",
      "apkmod",
      "apkmod-get",
      "apkpure",
      "apkzoic",
      "applemaps",
      "applemusic",
      "bingimage",
      "botsw",
      "brainly",
      "bstation",
      "carigrup",
      "carimusik",
      "chords",
      "clip",
      "dafont",
      "douyinsearch",
      "dramabox",
      "film",
      "filmget",
      "getmusik",
      "google",
      "googleimg",
      "gsmarena",
      "ikiru",
      "imdb",
      "infoloker",
      "jobstreetsearch",
      "lirik",
      "mangalist",
      "mangaread",
      "mangatoon",
      "mcaddon",
      "mcaddons",
      "mcpedl",
      "meigen",
      "melolo",
      "mltour",
      "movieku",
      "nerdfont-ambil",
      "npm",
      "pap",
      "pin2",
      "pins2",
      "pinvid",
      "pinz",
      "pixiv",
      "play",
      "play2",
      "playcall",
      "playch",
      "playsoundcloud",
      "playstore",
      "playtiktok",
      "playvid",
      "ptvsearch",
      "putar-play",
      "putar-play2",
      "resep",
      "searchthatsong",
      "shinigami",
      "sn",
      "soundcloud",
      "soundmeme-listnama",
      "spekhp",
      "spotify",
      "spotplay",
      "stikerwa",
      "tenor",
      "tgram",
      "tiktokfoto",
      "tiktoksc",
      "tokopedia",
      "toproblox",
      "ttsearch",
      "uptodown",
      "wattpadsearch",
      "webtoonsearch",
      "wiki",
      "wikipedia",
      "yts"
    ]
  },
  "STICKER": {
    "emoji": "🎨",
    "commands": [
      "anticolong",
      "attp",
      "attp2",
      "brat",
      "bratanime",
      "bratbahlil",
      "bratcewek",
      "bratextra",
      "bratgreen",
      "bratgura",
      "bratpatrick",
      "bratsquidward",
      "bratvid",
      "bratvid2",
      "bratwhite",
      "emojimix",
      "kannabrat",
      "linesticker",
      "megami",
      "pack",
      "pinpack",
      "qc",
      "smeme",
      "smeme-animated",
      "smemevid",
      "sticker",
      "stickerly",
      "stickerpack",
      "stickerpackpin",
      "stickersearch",
      "stikerv2",
      "swm",
      "telestick",
      "toimg",
      "tovideo"
    ]
  },
  "MEDIA": {
    "emoji": "🎬",
    "commands": [
      "bass",
      "music"
    ]
  },
  "AI": {
    "emoji": "🤖",
    "commands": [
      "ai",
      "ai-leaderboard",
      "aifilter",
      "airealtime",
      "alya",
      "anime-gen",
      "animediff",
      "artaai",
      "asyntai",
      "bard",
      "character-ai",
      "chatdeepai",
      "claudehaiku",
      "deepseek",
      "dolphin",
      "dpsteai",
      "editimage",
      "editimg2",
      "elainaai",
      "faceswap",
      "feelbetter",
      "felo",
      "flux",
      "furina",
      "gem",
      "gemimg",
      "gita",
      "gpt5",
      "gptprompt",
      "humanize",
      "imgprompt",
      "jeeves",
      "jokowi-ai",
      "kimi-vision",
      "kobo-ai",
      "luffyai",
      "mahiru",
      "makima",
      "matematika",
      "mega",
      "mikasa",
      "musicmaker",
      "muslimai",
      "nano",
      "nanobanana",
      "nanoedit",
      "oguri",
      "opennana",
      "perplexity",
      "powerbrain",
      "prabowo-ai",
      "publicai",
      "quilbot",
      "quillbot",
      "quillbotai",
      "qwen3",
      "rimuru-ai",
      "rimuru-blackbox",
      "rimurubanana",
      "rimurubanana2",
      "simi",
      "sologo",
      "sora2",
      "text2img",
      "text2img2",
      "text2img3",
      "text2img4",
      "toblack",
      "tochibi",
      "toemotebatu",
      "tofigure",
      "tofigurev2",
      "toghibli",
      "tohijab",
      "tojapanese",
      "tomekah",
      "waguri",
      "waguri-ai",
      "webpilot",
      "wormgpt"
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
      "admincount",
      "afk",
      "antibot",
      "anticulik",
      "anticustom",
      "antidana",
      "antidocument",
      "antiflood",
      "antihidetag",
      "antijudol",
      "antilink",
      "antilinkall",
      "antilinkch",
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
      "autosambut",
      "autosticker",
      "banchat",
      "botmode",
      "cekabsen",
      "cekasalmember",
      "cekexpired",
      "cekidgc",
      "cekonline",
      "cekonlyadmin",
      "checksewa",
      "clearchat",
      "close",
      "delantilink",
      "delete",
      "delppgc",
      "delstickercmd",
      "deltoxic",
      "demote",
      "game",
      "gc",
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
      "infogc",
      "intro",
      "jadwalgroup",
      "kick",
      "kickall",
      "linkgc",
      "linkgrup",
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
      "notifmakan",
      "notifopengroup",
      "notifpromote",
      "notifsholat",
      "notiftidur",
      "ocgc",
      "open",
      "opentime",
      "pinchat",
      "poll",
      "promote",
      "publicthisgc",
      "randomtag",
      "resetgoodbye",
      "resetintro",
      "resetlinkgc",
      "resetrulesgrup",
      "resetwarn",
      "resetwelcome",
      "risetsider",
      "rpg",
      "rulesgrup",
      "rvo",
      "selfthisgc",
      "setantilinkkick",
      "setbye",
      "setdeskgc",
      "setgoodbye",
      "setintro",
      "setnamegc",
      "setppgc",
      "setrulesgrup",
      "setwelcome",
      "sider",
      "slowmode",
      "spamtag",
      "swapadmin",
      "swgc",
      "tagadmin",
      "tagall",
      "tam",
      "topchat",
      "totag",
      "totalchat",
      "totalpesan",
      "tutupjam",
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
      "alkitab",
      "asmaulhusna",
      "audioquran",
      "autosahur",
      "ayat",
      "ayatkursi",
      "bacaansholat",
      "hijriyah",
      "islami",
      "istighfar",
      "istikharah",
      "jadwalsholat",
      "kisahnabi",
      "mandiwajib",
      "murrotal",
      "nisfusyaban",
      "puasa",
      "quran",
      "rajab",
      "ramadhan2027",
      "sholawat",
      "surah2",
      "tafsir",
      "tahlil",
      "taubat",
      "zakat",
      "zikir"
    ]
  },
  "INFO": {
    "emoji": "ℹ️",
    "commands": [
      "antara",
      "benefitpartner",
      "bluearchive-char",
      "bmkggempa",
      "buildml",
      "callingcode",
      "ceksn",
      "fiturpremium",
      "gag",
      "gag2",
      "gag2watch",
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
      "livescore",
      "market",
      "misi",
      "ml",
      "newup",
      "runtime",
      "sc",
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
      "cekjew",
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
      "cekpelit",
      "cekpintar",
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
      "leaderboard-orang-kaya",
      "leaderboard-orang-miskin",
      "primeff",
      "rimuru-nguli",
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
      "limit",
      "listdaftar",
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
      "applemusic-canvas",
      "balogo",
      "basket",
      "boardingpass",
      "bratlocal",
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
      "fakediscord",
      "fakedj",
      "fakefbkomen",
      "fakeff",
      "fakeff2",
      "fakeffduo",
      "fakegopay",
      "fakeidcard",
      "fakeijazah",
      "fakeijin",
      "fakeizin",
      "fakekarcis",
      "fakekartupelajar",
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
      "iqc5",
      "iqcpink",
      "jmk48",
      "juarabadminton",
      "juaraml",
      "kalender",
      "meme2",
      "meme3",
      "movieposter",
      "mvp",
      "nokia",
      "oh-no",
      "p302",
      "pacarsertifikat",
      "patrickmeme",
      "profileff",
      "profileig",
      "quoteswindows",
      "ship",
      "spongebob",
      "sroast",
      "starboy",
      "susutaro",
      "tiktokchat",
      "topixel",
      "ttqc",
      "ustadz",
      "watercolortext"
    ]
  },
  "RANDOM": {
    "emoji": "🎲",
    "commands": [
      "barandom",
      "cosba",
      "lahelu",
      "loli",
      "meme",
      "memespongbob",
      "papayang",
      "ppcouple",
      "ppcp",
      "quotesimage",
      "superhero"
    ]
  },
  "PREMIUM": {
    "emoji": "⭐",
    "commands": [
      "age-detection",
      "cekowner",
      "cekpartner",
      "cekprem",
      "converter",
      "ewe",
      "ewepaksa",
      "fstik",
      "getcontact",
      "gpt2image",
      "hdvid",
      "img2vid",
      "kasedaiki",
      "listpanel",
      "mp4dl",
      "msgch",
      "nanobananapro",
      "nekopoi",
      "numbgen",
      "rch",
      "swhdv2",
      "swhdv3",
      "swhdv4",
      "talkingphoto",
      "to3d",
      "toanime",
      "tocartoon",
      "tocermin",
      "tofigure3",
      "toisland",
      "tomanga",
      "tooilpainting",
      "wink",
      "ytsummarize"
    ]
  },
  "EPHOTO": {
    "emoji": "📸",
    "commands": [
      "glitchtext",
      "photooxy"
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
      "fake-ngl",
      "fakebca",
      "fakeboard",
      "fakebook",
      "fakechannel",
      "fakeff",
      "fakeff3",
      "fakegroup",
      "fakegroupv2",
      "fakeig",
      "fakeigstory",
      "fakeml",
      "fakeml2",
      "fakenote",
      "fakenotifwa",
      "fakestory",
      "faketg",
      "faketiktok",
      "fakett",
      "faketweet",
      "fakewa",
      "fakewafat",
      "fdc",
      "hangingpolaroid",
      "hotline",
      "igqc",
      "iqc",
      "iqc2",
      "iqc3",
      "iqc4",
      "iqcv3",
      "jail",
      "jarvis",
      "lobbyff",
      "logo-3d",
      "logo-glow",
      "logo-gold",
      "logo-metal",
      "musiccard",
      "pinkgreen",
      "quotecard",
      "quotephoto",
      "sertifikatcinta",
      "sertifikatnasa",
      "sertiftolol",
      "textlogo",
      "toblonde",
      "ttp",
      "wanted",
      "wasted",
      "wmp1",
      "wmp2",
      "xterm-maker-edit"
    ]
  },
  "INTERNET": {
    "emoji": "🌍",
    "commands": [
      "apkmirror",
      "artinama",
      "doa",
      "dongeng",
      "fdroid",
      "fetch",
      "gimg",
      "githubtrend",
      "infoloker",
      "iplookup",
      "kbbi",
      "lyrics",
      "mangga-pop",
      "misteri",
      "mltour",
      "pinterestvideo",
      "pixiv",
      "playstore",
      "renungan",
      "ringtone",
      "roboguru",
      "rrsearch",
      "surah",
      "tafsir",
      "tgram",
      "toproblox",
      "uhdpaper",
      "wallpaper",
      "wallsearch",
      "worldtime"
    ]
  },
  "ANIME": {
    "emoji": "⛩️",
    "commands": [
      "akira",
      "anichin",
      "anilist",
      "anime-waifu",
      "animedate",
      "animedl",
      "animeimgsearch",
      "animeinfo",
      "animelatest",
      "animequotes",
      "animereco",
      "animesearch",
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
      "komikindo",
      "konachan",
      "kusonime",
      "loli",
      "manga",
      "mobinime",
      "mywaifu",
      "rekom-anime",
      "shinigamidetail",
      "storyanime",
      "tokusatsu",
      "topanime",
      "wuwa",
      "yande"
    ]
  },
  "CLAN": {
    "emoji": "🛡️",
    "commands": [
      "clanannounce",
      "clanbank",
      "clanboss",
      "clancheckin",
      "clancreate",
      "clandemote",
      "clandesc",
      "claninfo",
      "claninvite",
      "clanjoin",
      "clankick",
      "clanleaderboard",
      "clanleave",
      "clanlevel",
      "clanlogo",
      "clanmembers",
      "clanpromote",
      "clanraid",
      "clanraidjoin",
      "clanrank",
      "clanrename",
      "clanreport",
      "clanupgrade",
      "clanwar",
      "clanwaraccept",
      "clanwarhistory",
      "clanwarscore",
      "clanxp"
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
      "bass"
    ]
  },
  "DISCORD": {
    "emoji": "✨",
    "commands": [
      "dtoggle"
    ]
  },
  "NSFW": {
    "emoji": "🔞",
    "commands": [
      "nekodl"
    ]
  },
  "ELAINA": {
    "emoji": "🧙‍♀️",
    "commands": [
      "blurface",
      "chatdeepai",
      "fakediscord",
      "photooxy",
      "tiklydown"
    ]
  },
  "RPG": {
    "emoji": "⚔️",
    "commands": [
      "7eleven",
      "achievement",
      "adventure",
      "airdrop",
      "akuntt",
      "alchemy",
      "arena",
      "atm",
      "bank",
      "bankcek",
      "beg",
      "berburu",
      "berdagang",
      "berkebun",
      "berladang",
      "blacksmith",
      "boss",
      "bossbattle",
      "breeding",
      "bunuh",
      "buy",
      "buykoin",
      "cafemenu",
      "casino",
      "ceklvl",
      "challenge",
      "claim",
      "coinflip",
      "collect",
      "cook",
      "cooking",
      "craft",
      "creatett",
      "crime",
      "daily",
      "dice",
      "divorce",
      "duel",
      "dungeon",
      "enchant",
      "expedition",
      "expoint",
      "fightphonix",
      "fishing",
      "freelance",
      "freelimit",
      "gacha",
      "gajian",
      "garden",
      "gift",
      "grab",
      "guild",
      "heal",
      "hero",
      "hourly",
      "hunt",
      "inventory",
      "jual",
      "jualan",
      "kandang",
      "karung",
      "kerja",
      "koboy",
      "korupsi",
      "kurir",
      "lb",
      "leveluprpg",
      "livett",
      "lottery",
      "maling",
      "mancing",
      "marry",
      "masak",
      "meditation",
      "membunuh",
      "merampok",
      "merchant",
      "minecraftbattle",
      "mining",
      "monthly",
      "mulai",
      "mulung",
      "nabung",
      "nambalban",
      "ngamen",
      "ngemis",
      "ngojek",
      "nulis",
      "nyapu",
      "open",
      "parkir",
      "pasar",
      "penjara",
      "pet",
      "petshop",
      "quest",
      "ramadhan",
      "ramuan",
      "reedem",
      "resetbansos",
      "rob",
      "roket",
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
      "survival",
      "tarik",
      "taxy",
      "tembak",
      "tembak2",
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
  "MUSIC": {
    "emoji": "🎵",
    "commands": [
      "play-zero",
      "play2",
      "play3",
      "playncs",
      "sad",
      "spotivio"
    ]
  },
  "VPS": {
    "emoji": "🖥️",
    "commands": [
      "cekvps",
      "createvps",
      "delvps",
      "linode2gb",
      "listvps",
      "sisavps",
      "turnon"
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
      "bacot",
      "dare",
      "katakata",
      "murothal",
      "pantun",
      "pantun2",
      "q-islam",
      "quotebucin",
      "quotefilsuf",
      "quotetokoh",
      "sadboy",
      "truth"
    ]
  },
  "STALKER": {
    "emoji": "🕵️",
    "commands": [
      "cektiktok",
      "countrystalk",
      "daftartiktok",
      "discordstalk",
      "ffstalk",
      "genshinstalk",
      "ghstalk",
      "githubstalk",
      "igstalk",
      "npmstalk",
      "pintereststalk",
      "robloxplayer",
      "robloxstalk",
      "stalkdc",
      "stalkml",
      "tiktokstalk",
      "ttstalk",
      "twitterstalk",
      "wastalk",
      "ytstalk"
    ]
  },
  "TTS": {
    "emoji": "🗣️",
    "commands": [
      "holotts",
      "ondoku",
      "tts",
      "ttselon",
      "ttseminem",
      "ttsgoku",
      "ttsmickey",
      "ttsnahida",
      "ttsvoice"
    ]
  }
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
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function highlightMatch(text, q) {
  if (!q) return escapeHtml(text);
  const idx = text.toLowerCase().indexOf(q);
  if (idx === -1) return escapeHtml(text);
  return escapeHtml(text.slice(0, idx)) +
    '<mark>' + escapeHtml(text.slice(idx, idx + q.length)) + '</mark>' +
    escapeHtml(text.slice(idx + q.length));
}

function isMobileLayout() {
  return window.matchMedia('(max-width: 860px)').matches;
}

// 5. TOAST NOTIFICATION
let toastTimer = null;
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  // Hanya satu toast dalam satu waktu supaya tidak menumpuk saat klik beruntun
  container.querySelectorAll('.toast').forEach((t) => t.remove());
  clearTimeout(toastTimer);

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  const icon = type === 'success' ? '✓' : '!';
  toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span class="toast-msg">' + message + '</span>';
  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// 6. COPY TO CLIPBOARD
function legacyCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '0';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  ta.remove();
  return ok;
}

async function copyText(text, label = text) {
  let ok = false;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (err) {
      ok = legacyCopy(text); // mis. izin clipboard ditolak browser
    }
  } else {
    ok = legacyCopy(text);
  }

  if (ok) showToast('<strong>' + escapeHtml(label) + '</strong> disalin ke clipboard');
  else showToast('Gagal menyalin teks', 'error');
  return ok;
}

// 7. RENDER DAFTAR BOT
function updateFloatingWa() {
  const bot = getSelectedBot();
  if (!bot) return;
  const url = createWaUrl(bot.number, '.menu');
  const title = 'Chat WhatsApp (' + bot.name + (bot.tag ? ' - ' + bot.tag : '') + ')';
  ['floatingWaBtn', 'headerWaBtn'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = url;
      el.title = title;
    }
  });
}

const AVATAR_GRADIENTS = [
  'linear-gradient(140deg, #22c55e, #14b8a6)',
  'linear-gradient(140deg, #06b6d4, #6366f1)',
  'linear-gradient(140deg, #8b5cf6, #ec4899)',
  'linear-gradient(140deg, #f59e0b, #ef4444)'
];

function renderBotsList() {
  const container = document.getElementById('botListContainer');
  if (!container) return;

  container.innerHTML = BOTS.map((bot, idx) => {
    const isSelected = idx === selectedBotIndex;
    const grad = AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length];
    const name = escapeHtml(bot.name);
    return `
      <div class="bot-item-card${isSelected ? ' is-selected' : ''}">
        <button type="button" class="bot-item-left" data-action="select" data-idx="${idx}"
          role="radio" aria-checked="${isSelected}" aria-label="Pilih bot ${name}">
          <span class="radio-circle${isSelected ? ' checked' : ''}"></span>
          <span class="bot-avatar" style="background: ${grad};">
            <span>${escapeHtml(bot.name.charAt(0))}</span>
            <span class="dot-online"></span>
          </span>
          <span class="bot-info-meta">
            <span class="bot-name-line">
              <strong class="bot-title">${name}</strong>
              ${bot.tag ? `<span class="bot-server-tag">${escapeHtml(bot.tag)}</span>` : ''}
              ${isSelected ? '<span class="bot-selected-pill">Aktif</span>' : ''}
            </span>
            <span class="bot-number-text">${formatPhoneDisplay(bot.number)}</span>
          </span>
        </button>
        <div class="bot-item-actions">
          <a href="${createWaUrl(bot.number, '.menu')}" target="_blank" rel="noopener noreferrer" class="btn-item-wa"
            title="Chat WhatsApp dengan ${name}">
            <svg width="15" height="15" aria-hidden="true"><use href="#i-wa"/></svg>
            <span>Chat</span>
          </a>
        </div>
      </div>`;
  }).join('');

  updateFloatingWa();
}

function selectBot(idx) {
  if (idx < 0 || idx >= BOTS.length) return;
  if (idx === selectedBotIndex) return;
  selectedBotIndex = idx;
  try {
    localStorage.setItem('rimuru_selected_bot', String(idx));
  } catch (e) { }

  renderBotsList();
  updateCommandLinks();
  showToast('Bot aktif: <strong>' + escapeHtml(BOTS[idx].name) + (BOTS[idx].tag ? ' (' + escapeHtml(BOTS[idx].tag) + ')' : '') + '</strong>');
}

// Update link WA tiap perintah tanpa re-render seluruh daftar
function updateCommandLinks() {
  const bot = getSelectedBot();
  document.querySelectorAll('#categoriesContainer .cmd-send-wa').forEach((a) => {
    const cmd = a.dataset.cmd;
    a.href = createWaUrl(bot.number, cmd);
    a.title = 'Kirim ' + cmd + ' ke ' + bot.name;
  });
}

// 8. RENDER CHIPS & DROPDOWN FILTER KATEGORI
function setupCategoriesFilter() {
  const selectEl = document.getElementById('categorySelect');

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

  renderChips();
}

function renderChips() {
  const chipsScroll = document.getElementById('chipsScrollArea');
  if (!chipsScroll) return;

  let totalAll = 0;
  for (const k in MENU) totalAll += MENU[k].commands.length;

  const allCategories = ['ALL', ...Object.keys(MENU)];

  chipsScroll.innerHTML = allCategories.map((cat) => {
    const isAll = cat === 'ALL';
    const count = isAll ? totalAll : MENU[cat].commands.length;
    const emoji = isAll ? '🌟' : MENU[cat].emoji;
    const label = isAll ? 'Semua' : cat.toLowerCase();
    const active = activeCategory === cat;
    return `
      <button type="button" class="filter-chip${active ? ' active' : ''}" data-cat="${escapeHtml(cat)}"
        role="tab" aria-selected="${active}">
        <span class="chip-emoji">${emoji}</span>
        <span class="chip-name">${escapeHtml(label)}</span>
        <span class="chip-count">${count.toLocaleString('id-ID')}</span>
      </button>`;
  }).join('');

  chipsScroll.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (chip) setCategory(chip.dataset.cat);
  });

  // Scroll horizontal pakai mouse wheel di desktop
  chipsScroll.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX) || e.shiftKey) return;
    if (chipsScroll.scrollWidth <= chipsScroll.clientWidth) return;
    e.preventDefault();
    chipsScroll.scrollBy({ left: e.deltaY, behavior: 'auto' });
  }, { passive: false });
}

function scrollChipIntoView(chip) {
  const area = document.getElementById('chipsScrollArea');
  if (!area || !chip) return;
  const target = chip.offsetLeft - (area.clientWidth - chip.offsetWidth) / 2;
  area.scrollTo({ left: Math.max(0, target), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

function setCategory(cat) {
  if (cat !== 'ALL' && !MENU[cat]) cat = 'ALL';
  const changed = activeCategory !== cat;
  activeCategory = cat;

  const selectEl = document.getElementById('categorySelect');
  if (selectEl && selectEl.value !== cat) selectEl.value = cat;

  let activeChip = null;
  document.querySelectorAll('.filter-chip').forEach((c) => {
    const isMatch = c.dataset.cat === cat;
    c.classList.toggle('active', isMatch);
    c.setAttribute('aria-selected', String(isMatch));
    if (isMatch) activeChip = c;
  });
  scrollChipIntoView(activeChip);

  const filterBadge = document.getElementById('activeFilterBadge');
  if (filterBadge) {
    if (cat !== 'ALL') {
      filterBadge.textContent = MENU[cat].emoji + ' ' + cat;
      filterBadge.hidden = false;
    } else {
      filterBadge.hidden = true;
    }
  }

  if (changed) {
    renderMenu({ animate: true });
    keepListInView();
  }
}

// Kalau user sudah scroll jauh lalu ganti filter / cari, bawa kembali ke awal daftar
function keepListInView() {
  const list = document.getElementById('categoriesContainer');
  const controls = document.getElementById('controlsCard');
  if (!list || !controls) return;
  const controlsBottom = controls.getBoundingClientRect().bottom;
  const listTop = list.getBoundingClientRect().top;
  if (listTop < controlsBottom) {
    const target = window.scrollY + listTop - controlsBottom - 12;
    window.scrollTo({ top: Math.max(0, target), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
}

// 9. RENDER MENU COMMANDS
function renderCommand(cmd, q, bot) {
  const fullCmd = '.' + cmd;
  const safeCmd = escapeHtml(fullCmd);
  return `
    <div class="command-item">
      <button type="button" class="command-main-btn" data-action="copy" data-cmd="${safeCmd}" title="Klik untuk salin ${safeCmd}">
        <span class="cmd-dot">.</span><span class="cmd-name">${highlightMatch(cmd, q)}</span>
        <span class="cmd-action-hint" aria-hidden="true">
          <svg class="ico-copy"><use href="#i-copy"/></svg>
          <svg class="ico-check"><use href="#i-check"/></svg>
        </span>
      </button>
      <a href="${createWaUrl(bot.number, fullCmd)}" target="_blank" rel="noopener noreferrer" class="cmd-send-wa"
        data-cmd="${safeCmd}" title="Kirim ${safeCmd} ke ${escapeHtml(bot.name)}" aria-label="Kirim ${safeCmd} lewat WhatsApp">
        <svg aria-hidden="true"><use href="#i-wa"/></svg>
      </a>
    </div>`;
}

function renderMenu(opts = {}) {
  const container = document.getElementById('categoriesContainer');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('displayedCount');
  if (!container) return;

  const q = searchQuery.trim().toLowerCase().replace(/^\.+/, '');
  const currentBot = getSelectedBot();

  let totalMatches = 0;
  let idx = 0;
  const parts = [];

  for (const [catName, catData] of Object.entries(MENU)) {
    if (activeCategory !== 'ALL' && activeCategory !== catName) continue;

    const filteredCommands = q
      ? catData.commands.filter(cmd => cmd.toLowerCase().includes(q))
      : catData.commands;

    if (filteredCommands.length === 0) continue;

    totalMatches += filteredCommands.length;

    // Saat mencari, kategori yang ditutup tetap dibuka agar hasil terlihat
    const isCollapsed = !q && collapsedCategories.has(catName);
    const safeCat = escapeHtml(catName);
    const n = filteredCommands.length;

    parts.push(`
      <section class="category-group${isCollapsed ? ' is-collapsed' : ''}" id="cat-${safeCat.toLowerCase()}"
        data-cat="${safeCat}" style="--i:${Math.min(idx, 8)}">
        <div class="category-header" role="button" tabindex="0" aria-expanded="${!isCollapsed}">
          <div class="cat-header-left">
            <span class="cat-icon-badge">${catData.emoji}</span>
            <div class="cat-title-wrap">
              <h2 class="cat-title-text">${safeCat}</h2>
              <span class="cat-subtitle">${n} perintah ${q ? 'ditemukan' : 'tersedia'}</span>
            </div>
          </div>
          <div class="cat-header-right">
            <span class="cat-pill-count">${n}</span>
            <span class="cat-toggle-btn" aria-hidden="true">
              <svg class="arrow-icon"><use href="#i-chevron"/></svg>
            </span>
          </div>
        </div>
        <div class="category-body">
          <div class="category-inner">
            <div class="commands-grid">${filteredCommands.map(cmd => renderCommand(cmd, q, currentBot)).join('')}</div>
          </div>
        </div>
      </section>`);
    idx++;
  }

  const animate = opts.animate && !prefersReducedMotion;
  container.classList.remove('animate-in');
  container.innerHTML = parts.join('');
  if (animate) {
    void container.offsetWidth; // restart animation
    container.classList.add('animate-in');
  }

  if (countEl) countEl.textContent = totalMatches.toLocaleString('id-ID');
  if (emptyState) emptyState.hidden = totalMatches !== 0;
}

// Event delegation: satu listener untuk ribuan perintah
function setupMenuInteractions() {
  const container = document.getElementById('categoriesContainer');
  if (!container) return;

  const toggleCategory = (header) => {
    const group = header.closest('.category-group');
    const cat = group.dataset.cat;
    const willCollapse = !group.classList.contains('is-collapsed');
    group.classList.toggle('is-collapsed', willCollapse);
    header.setAttribute('aria-expanded', String(!willCollapse));
    if (willCollapse) collapsedCategories.add(cat);
    else collapsedCategories.delete(cat);
  };

  container.addEventListener('click', async (e) => {
    const copyBtn = e.target.closest('[data-action="copy"]');
    if (copyBtn) {
      const item = copyBtn.closest('.command-item');
      const ok = await copyText(copyBtn.dataset.cmd);
      if (ok && item) {
        item.classList.add('copied');
        clearTimeout(item._copiedTimer);
        item._copiedTimer = setTimeout(() => item.classList.remove('copied'), 1300);
      }
      return;
    }

    const header = e.target.closest('.category-header');
    if (header) toggleCategory(header);
  });

  container.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const header = e.target.closest('.category-header');
    if (header && e.target === header) {
      e.preventDefault();
      toggleCategory(header);
    }
  });
}

// 10. SETUP SEARCH & INPUT LISTENERS
function setupSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const resetBtn = document.getElementById('resetFilterBtn');

  if (!input) return;

  const applySearch = (val, immediate) => {
    searchQuery = val;
    if (clearBtn) clearBtn.hidden = val.length === 0;
    clearTimeout(searchDebounce);
    const run = () => {
      renderMenu();
      keepListInView();
    };
    if (immediate) run();
    else searchDebounce = setTimeout(run, 120);
  };

  input.addEventListener('input', (e) => applySearch(e.target.value, false));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && input.value) {
      e.preventDefault();
      input.value = '';
      applySearch('', true);
    } else if (e.key === 'Enter') {
      input.blur(); // tutup keyboard di HP
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      applySearch('', true);
      input.focus();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      input.value = '';
      applySearch('', false);
      clearTimeout(searchDebounce);
      if (activeCategory === 'ALL') renderMenu({ animate: true });
      setCategory('ALL');
      input.focus();
    });
  }

  // Shortcut Ctrl+K / Cmd+K dan "/"
  document.addEventListener('keydown', (e) => {
    const isTyping = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '');
    if (((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') || (e.key === '/' && !isTyping)) {
      e.preventDefault();
      if (isMobileLayout()) switchMobileTab('menu');
      input.focus();
      input.select();
    }
  });
}

// 11. EXPAND / COLLAPSE ALL
function setupExpandCollapse() {
  const expandBtn = document.getElementById('expandAllBtn');
  const collapseBtn = document.getElementById('collapseAllBtn');

  const setAll = (collapsed) => {
    if (collapsed) for (const k in MENU) collapsedCategories.add(k);
    else collapsedCategories.clear();
    document.querySelectorAll('.category-group').forEach((g) => {
      g.classList.toggle('is-collapsed', collapsed);
      g.querySelector('.category-header')?.setAttribute('aria-expanded', String(!collapsed));
    });
  };

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      setAll(false);
      showToast('Semua kategori dibuka');
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      setAll(true);
      keepListInView();
      showToast('Semua kategori ditutup');
    });
  }
}

// 12. MOBILE NAVIGATION TABS
const tabScrollMemory = { bots: 0, menu: 0 };

function switchMobileTab(tab) {
  const layout = document.getElementById('layoutContainer');
  const nav = document.getElementById('mobileNavBar');
  if (!layout) return;
  const current = layout.getAttribute('data-mobile-view');
  if (current === tab) {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    return;
  }

  tabScrollMemory[current] = window.scrollY;
  layout.setAttribute('data-mobile-view', tab);
  if (nav) nav.setAttribute('data-active', tab);
  document.querySelectorAll('.mobile-nav-bar .tab-btn').forEach((b) => {
    const isActive = b.dataset.tab === tab;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });

  // Kembalikan posisi scroll terakhir di tab tersebut
  window.scrollTo({ top: tabScrollMemory[tab] || 0, behavior: 'instant' });
}

function setupMobileNav() {
  document.querySelectorAll('.mobile-nav-bar .tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchMobileTab(btn.dataset.tab));
  });

  const gotoMenuBtn = document.getElementById('gotoMenuBtn');
  if (gotoMenuBtn) gotoMenuBtn.addEventListener('click', () => switchMobileTab('menu'));

  // Link "Katalog Menu" di header
  const navCatalogBtn = document.getElementById('navCatalogBtn');
  if (navCatalogBtn) {
    navCatalogBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (isMobileLayout()) switchMobileTab('menu');
      document.getElementById('menuSection')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  // Pilih bot (delegation)
  const botList = document.getElementById('botListContainer');
  if (botList) {
    botList.addEventListener('click', (e) => {
      const sel = e.target.closest('[data-action="select"]');
      if (sel) selectBot(parseInt(sel.dataset.idx, 10));
    });
  }
}

// 13. SCROLL EFFECTS (header shadow + back to top) — throttled via rAF
function setupScrollEffects() {
  const btn = document.getElementById('backToTopBtn');
  const nav = document.getElementById('topNav');
  const controls = document.getElementById('controlsCard');
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    if (btn) btn.classList.toggle('visible', y > 500);
    if (nav) nav.classList.toggle('is-scrolled', y > 8);
    if (controls && controls.offsetParent !== null) {
      if (!stickyTop) stickyTop = parseFloat(getComputedStyle(controls).top) || 0; // panel sempat tersembunyi (tab mobile)
      controls.classList.toggle('is-stuck', controls.getBoundingClientRect().top <= stickyTop + 1 && y > 0);
    }
    ticking = false;
  };

  let stickyTop = 0;
  const measure = () => {
    stickyTop = controls ? parseFloat(getComputedStyle(controls).top) || 0 : 0;
    update();
  };
  window.addEventListener('resize', measure, { passive: true });

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  measure();

  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }
}

// Animasi angka statistik
function countUp(el, target, duration = 900) {
  if (!el) return;
  if (prefersReducedMotion) {
    el.textContent = target.toLocaleString('id-ID');
    return;
  }
  const start = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString('id-ID');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// 14. INITIALIZATION
let appInitialized = false;
function initApp() {
  if (appInitialized) return;
  appInitialized = true;

  let totalCommands = 0;
  for (const k in MENU) {
    totalCommands += MENU[k].commands.length;
  }
  const totalCats = Object.keys(MENU).length;
  const formattedTotal = totalCommands.toLocaleString('id-ID');

  countUp(document.getElementById('statTotalCommands'), totalCommands);
  countUp(document.getElementById('statTotalCategories'), totalCats, 700);

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setText('totalFeatureCount', formattedTotal);
  setText('tabCmdCount', formattedTotal);
  setText('displayedCount', formattedTotal);
  setText('botBadgeCount', BOTS.length + ' Bot');
  setText('tabBotCount', BOTS.length);

  renderBotsList();
  setupCategoriesFilter();
  setupSearch();
  setupMenuInteractions();
  setupExpandCollapse();
  setupMobileNav();
  setupScrollEffects();
  renderMenu({ animate: true });

  console.log('Rimuru-MD Dashboard loaded successfully with', totalCats, 'categories and', totalCommands, 'commands.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
