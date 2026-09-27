/* =============================================================
   1. DATA BOT
   -------------------------------------------------------------
   Cukup isi `name` dan `number`.
   - `initial` & `tag` (C1, C2, ...) otomatis di-generate dari urutan.
   - Kalau mau override, tinggal tambahin `initial: "X"` atau `tag: "BOT-X"`.
   ============================================================= */
const BOTS = [
  { name: "Veli",   number: "6285136816270" },
  { name: "Alya",   number: "6285136816242" },
  { name: "Antrax", number: "62881027926259" },
];

/* =============================================================
   2. DATA MENU
   -------------------------------------------------------------
   Format:  "KATEGORI": { emoji: "◆", commands: ["cmd1","cmd2", ...] }
   Tulis command TANPA titik.
   ============================================================= */
const MENU = {
  "MAIN": { emoji: "◆", commands: [
    "allmenu-variants","allmenu","benefitowner","benefitpremium","buypanel",
    "carifitur","cek","creator","creator2","credit","daftar","del","donasi",
    "enable","gacha","gbbot","hargabot","hargapanel","help","jadibot",
    "leaderboard","limit","listch","menu-variants","menu","menucat","msgch",
    "order","order2","owner","ping","ping2","public","q","rch","resetlimit",
    "rules","saluranbot","sc","seleksi","set","stats","stopjadibot","system",
    "test","totalfitur","tqto","tqto2","usercard"
  ]},
  "UTILITY": { emoji: "◆", commands: [
    "inspect","notifmakan","notiftidur","reminder"
  ]},
  "TOOLS": { emoji: "◆", commands: [
    "alultimate","ambulk","amdata","amprem","amsend","amverif","anticolong",
    "antitagsw","ascii","ban-wa","bandingkan-hp","barcode","binary","bitly",
    "breach","bypass","calc","carbon","caribug","catbox","ccgen","cekakuntt",
    "cekhost","cekidch","cekml","ceknamadana","cekplat","cekrek","cekresi",
    "cekweb","cekxl","cjstoesm","codepromt","colongsw","compresspdf",
    "converter","dafont","daftartt","dbinary","debiner","delpp","deploy",
    "ebinary","ekspedisilist","emojitoanimasi","emojitoimage","enc","encode",
    "enlargerai","esmtocjs","extra-tools","facedetector","fagsocial",
    "fagsocial_video","fakecam","fakecamvid","fakesw","faketag","fakevhs",
    "fetchweb","fliptext","gencard","getpaste","gh","gmaps","grammary",
    "gsmarena","gsmarena2","hapuswm","hd","hd2","hd3","hd4","hd5","hd8",
    "hdvid","hdvideo2","hitungwrmlbb","hostmedia","image","imgtoprompt",
    "invoicemaker","ip","ipwho","izen","jadwaltv","jam","jjcapcut",
    "kalkulatormbg","kirimpesangc","linkid","lookup","mcstalk","mikutalk",
    "morse","musikapaini","myip","nik","nikparser","npmdl","npmshield",
    "nulis","numbgen","ocr","pastebin","phisingataubukan","preset","proxy",
    "ptv","qrcodefile","qrcustom","qwa","rch","readmore","readqr","removebg",
    "removevocal","removewm","resize","resizevideo","rvo","s2c","scanrepo",
    "searchgist","sendngl","setbio","setname","setpp","sharetext","shupload",
    "spam-otp","spam-pairing","spamngl","speedbot","spotifyvid","ssdesktop",
    "sstablet","ssweb","struk","styleteks","subs4unlock","suppbypass",
    "swhdv2","swhdv3","swhdv4","tebalteks","tempmail","tesautopostch",
    "time","tinypng","toaudio","toesm-tocjs","toimg","tomp3","tourl","tourl2",
    "tovideo","tovn","transkrip","translate","tweetss","txt2qr","uguu","upch",
    "upch2","uppastebin","upvidey","usernamegen","vgist","videotranscribe",
    "vocalcut","weather","web2zip","webperf","whatmusic","wink","wisedetail",
    "xterm-ai-tools","ytsummarize"
  ]},
  "FUN": { emoji: "◆", commands: [
    "akankah","alay","angka","apakah","artinama","artinama2","bagaimana",
    "benarkah","berapa","bisakah","bucin","burik","cekcantik","cekfemboy",
    "cekhodam","cekjomok","cekkhodam","cekkontol","cekmemek","cekotot",
    "cekpacar","cekperfoma","cektt","coba","confess","dare","dimana",
    "dimanakah","fakechat","fuckmylife","funcek","gachabini","gachahusbu",
    "gachanasip","gachatomboy","gachawaifu","gachfemboy","gay","gojo-extra",
    "halah","haruskah","jadian","jodoh","kapan","kapankah","kematian",
    "kerangajaib","lifefact","lupakan","mengapa","mimpi","moveon","puisi",
    "putus","ramalan","randomtag","rate","renungan","respon","seberapagila",
    "senja","siapa","simi","simi2","sipaling2","soulmatch","sulap",
    "suratcinta","tebakumur","tembak","terima","tod","tolak","top","truth",
    "wa-canvas"
  ]},
  "GAME": { emoji: "◆", commands: [
    "akinator","angry_birds","asahotak","balap","blackjack","bns","bom",
    "breakout","caklontong","catur","cerdascermat","checkerszerotwo",
    "color_block_puzzle","dino","dungeon","family100","fisch","flappy",
    "genshinprofile","hangman","kataacak","kuis","kyubigame",
    "lengkapikalimat","mahjong-shinobu","maths","memory_match","minecraft",
    "mlbb","monopoli","mortal_kombat","nixelgames","pac_man","perangsarung",
    "riddle","sambungkata","siapakahaku","slot","slot2","snake","sonik",
    "speedydash","stickman","suit","suitpvp","supermario","survival",
    "susunkata","tebakan","tebakanime","tebakbendera","tebakbola",
    "tebakdrakor","tebakepep","tebakff","tebakfilm","tebakgambar","tebakgame",
    "tebakhewan","tebakhp","tebakjkt","tebakjkt48","tebakkalimat",
    "tebakkartun","tebakkata","tebakkimia","tebaklagu","tebaklirik",
    "tebaklogo","tebakmakanan","tebaknegara","tebakprofesi","tebakprovinsi",
    "tebaksurah","tebaktebakan","tebakwarna","tekateki","tetris","tictactoe",
    "togel","trivia","truthordare","ulartangga","uno","war-attack","war",
    "werewolf","wwkill","wwprotect","wwsee","wwsorcerer"
  ]},
  "DOWNLOAD": { emoji: "◆", commands: [
    "aio","aio2","alightmotion","applemusic","blibili","capcut","capcutdl",
    "cocofundl","dailymotiondl","douyin","douyindl","facebook","facebookdl",
    "gdrive","gitclone","githubdl","googledrive","ig","ig3","igaudio",
    "instagramdl","instatiktok","likeedl","mediafire","mediafiredl","pindl",
    "pindl2","pixeldraindl","play","play2","rednotedl","sfile","sfiledl",
    "shopeedl","snackvideodl","soundcloud","spotify","spotifydl","terabox",
    "threaddl","tiktok","tiktokdl","tiktokdl2","ttimg","ttmp3","ttmusic",
    "ttslide","twitter","videy","Xhs","yt5so","yta","ytmp3","ytmp4","ytplay",
    "yts","ytv"
  ]},
  "SEARCH": { emoji: "◆", commands: [
    "android1-get","android1","anime2","animeapaini","animelink","animesanka",
    "apkcombo","apkmiror","apkmod-get","apkmod","apkpure","apkzoic",
    "applemaps","applemusic","bingimage","brainly","bstation","carigrup",
    "carimusik","carisinyal","chords","clip","comparation","douyinsearch",
    "dramabox","film","filmget","getmusik","google","gsmarena","imdb",
    "jobstreetsearch","kodepos","lyrics","mangaread","mangatoon","mcaddon",
    "mcpedl","melolo","migen","movieku","nerdfont-ambil","nerdfont","npm",
    "pap","pddikti","pin","pin2","pinterest","pinterest2","pinvid","pixiv",
    "play","play2","play4","playcall","playch","playsoundcloud","playtiktok",
    "playvid","ptvsearch","putar-play","putar-play2","resep","royalroad",
    "sakuranovel","searchcode","searchthatsong","shinigami","soundcloud",
    "soundmeme","spotify","spotplay","stikerwa","tenor","tiktok","tiktokfoto",
    "tiktoksc","tokopedia","ttsearch","uptodown","wattpadsearch","webton",
    "wiki","wikipedia","yts"
  ]},
  "STICKER": { emoji: "◆", commands: [
    "animebrat","attp","attp2","brat","bratanime","bratbahlil","bratcewek",
    "bratextra","bratgreen","bratgura","bratlocal","bratpatrick",
    "bratsquidward","bratvid","bratvid2","bratwhite","emojimix","fstik",
    "kannabrat","linesticker","megami","pack","pinpack","qc","search",
    "smeme-animated","smeme","smemevid","sticker","stickerly","stickerpack",
    "stickerpackpin","swm","telestick","toimg","tovideo","ttp","vn"
  ]},
  "MEDIA": { emoji: "◆", commands: [
    "audio-effect","mengkane","music","setaudio"
  ]},
  "AI": { emoji: "◆", commands: [
    "age-detection","ai-leaderboard","ai-models","ai","aifilter","aisantai",
    "alya","anime-gen","artaai","asyntai","bard","bocchi","channel-tools",
    "characterai","claudehaiku","copilot","deepseek","dolphin","dpsteai",
    "editimg2","elaina","epsilon","faceswap","feelbetter","felo","flux",
    "furina","gem","gita","glm4","gpt2image","gpt4o","gpt5","gptprompt",
    "hoshino","humanizer","hutao","img2vid","imgprompt","jeeves","jokowi-ai",
    "kimi-vision","kimi","kita","kobo-ai","kurumi","lobbyff","luffy_ai",
    "mahiru","makima","matematika","megaai","megumin","mikasa","miku",
    "mistralai","musicmaker","muslimai","nano","nanobana","nanobanana",
    "nanobananapro","nanoedit","nijika","oguricap","openai","opennana",
    "perplexity","powerbrain","prabowo-ai","public","quilbot","quillbot",
    "quillbotai","qwen3","realtime","rimuru-ai","rimurubanana","rimurubanana2",
    "roboguru","simi","smith","sologo","sora2","talkingphoto","text2img",
    "text2img2","to3d","toanime","toblack","tocartoon","tocermin","tochibi",
    "toemotebatu","tofigure","tofigurev2","tofigurine","toghibli","tohijab",
    "toisland","tojapanese","tomanga","tomekah","tooilpainting","txt2img",
    "txt2img2","waguri-ai","waguri","wormgpt","xterm-ai","zeta"
  ]},
  "GROUP": { emoji: "◆", commands: [
    "absen","acc","add","addantilink","addcmdsticker","addlist","addtoxic",
    "afk","antibot","anticulik","anticustom","antidana","antidocument",
    "antiflood","antihidetag","antijudol","antiklinkch","antilink",
    "antilinkall","antilinkgc","antilinkkick","antimedia","antiphising",
    "antiremove","antispam","antisticker","antiswgc","antitagsw","antitoxic",
    "antivirtex","autoai","autodl","autoforward","automedia","autoreply",
    "autosticker","banchat","botmode","cekabsen","cekasalmember","cekidgc",
    "cekonline","cekononlyadmin","checksewa","clearchat","close","delantilink",
    "delete","delppgc","delstickercmd","deltoxic","demote","extra-admin",
    "game","getpp","getppgc","giveaway","goodbye","groupinfo","groupsecurity",
    "groupstats","hapusabsen","hidetag","hidetag2","ht","htpremium","info",
    "intro","jadwalgroup","kick-all-member","kick","link","linkgc","listadmin",
    "listafk","listantilink","listmember","listtoxic","listwarn","mulaiabsen",
    "mute","mutegc","mutemember","notifclosegroup","notifdemote",
    "notifgantitag","notifopengroup","notifpromote","notifsholat","ocgc",
    "open","opentime","openvo","pinchat","poll","polling","promote",
    "publicthisgc","resetgoodbye","resetintro","resetlinkgc","resetrulesgrup",
    "resetwarn","resetwelcome","risetsider","rpg","rulesgrup","selfthisgc",
    "setantilinkkick","setbye","setdeskgc","setgoodbye","setintro","setnamegc",
    "setppgc","setrulesgrup","settings","setwelcome","setwelcomebg","sider",
    "slowmode","spamtag","swapadmin","tagadmin","tagall","tagsw","tam",
    "topchat","totag","totalchat","totalpesan","tutupjam-bukajam","unmute",
    "unmutegc","unmutemember","upsw","warn","welcome"
  ]}
};

