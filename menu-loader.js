/**
 * Rimuru-MD Menu Loader & Parser
 * File dedicated untuk membaca, mem-parsing, dan me-mirror file .txt menu
 * (seperti something.txt atau menu-origin.txt) ke struktur data menu web dashboard.
 * 
 * Penggunaan via Node.js CLI:
 *   node menu-loader.js                     (Membaca something.txt & meng-update app.js)
 *   node menu-loader.js something.txt app.js
 *   node menu-loader.js --json              (Ekspor ke menu.json)
 * 
 * Penggunaan via Browser / Script Tag:
 *   <script src="menu-loader.js"></script>
 *   const menu = MenuLoader.parseMenuText(rawTxtString);
 */

(function (global) {
  // 1. DAFTAR EMOJI RESMI UNTUK SETIAP KATEGORI
  const CATEGORY_EMOJIS = {
    "MAIN": "⚡",
    "UTILITY": "🛠️",
    "TOOLS": "🔧",
    "FUN": "🎭",
    "GAME": "🎮",
    "DOWNLOAD": "📥",
    "SEARCH": "🔍",
    "STICKER": "🎨",
    "MEDIA": "🎬",
    "AI": "🤖",
    "GROUP": "👥",
    "RELIGI": "🌙",
    "INFO": "ℹ️",
    "CEK": "🔎",
    "ECONOMY": "💰",
    "USER": "👤",
    "CANVAS": "🖼️",
    "RANDOM": "🎲",
    "PREMIUM": "⭐",
    "MAKER": "✂️",
    "INTERNET": "🌍",
    "ANIME": "⛩️",
    "CLAN": "🛡️",
    "COLORGRADE": "🌈",
    "CONVERT": "🔄",
    "ELAINA": "🧙‍♀️",
    "EPHOTO": "📸",
    "RPG": "⚔️",
    "JPM": "📢",
    "MUSIC": "🎵",
    "VPS": "🖥️",
    "PRIMBON": "🔮",
    "QUOTES": "💬",
    "STALKER": "🕵️",
    "TTS": "🗣️",
    "ASUPAN": "📱",
    "DOWNLOADER": "⬇️",
    "DOWNLOADS": "💾",
    "GENERAL": "🌐",
    "IMAGE": "📷",
    "ISLAMIC": "🕌",
    "MEGAMI": "✨",
    "OTHER": "📦",
    "RIOO": "💎",
    "STORE": "🏪",
    "STORE_AUTOORDER": "🛒",
    "NSFW": "🔞"
  };

  /**
   * Parse teks mentah WhatsApp bot menu ke dalam object JavaScript MENU
   * @param {string} text - Isi teks dari file .txt
   * @returns {Object} Object menu dengan format { KATEGORI: { emoji, commands } }
   */
  function parseMenuText(text) {
    if (!text || typeof text !== 'string') return {};

    const lines = text.split(/\r?\n/);
    const menu = {};
    let currentCat = null;

    for (let rawLine of lines) {
      const line = rawLine.trim();

      // Deteksi Header Kategori, contoh: ╭➤--「MAIN MENU 」 atau ╭─「TOOLS MENU」
      const catMatch = line.match(/^[╭┌].*?[「\[](.*?)[」\]]/);
      if (catMatch) {
        let catName = catMatch[1]
          .replace(/\s*MENU\s*$/i, '')
          .trim()
          .toUpperCase();

        if (catName) {
          currentCat = catName;
          if (!menu[currentCat]) {
            menu[currentCat] = {
              emoji: CATEGORY_EMOJIS[currentCat] || '✨',
              commands: []
            };
          }
        }
        continue;
      }

      // Deteksi Garis Penutup Kategori, contoh: ╰➤-------------------------------
      if (line.startsWith('╰') || line.startsWith('└')) {
        currentCat = null;
        continue;
      }

      // Deteksi Command, contoh: ┆ ⇝ .allmenu, ┆ ⇝ .sapa 🅖, ┆ ⇝ .sulap 🅐 🅖
      const cmdMatch = line.match(/^[┆│|]?\s*[⇝>•\-*]?\s*\.?(.*)/);
      if (cmdMatch && currentCat && (line.includes('⇝') || /^[┆│|]/.test(line))) {
        const rawCmdPart = cmdMatch[1].trim();
        if (!rawCmdPart) continue;

        // Tangani jika ada beberapa alias dipisah koma dalam satu baris (misal: anime-waifu, waifu-anime)
        const tokens = rawCmdPart.includes(',') ? rawCmdPart.split(',') : [rawCmdPart];

        for (let t of tokens) {
          // Bersihkan seluruh karakter badge Unicode:
          // - Enclosed Alphanumeric Supplement (U+1F100 - U+1F1FF): 🅐-🅩, 🅰-🆉, 🅛, 🅟, 🅞, 🅖, 🅐, 🅡, dll.
          // - Enclosed Alphanumerics (U+2460 - U+24FF): Ⓐ-Ⓩ, ⓐ-ⓩ, ①-⑳, dll.
          let cmdName = t.replace(/[\u{1F100}-\u{1F1FF}\u{2460}-\u{24FF}]/gu, '').trim();

          // Ambil nama perintah utama (token pertama sebelum spasi/badge tersisa)
          if (cmdName.includes(' ')) {
            cmdName = cmdName.split(/\s+/)[0].trim();
          }

          // Hilangkan tanda prefix titik di depan jika ada
          cmdName = cmdName.replace(/^[./#!]+/, '').trim();

          // Abaikan command tidak valid / kosong / halusinasi dump
          if (!cmdName || cmdName.includes('${') || cmdName.toLowerCase() === '3 day premium') {
            continue;
          }

          if (!menu[currentCat].commands.includes(cmdName)) {
            menu[currentCat].commands.push(cmdName);
          }
        }
      }
    }

    return menu;
  }

  /**
   * Helper untuk menghitung statistik menu
   * @param {Object} menu 
   * @returns {Object} { totalCategories, totalCommands }
   */
  function getMenuStats(menu) {
    const categories = Object.keys(menu);
    let totalCommands = 0;

    for (const cat of categories) {
      const cmds = menu[cat].commands || [];
      totalCommands += cmds.length;
    }

    return {
      totalCategories: categories.length,
      totalCommands
    };
  }

  /**
   * Fetch file .txt secara async dan parse ke object menu (untuk environment browser / live server)
   * @param {string} url - URL atau relative path ke file .txt
   * @returns {Promise<Object>}
   */
  async function fetchAndLoadMenu(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Gagal membaca file menu: ${res.status} ${res.statusText}`);
    }
    const text = await res.text();
    return parseMenuText(text);
  }

  // Export untuk browser
  const MenuLoader = {
    CATEGORY_EMOJIS,
    parseMenuText,
    getMenuStats,
    fetchAndLoadMenu
  };

  if (typeof module !== 'undefined' && module.exports) {
    // Environment Node.js
    module.exports = MenuLoader;

    // Node.js CLI Execution
    if (require.main === module) {
      const fs = require('fs');
      const path = require('path');

      const args = process.argv.slice(2);
      const isJsonExport = args.includes('--json');
      const filteredArgs = args.filter(a => !a.startsWith('--'));

      const inputTxt = filteredArgs[0] || 'something.txt';
      const targetJs = filteredArgs[1] || 'app.js';

      const inputPath = path.resolve(process.cwd(), inputTxt);
      if (!fs.existsSync(inputPath)) {
        console.error(`❌ File input tidak ditemukan: ${inputPath}`);
        process.exit(1);
      }

      console.log(`📖 Membaca menu dari: ${inputTxt}...`);
      const rawText = fs.readFileSync(inputPath, 'utf8');
      const menu = parseMenuText(rawText);
      const stats = getMenuStats(menu);

      console.log(`✅ Berhasil mem-parsing:`);
      console.log(`   - Total Kategori : ${stats.totalCategories}`);
      console.log(`   - Total Perintah : ${stats.totalCommands}`);
      console.log(`   - Status Badge   : Dinormalisasi (bebas corrupt/simbol aneh)`);

      if (isJsonExport) {
        const outJson = path.resolve(process.cwd(), 'menu.json');
        fs.writeFileSync(outJson, JSON.stringify(menu, null, 2), 'utf8');
        console.log(`💾 Data menu berhasil diekspor ke: ${outJson}`);
      } else {
        const targetPath = path.resolve(process.cwd(), targetJs);
        if (!fs.existsSync(targetPath)) {
          console.error(`❌ File target ${targetJs} tidak ditemukan.`);
          process.exit(1);
        }

        console.log(`🔄 Me-mirror data menu ke ${targetJs}...`);
        const appJsContent = fs.readFileSync(targetPath, 'utf8');
        const eol = appJsContent.includes('\r\n') ? '\r\n' : '\n';

        // Format objek MENU ke string JavaScript rapi
        let menuStr = 'const MENU = {' + eol;
        const cats = Object.keys(menu);
        cats.forEach((cat, cIdx) => {
          const catData = menu[cat];
          menuStr += `  "${cat}": {` + eol;
          menuStr += `    "emoji": "${catData.emoji}",` + eol;
          menuStr += `    "commands": [` + eol;
          catData.commands.forEach((cmd, mIdx) => {
            const isLastCmd = mIdx === catData.commands.length - 1;
            menuStr += `      ${JSON.stringify(cmd)}${isLastCmd ? '' : ','}` + eol;
          });
          menuStr += `    ]` + eol;
          menuStr += `  }${cIdx === cats.length - 1 ? '' : ','}` + eol;
        });
        menuStr += '};';

        // Ganti block const MENU = { ... }; di app.js
        const menuRegex = /const MENU = \{[\s\S]*?\r?\n\};/;
        if (!menuRegex.test(appJsContent)) {
          console.error(`❌ Tidak dapat menemukan deklarasi "const MENU = { ... };" di ${targetJs}`);
          process.exit(1);
        }

        const updatedAppJs = appJsContent.replace(menuRegex, menuStr);
        fs.writeFileSync(targetPath, updatedAppJs, 'utf8');
        console.log(`✨ Sukses! ${targetJs} berhasil di-mirror dengan data terbaru dari ${inputTxt}!`);
      }
    }
  } else {
    // Environment Browser
    global.MenuLoader = MenuLoader;
  }
})(typeof window !== 'undefined' ? window : globalThis);
