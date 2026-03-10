import React, { useEffect } from 'react';
import './PageStyles.css';
import Newsletter from '../components/Newsletter';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="info-page">
            <div className="page-hero-banner text-center" style={{ marginBottom: "3rem" }}>
                <div className="container banner-content">
                    <h1>Kebijakan Privasi</h1>
                    <p>Komitmen kami untuk melindungi dan mengamankan data informasi pengguna Anda.</p>
                </div>
            </div>

            <div className="container main-container">
                <div className="content-wrapper">
                    <h2>Keselamatan Data Anda Prioritas Kami</h2>
                    <p>Halaman ini menjelaskan bagaimana PeduliBersama mengumpulkan, menyimpan, serta menggunakan data pribadi pengguna di aplikasi kami.</p>

                    <h2>1. Data Apa yang Kami Kumpulkan?</h2>
                    <ul>
                        <li>Data Registrasi Akun: Seperti nama awal/akhir, alamat e-mail aktif, kata sandi terenkripsi, foto profil.</li>
                        <li>Data Profil Publik: Tautan media sosial spesifik dan riwayat kampanye, biografi singkat.</li>
                        <li>Informasi Identitas KTP/Paspor (Hanya bagi Penggalang Dana yang mengajukan verifikasi formal).</li>
                        <li>Data Penggunaan Layanan: IP address perangkat, informasi penjelajahan di website kami via Log System internal.</li>
                    </ul>

                    <h2>2. Bagaimana Data Digunakan?</h2>
                    <ul>
                        <li>Proses Administrasi: Memastikan sumbangan yang Anda setorkan betul-betul sah (mencegah pencucian uang).</li>
                        <li>Notifikasi Transaksional: Berkomunikasi via email apabila tagihan pending, kampanye berhasil, dsb.</li>
                        <li>Personalisasi: Rekomendasi program kampanye donasi lokal sesuai dengan minat masa lalu Anda secara anonim.</li>
                    </ul>

                    <h2>3. Bagaimana Data Disimpan?</h2>
                    <p>Semua transmisi menggunakan protokol SSL Transport Layer (https) setara standar Bank. File rahasia berupa kelengkapan Verifikasi disimpan dalam pangkalan data (database) yang terenkripsi dan terproteksi dari akses pihak ketiga luar.</p>

                    <h2>4. Perlindungan Data Pengguna</h2>
                    <p>Kami <b>tidak membagi-bagikan (menjual maupun menukarkan) data pribadi</b> donatur mapun penggalang dana ke pihak pemasang iklan pihak kelima tanpa seizin Anda. Seluruh hak cipta Privasi pengguna dikendalikan oleh Anda, Anda berhak sepenuhnya menghapus akun beserta seluruh data pribadi secara manual sewaktu-waktu (Hak Eksekusi Menghilang).</p>

                    <p><i>Terakhir diperbarui: 1 Januari 2026</i></p>
                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default Privacy;