/* =============================================================
   3. KONFIGURASI UMUM
   ============================================================= */
const DEFAULT_MSG = ".menu";

const GLOBAL_NOTE_HTML = `
  Kalau bot yang kamu pilih tidak merespon, kemungkinan sedang
  <span class="hl">maintenance</span> atau <span class="hl">kebanned</span>.
  Coba bot lain yang aktif.
`;

/* =============================================================
   4. HELPER
   ============================================================= */
const normalizeNumber = (n) => {
  let v = String(n || "").replace(/[^0-9]/g, "");
  if (v.startsWith("0")) v = "62" + v.slice(1);
  return v;
};

const buildWaLink = (number, text = DEFAULT_MSG) => {
  const num = normalizeNumber(number);
  return num ? `https://wa.me/${num}?text=${encodeURIComponent(text)}` : "#";
};

// Auto-generate `initial` & `tag` kalau tidak di-set manual
const botsResolved = BOTS.map((b, i) => ({
  name:    b.name,
  number:  b.number,
  initial: b.initial ?? b.name.trim().charAt(0).toUpperCase(),
  tag:     b.tag ?? `C${i + 1}`,
}));

/* =============================================================
   5. RENDER BOT LIST
   ============================================================= */
function renderBots() {
  const wrap = document.getElementById("botList");
  wrap.innerHTML = "";
  botsResolved.forEach((bot) => {
    const a = document.createElement("a");
    a.className = "bot-card";
    a.href = buildWaLink(bot.number);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <div class="bot-dot">${bot.initial}</div>
      <div class="bot-body">
        <div class="bot-row1">
          <span class="bot-name">${bot.name}</span>
          <span class="bot-tag">${bot.tag}</span>
        </div>
        <div class="bot-num">+${normalizeNumber(bot.number)}</div>
      </div>
      <span class="bot-arrow">→</span>
    `;
    wrap.appendChild(a);
  });
}

/* =============================================================
   6. RENDER MENU
   ============================================================= */
const menuList = document.getElementById("menuList");
const chipsEl  = document.getElementById("chips");
const searchEl = document.getElementById("search");
const appEl    = document.getElementById("app");

let activeCat = "ALL";
const collapsed = new Set();

// Hitung total & tampilkan stats
let totalCmds = 0;
for (const k in MENU) totalCmds += MENU[k].commands.length;
document.getElementById("statTotal").innerHTML = `<span class="v">${totalCmds}</span> command`;
document.getElementById("statCat").innerHTML   = `<span class="v">${Object.keys(MENU).length}</span> kategori`;

// Isi global note dari JS (biar gampang diedit di 1 tempat)
document.getElementById("globalNote").innerHTML = GLOBAL_NOTE_HTML;

function buildChips() {
  const all = ["ALL", ...Object.keys(MENU)];
  chipsEl.innerHTML = "";
  for (const cat of all) {
    const chip = document.createElement("div");
    chip.className = "chip" + (cat === activeCat ? " active" : "");
    chip.textContent = cat === "ALL"
      ? `semua · ${totalCmds}`
      : `${cat.toLowerCase()} · ${MENU[cat].commands.length}`;
    chip.onclick = () => {
      activeCat = cat;
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderMenu();
    };
    chipsEl.appendChild(chip);
  }
}

function renderMenu() {
  const q = searchEl.value.trim().toLowerCase();
  menuList.innerHTML = "";

  let shown = 0;
  for (const [cat, data] of Object.entries(MENU)) {
    if (activeCat !== "ALL" && activeCat !== cat) continue;

    const filtered = q
      ? data.commands.filter(c => c.toLowerCase().includes(q))
      : data.commands;

    if (filtered.length === 0) continue;
    shown += filtered.length;

    const isCollapsed = collapsed.has(cat);

    const wrap = document.createElement("div");
    wrap.className = "category" + (isCollapsed ? " collapsed" : "");

    const head = document.createElement("div");
    head.className = "cat-head";
    head.innerHTML = `
      <div class="cat-title">
        <span class="cat-emoji">${data.emoji}</span>
        <span>${cat}</span>
      </div>
      <div class="cat-right">
        <span class="cat-count">${filtered.length}</span>
        <span class="cat-toggle">▼</span>
      </div>
    `;
    head.onclick = () => {
      if (collapsed.has(cat)) collapsed.delete(cat);
      else collapsed.add(cat);
      wrap.classList.toggle("collapsed");
    };

    const body = document.createElement("div");
    body.className = "cat-body";

    for (const cmd of filtered) {
      const el = document.createElement("div");
      el.className = "cmd";
      el.innerHTML = `
        <span class="name"><span class="dot">.</span>${cmd}</span>
        <span class="copy-hint">copy</span>
      `;
      el.onclick = async () => {
        const text = `.${cmd}`;
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        el.classList.add("copied");
        el.querySelector(".copy-hint").textContent = "copied";
        setTimeout(() => {
          el.classList.remove("copied");
          el.querySelector(".copy-hint").textContent = "copy";
        }, 1100);
      };
      body.appendChild(el);
    }

    wrap.appendChild(head);
    wrap.appendChild(body);
    menuList.appendChild(wrap);
  }

  if (shown === 0) {
    menuList.innerHTML = `
      <div class="empty">
        <strong>Tidak ada hasil</strong>
        Coba kata kunci lain atau ganti filter kategori.
      </div>
    `;
  }
}

/* =============================================================
   7. MOBILE TABS + SHORTCUT
   ============================================================= */
document.querySelectorAll(".mobile-tabs button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".mobile-tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    appEl.setAttribute("data-view", btn.dataset.tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

let t;
searchEl.addEventListener("input", () => {
  clearTimeout(t);
  t = setTimeout(renderMenu, 90);
});

document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchEl.focus();
    searchEl.select();
  }
});

/* =============================================================
   8. INIT
   ============================================================= */
renderBots();
buildChips();
renderMenu();
