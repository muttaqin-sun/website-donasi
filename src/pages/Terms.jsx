import React, { useEffect } from 'react';
import './PageStyles.css';
import Newsletter from '../components/Newsletter';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="info-page">
            <div className="page-hero-banner text-center" style={{ marginBottom: "3rem" }}>
                <div className="container banner-content">
                    <h1>Syarat dan Ketentuan</h1>
                    <p>Aturan penggunaan layanan platform PeduliBersama.</p>
                </div>
            </div>

            <div className="container main-container">
                <div className="content-wrapper">
                    <h2>Selamat Datang di PeduliBersama</h2>
                    <p>Dengan mengakses atau menggunakan platform donasi PeduliBersama, Anda dianggap telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan di bawah ini. Jika Anda tidak menyetujui, kami menyarankan untuk tidak menggunakan layanan ini.</p>

                    <h2>Ketentuan Penggunaan Platform</h2>
                    <ul>
                        <li>Platform ini ditujukan bagi individu, yayasan, dan organisasi nirlaba untuk mengumpulkan maupun menyalurkan donasi.</li>
                        <li>Pengguna dilarang keras menggunakan website ini untuk tindakan penipuan, pencucian uang, terorisme, atau melanggar hukum positif yang berlaku di Republik Indonesia.</li>
                        <li>Pengguna harus berusia minimal 18 tahun untuk dapat menjadi Penggalang Dana.</li>
                    </ul>

                    <h2>Tanggung Jawab Pengguna (Donatur)</h2>
                    <ul>
                        <li>Donatur diwajibkan untuk mereview detail kampanye sebelum melakukan penyaluran dana.</li>
                        <li>Dana yang telah didonasikan dan diproses dalam sistem tidak dapat dibatalkan (non-refundable) kecuali terbukti ada kecurangan kampanye yang dihentikan oleh admin.</li>
                        <li>Donatur tidak berhak menuntut bagian, keuntungan, atau kompensasi materi atas donasi yang telah diberikan.</li>
                    </ul>

                    <h2>Aturan Pembuatan Campaign</h2>
                    <ul>
                        <li>Penggalang dana menjamin bahwa segala cerita, foto, medis, dan dokumen yang disertakan adalah valid dan asli 100%.</li>
                        <li>Dilarang menggunakan bahasa yang provokatif, memicu kebencian (SARA), maupun visual yang terlalu mengganggu tanpa sensor.</li>
                        <li>Admin berhak menutup kampanye yang terindikasi penipuan atau jika terdapat laporan mayoritas dari pengguna lain.</li>
                    </ul>

                    <h2>Kebijakan Penarikan Donasi</h2>
                    <p>Penarikan dana oleh Penggalang Dana harus menyertakan kelengkapan dan kewajaran Rincian Penggunaan Dana. Platform akan melepaskan dana secara bertahap dalam kurun waktu 1 - 2 hari kerja mengikuti antrean verifikasi.</p>

                    <p><i>Terakhir diperbarui: 1 Januari 2026</i></p>
                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default Terms;
