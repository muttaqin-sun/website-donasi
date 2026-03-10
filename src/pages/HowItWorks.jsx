import React, { useEffect } from 'react';
import './PageStyles.css';
import './HowItWorks.css';
import Newsletter from '../components/Newsletter';
import { Target, Banknote, HelpCircle, CheckCircle, Share2, ClipboardList, PenTool, SearchCheck, Rocket, HandHeart } from 'lucide-react';

const HowItWorks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const donorSteps = [
        { title: "Pilih Program Donasi", desc: "Temukan kampanye atau program sosial yang paling menggerakkan hati Anda di halaman Fundraiser.", icon: <Target size={28} /> },
        { title: "Tentukan Jumlah Donasi", desc: "Masukkan nominal donasi yang ingin Anda berikan, baik itu nominal pasti atau Top Up sesuai kerelaan hati.", icon: <Banknote size={28} /> },
        { title: "Pilih Metode Pembayaran", desc: "Tersedia berbagai metode pembayaran dari Transfer Bank, E-Wallet, hingga Gerai Retail terdekat.", icon: <HelpCircle size={28} /> },
        { title: "Selesaikan Pembayaran", desc: "Ikuti instruksi pembayaran di layar dan selesaikan transaksi dengan aman dan instan.", icon: <CheckCircle size={28} /> },
        { title: "Terima Update Program", desc: "Dapatkan notifikasi dan pantau terus perkembangan serta penyaluran dana dari kampanye yang Anda dukung.", icon: <Share2 size={28} /> }
    ];

    const fundraiserSteps = [
        { title: "Daftar Akun", desc: "Buat akun pengguna secara gratis di platform PeduliBersama dengan email yang valid.", icon: <ClipboardList size={28} /> },
        { title: "Buat Halaman Campaign", desc: "Tuliskan rincian kampanye, tujuan donasi, target dana, dan unggah foto sebagai bukti yang jelas.", icon: <PenTool size={28} /> },
        { title: "Tunggu Proses Verifikasi", desc: "Tim verifikator kami akan meninjau dan memastikan keabsahan dokumen serta keaslian cerita Anda.", icon: <SearchCheck size={28} /> },
        { title: "Campaign Dipublikasikan", desc: "Setelah lolos verifikasi, halaman Anda akan aktif dan bisa langsung dibagikan ke media sosial.", icon: <Rocket size={28} /> },
        { title: "Dana Disalurkan", desc: "Dana yang terkumpul dapat dicairkan secara bertahap sesuai dengan transparansi kebutuhan program.", icon: <HandHeart size={28} /> }
    ];

    return (
        <div className="info-page">
            <div className="page-hero-banner text-center">
                <div className="container banner-content">
                    <h1>Cara Kerja</h1>
                    <p>Mekanisme mudah, aman, dan transparan dalam menebar kebaikan.</p>
                </div>
            </div>

            <div className="container main-container">
                <div className="how-it-works-grid">

                    {/* Donor Section */}
                    <div className="step-column donor-column">
                        <div className="column-header">
                            <h2>Untuk Donatur</h2>
                            <p>Cara menyalurkan bantuan</p>
                        </div>
                        <div className="step-list">
                            {donorSteps.map((step, index) => (
                                <div className="step-item" key={index}>
                                    <div className="step-number">{index + 1}</div>
                                    <div className="step-icon-box">{step.icon}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fundraiser Section */}
                    <div className="step-column fundraiser-column">
                        <div className="column-header">
                            <h2>Untuk Penggalang Dana</h2>
                            <p>Cara memulai kampanye terbuka</p>
                        </div>
                        <div className="step-list">
                            {fundraiserSteps.map((step, index) => (
                                <div className="step-item" key={index}>
                                    <div className="step-number">{index + 1}</div>
                                    <div className="step-icon-box">{step.icon}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default HowItWorks;
