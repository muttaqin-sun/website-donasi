# Akcel Crowdfunding - Website Donasi (Frontend)

Platform website donasi ini dibangun menggunakan React.js dan Vite, dengan menggunakan Vanilla CSS untuk memastikan fleksibilitas dan performa desain.

## Teknologi yang Digunakan
- **React.js** (UI Library)
- **Vite** (Build Tool)
- **React Router DOM** (Navigasi)
- **Lucide React** (Ikon)
- **Vanilla CSS** (Styling)

## Struktur Folder

```
src/
├── components/          # Komponen UI yang dapat digunakan kembali
│   ├── CampaignCard.jsx # Kartu untuk setiap kampanye
│   ├── CampaignCard.css
│   ├── Footer.jsx       # Bagian footer bawah
│   ├── Footer.css
│   ├── Navbar.jsx       # Navigasi atas
│   ├── Navbar.css
│   ├── Newsletter.jsx   # Form langganan email
│   ├── Newsletter.css
│   ├── Pagination.jsx   # Komponen penomoran halaman
│   ├── Pagination.css
│   ├── SearchBar.jsx    # Fitur pencarian dan filter
│   └── SearchBar.css
├── pages/               # Halaman utama rute aplikasi
│   ├── CampaignDetail.jsx
│   ├── Fundraiser.jsx   # Halaman utama daftar kampanye
│   ├── Fundraiser.css
│   └── Home.jsx
├── services/            # Integrasi API (mock)
│   └── api.js
├── App.jsx              # Pengaturan rute utama
├── main.jsx             # Titik masuk aplikasi React
└── index.css            # Variabel CSS global & pengaturan dasar
```

## Prasyarat
Pastikan Anda sudah menginstal sistem berikut di komputer Anda:
- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru disarankan)
- npm (Node Package Manager)

## Panduan Instalasi dan Menjalankan Proyek

1. **Buka Terminal / Command Prompt**
   Navigasikan ke direktori proyek ini:
   ```bash
   cd "d:\Website Donasi"
   ```

2. **Instal Dependensi**
   Jalankan perintah berikut untuk mengunduh semua paket yang dibutuhkan:
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi secara Lokal (Development Server)**
   Setelah proses instalasi selesai, mulai *development server* Vite dengan perintah ini:
   ```bash
   npm run dev
   ```

4. **Akses Website**
   Vite akan memberikan URL lokal pada terminal (biasanya `http://localhost:5173`). Buka URL tersebut di browser (Google Chrome, Firefox, dll) Anda.

## Arsitektur API (Persiapan Backend)
Proyek ini sudah disiapkan dengan sebuah file `src/services/api.js`. File ini saat ini menghasilkan mock data yang menyerupai respons REST API, agar desain kampanye dapat ditinjau.

Ketika backend Node.js dan Express.js Anda telah siap di kemudian hari, Anda cukup mengubah fungsi `fetchCampaigns` di dalam file tersebut untuk melakukan proses HTTP request (menggunakan `fetch` atau `axios`) ke server/database MySQL Anda.

*Desain ini dibuat secara eksklusif menggunakan Bahasa Indonesia, responsif menyesuaikan perangkat (mobile-friendly), interaktif (hover state), tanpa plugin UI framework*.
