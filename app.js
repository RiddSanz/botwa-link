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
  // {
  //   name: 'Vandebry',
  //   number: '51901677155',
  //   tag: 'PERU'
  // },
  {
    name: 'Veli',
    number: '6285136816270',
    tag: 'BYU1'
  },
  {
    name: 'Hexa',
    number: '628511347385',
    tag: 'BYU3'
  },
  {
    name: 'Antrax',
    number: '62881027926259',
    tag: 'SF1'
  },
  {
    name: 'Alya',
    number: '6285136816242',
    tag: 'BYU2'
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
      "allmenu",
      "benefitowner",
      "benefitpremium",
      "buypanel",
      "carifitur",
      "credit",
      "cta_call",
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
      "stats",
      "stopjadibot",
      "system",
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
      "remind"
    ]
  },
  "TOOLS": {
    "emoji": "🔧",
    "commands": [
      "age-detection",
      "alultimate",
      "ambulk",
      "amdata",
      "amsend",
      "amverif",
      "audio.mp3",
      "bandingkan-hp",
      "barcode",
      "biner",
      "bitly",
      "breach",
      "bypass",
      "calc",
      "carbon",
      "caribug",
      "catbox",
      "ccgen",
      "cekidch",
      "cekml",
      "ceknamadana",
      "cekplat",
      "cekrek",
      "cekresi",
      "cekxl",
      "checkhost",
      "cjstoesm",
      "colongsw",
      "compresspdf",
      "converter",
      "cta_copy",
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
      "fstik",
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
      "hdvid",
      "hdvideo2",
      "hitungwrmlbb",
      "hostmedia",
      "image.jpg",
      "imagetoasci",
      "imgtools",
      "imgtoprompt",
      "invoicemaker",
      "ip",
      "ipwho",
      "izen",
      "jadwaltv",
      "jarak",
      "jjcapcut",
      "kalkulatormbg",
      "kirimpesangc",
      "kodepos",
      "linkid",
      "logo.png",
      "lookup",
      "mcstalk",
      "mcstatus",
      "mikutalk",
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
      "promptcode",
      "proxy",
      "ptv",
      "q",
      "qrcodefile",
      "qwa",
      "rch",
      "readmore",
      "readqr",
      "remini",
      "removebg",
      "removewm",
      "resize",
      "resizevideo",
      "rvo",
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
      "spotivid",
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
      "test",
      "tidak ada",
      "time",
      "timeis",
      "tinypng",
      "toaudio",
      "tocodeqr",
      "toesm",
      "toimg",
      "tourl",
      "tovideo",
      "tovn",
      "transkrip",
      "translate",
      "tweetss",
      "txt2qr",
      "uguu",
      "upvidey",
      "usernamegen",
      "vgist",
      "videotranscribe",
      "vocalcut",
      "vocalremover",
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
      "ara",
      "artinama2",
      "autorimuru",
      "bagaimana",
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
      "funcek",
      "gachabini",
      "gachafemboy",
      "gachanasip",
      "gachatomboy",
      "gay",
      "gojo-extra",
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
      "sakura haruno",
      "sapa",
      "seberapagila",
      "senja",
      "sertifikatlemot",
      "siapa",
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
      "wa-canvas",
      "yuji itadori"
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
      "benaratausalah",
      "blackjack",
      "bomb",
      "breakout",
      "caklontong",
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
      "genaiunifiedresponse",
      "genshinprofile",
      "hangman",
      "kataacak",
      "kuis",
      "kyubigame",
      "lengkapikalimat",
      "listhero",
      "maths",
      "mct",
      "memorymatch",
      "mlbb",
      "monopoli",
      "mortalkombat",
      "mudah",
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
      "snake",
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
      "tictactoe",
      "togel",
      "tom and jerry",
      "trivia",
      "truthordare",
      "ulartangga",
      "uno",
      "vortex blue",
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
      "${data.title}.mp3",
      "${res.filename}.${ext}",
      "${title.replace(/[^a-za-z0-9_\\-]/g,",
      "${title}.mp3",
      "aio",
      "aio2",
      "alightmotiondl",
      "azbry",
      "bilibili",
      "capcut",
      "capcutdl",
      "cocofundl",
      "cta_url",
      "dailymotiondl",
      "dlit",
      "douyin",
      "douyindl",
      "facebook",
      "facebookdl",
      "gdrive",
      "gimage",
      "gitclone",
      "githubdl",
      "igaudio",
      "igdl",
      "instagram3",
      "instagramdl",
      "likeedl",
      "mcpedldl",
      "mediafiredl",
      "pindl",
      "pindl2",
      "pixeldraindl",
      "playvid",
      "quick_reply",
      "rednotedl",
      "sfile",
      "sfiledl",
      "shopeedl",
      "snackvideodl",
      "spotifydl",
      "spotifyplay",
      "terabox",
      "threaddl",
      "tiktok_audio_${date.now()}.mp3",
      "tiktokdl2",
      "tt",
      "ttslide",
      "videy",
      "wallpaper",
      "xhs",
      "yt5so",
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
      "jobstreetsearch",
      "lirik",
      "mangaread",
      "mangatoon",
      "mcaddon",
      "mcaddons",
      "mcpedl",
      "meigen",
      "melolo",
      "movieku",
      "nerdfont-ambil",
      "npm",
      "pap",
      "pddikti",
      "pin",
      "pin2",
      "pins2",
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
      "sakura-chapter.txt",
      "searchthatsong",
      "shinigami",
      "soundcloud",
      "soundmeme-listnama",
      "spekhp",
      "spotify",
      "spotplay",
      "stikerwa",
      "tenor",
      "tiktokfoto",
      "tiktoksc",
      "tokopedia",
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
      "pinpack",
      "qc",
      "ryo yamada",
      "smeme",
      "smeme-animated",
      "smemevid",
      "sticker",
      "stickerly",
      "stickerpack",
      "stickerpackpin",
      "stickersearch",
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
      "mengkane",
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
      "aisantai",
      "alya",
      "anime-gen",
      "arta",
      "asyntai",
      "bard",
      "bocchi",
      "character-ai",
      "claudehaiku",
      "copilot",
      "create_ai_art",
      "deepseek",
      "dolphin",
      "dpsteai",
      "editimage",
      "elainaai",
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
      "humanize",
      "hutao",
      "image.jpg",
      "img2vid",
      "imgprompt",
      "input.jpg",
      "jeeves",
      "jokowi-ai",
      "kimi",
      "kimi-vision",
      "kita",
      "kobo-ai",
      "kurumi",
      "luffyai",
      "mahiru",
      "makima",
      "matematika",
      "mega",
      "meguminai",
      "mikasa",
      "mikuai",
      "mistral",
      "musicmaker",
      "muslimai",
      "nanobanana",
      "nanobananapro",
      "nanoedit",
      "nijika",
      "oguri",
      "openai",
      "opennana",
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
      "talkingphoto",
      "text2img",
      "text2img2",
      "text2img3",
      "text2img4",
      "to3d",
      "toanime",
      "toblack",
      "tocartoon",
      "tocermin",
      "tochibi",
      "toemotebatu",
      "tofigure",
      "tofigure3",
      "tofigurev2",
      "toghibli",
      "tohijab",
      "toisland",
      "tojapanese",
      "tomanga",
      "tomekah",
      "tooilpainting",
      "waguri",
      "waguri-ai",
      "webpilot",
      "whatsthebigdata.com",
      "wormgpt",
      "xterm-ai",
      "zetavoice"
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
      "members.txt",
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
      "quick_reply",
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
      "tahlil",
      "taubat",
      "zikir"
    ]
  },
  "INFO": {
    "emoji": "ℹ️",
    "commands": [
      "antara news",
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
      "avatar.jpg",
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
      "fakekartupelajar",
      "fakeml",
      "fakengl",
      "fakenikah",
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
      "plus jakarta sans",
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
      "meme",
      "memespongbob",
      "papayang",
      "ppcouple",
      "ppcp",
      "quick_reply",
      "quotesimage",
      "superhero"
    ]
  },
  "PREMIUM": {
    "emoji": "⭐",
    "commands": [
      "bataljadibot"
    ]
  },
  "MAKER": {
    "emoji": "✂️",
    "commands": [
      "bratspongebob",
      "carbonlocal",
      "cewekbrat",
      "cinematic",
      "codesnap",
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
      "web2apk",
      "wmp1",
      "wmp2",
      "xterm-maker",
      "xterm-maker-edit"
    ]
  },
  "INTERNET": {
    "emoji": "🌍",
    "commands": [
      "alkitab",
      "apkmirror",
      "artinama",
      "doa",
      "dongeng",
      "fdroid",
      "file.json",
      "gimg",
      "githubtrend",
      "infoloker",
      "iplookup",
      "kbbi",
      "lyrics",
      "mangga-pop",
      "misteri",
      "mltour",
      "pinvid_${timestamp}.mp4",
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
      "wallcraft",
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
      "anime-waifu, waifu-anime",
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
      "kasedaiki",
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
      "audiofx"
    ]
  },
  "ELAINA": {
    "emoji": "🧙‍♀️",
    "commands": [
      "avatar.jpg",
      "chatdeepai",
      "faceblur",
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
  "RPG": {
    "emoji": "⚔️",
    "commands": [
      "7eleven",
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
      "ewe",
      "ewepapksa",
      "expedition",
      "expoint",
      "extra",
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
      "kafe lezat",
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
      "serigala",
      "shop",
      "simulator",
      "skill",
      "slot",
      "slotui",
      "stamina",
      "steal",
      "streamer",
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
      "wild boar",
      "woodcut",
      "work"
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
  "MUSIC": {
    "emoji": "🎵",
    "commands": [
      "${first.title} - ${first.artist}.mp3",
      "genaiaeacdsnwhtmlprimitive",
      "play-zero",
      "play3",
      "sad"
    ]
  },
  "VPS": {
    "emoji": "🖥️",
    "commands": [
      "cekvps",
      "createvps",
      "delvps",
      "linode",
      "listvps",
      "sisavps",
      "vpskontrol"
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
function normalizeNumber(num) {
  let clean = String(num || '').replace(/[^0-9]/g, '');
  if (clean.startsWith('0')) clean = '62' + clean.slice(1);
  return clean;
}

function formatPhoneDisplay(num) {
  const n = normalizeNumber(num);
  if (n.startsWith('62') && n.length >= 11) {
    // return n.slice(2, 5) + '-' + n.slice(5, 9) + '-' + n.slice(9);
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
