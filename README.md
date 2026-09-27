# ⚡ Rimuru-MD Official Portal & Command Directory

Portal web modern dan responsif untuk katalog perintah WhatsApp Bot **Rimuru-MD**. Menyediakan daftar bot WhatsApp aktif yang dapat langsung di-chat serta katalog perintah lengkap dengan pencarian instan dan fitur salin otomatis.

---

## 🚀 Fitur Utama

- **Pilihan Multi-Bot WhatsApp**: Menampilkan daftar bot yang tersedia (With codename). Memilih salah satu bot akan secara otomatis mengarahkan seluruh tautan pesan ke bot tersebut.
- **Katalog Menu Lengkap (40+ Kategori, 1.400+ Perintah)**: Terindeks lengkap mulai dari AI, Game, RPG, Tools, Downloader, Canvas, hingga Group Management.
- **Pencarian Cepat & Shortcut**: Pencarian real-time dengan filter instan dan pintasan keyboard `Ctrl + K` / `⌘K`.
- **One-Click Copy & Direct WhatsApp Send**:
  - Klik nama perintah untuk menyalin perintah ke clipboard (dengan notifikasi toast).
  - Tombol ikon WhatsApp di samping perintah untuk langsung membuka WhatsApp dengan perintah yang sudah terisi otomatis ke bot target.
- **Desain Cyber-Glassmorphism Responsif**: Tampilan gelap (*Dark Obsidian*) modern yang nyaman dilihat, dengan navigasi mobile adaptif (*Pilih Bot* & *Daftar Menu*).

---

## 📁 Struktur File

```text
botwa-link/
├── index.html        # Struktur antarmuka web utama
├── style.css         # Styling CSS & konfigurasi tema responsif
├── app.js            # Data bot, katalog menu, dan logika interaktif
├── menu-origin.txt   # Sumber data mentah daftar perintah bot
└── README.md         # Dokumentasi dan panduan penggunaan
```

---

## 🛠️ Panduan Kustomisasi & Tutorial

Semua konfigurasi bot dan menu berada di bagian atas file [`app.js`](file:///d:/BotWa/botwa-link/app.js).

### 1. Cara Menambah atau Mengubah Nomor Bot

Buka file [`app.js`](file:///d:/BotWa/botwa-link/app.js), cari array `BOTS` di baris paling atas:

```javascript
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
```

#### ➕ Menambahkan Bot Baru:
Tambahkan objek baru ke dalam array `BOTS`:
```javascript
  {
    name: 'Kuro',             // Nama bot
    number: '6281234567890',  // Nomor WhatsApp (bisa 628xx atau 08xx)
    tag: 'C4'                 // Label server / channel
  }
```

> **Tips**: Format nomor telepon otomatis disesuaikan oleh sistem menjadi tautan resmi `wa.me`.

---

### 2. Cara Menambah Kategori Menu Baru

Buka file [`app.js`](file:///d:/BotWa/botwa-link/app.js), cari objek `MENU`:

```javascript
const MENU = {
  // Tambahkan kategori baru di sini:
  "EVENT": {
    "emoji": "🎉",
    "commands": [
      "giveaway",
      "hadiah",
      "klaimkupon"
    ]
  },

  "MAIN": {
    "emoji": "⚡",
    "commands": [ ... ]
  },
  ...
};
```

---

### 3. Cara Menambah Perintah ke Kategori yang Sudah Ada

Buka file [`app.js`](file:///d:/BotWa/botwa-link/app.js), cari nama kategori yang ingin ditambahkan (contoh: `"TOOLS"` atau `"AI"`), lalu tambahkan nama perintah baru di dalam array `commands` **tanpa tanda titik**:

```javascript
  "TOOLS": {
    "emoji": "🔧",
    "commands": [
      "alultimate",
      "ambulk",
      "fiturbaru", // 👈 Cukup tambahkan nama perintah di sini
      ...
    ]
  }
```

---

### 4. Cara Mengaktifkan / Menonaktifkan Kategori (Contoh: NSFW)

Kategori tertentu dapat dinonaktifkan dengan cara di-comment:

- **Untuk Menutup / Menonaktifkan Kategori**:
  Bungkus blok kategori dengan tanda `/*` dan `*/`:
  ```javascript
  /*
  "NSFW": {
    "emoji": "🔞",
    "commands": [
      "fitur1",
      "fitur2",
      "fitur3"
    ]
  },
  */
  ```

- **Untuk Mengaktifkan Kembali**:
  Hapus tanda pembuka `/*` dan tanda penutup `*/` pada blok tersebut.

---

## 🌐 Cara Menjalankan Website

Website ini murni berbasis **Vanilla HTML, CSS, dan JavaScript**, sehingga tidak memerlukan instalasi runtime khusus:

1. **Buka Langsung di Browser**:
   Cukup klik dua kali file [`index.html`](file:///d:/BotWa/botwa-link/index.html).

2. **Menggunakan Local Server (VS Code / Node.js / Python)**:
   - Menggunakan VS Code ekstensi **Live Server**.
   - Atau menggunakan Node.js:
     ```bash
     npx serve .
     ```
   - Atau menggunakan Python:
     ```bash
     python -m http.server 8080
     ```

3. **Deploy Online**:
   Dapat langsung diunggah ke layanan hosting statis gratis seperti **GitHub Pages**, **Vercel**, **Cloudflare Pages**, atau **Netlify**.
