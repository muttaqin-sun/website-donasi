import React, { useEffect } from 'react';
import './PageStyles.css';
import './Transparency.css';
import Newsletter from '../components/Newsletter';
import { PieChart, TrendingUp, CheckCircle, RefreshCw } from 'lucide-react';

const Transparency = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="info-page">
            <div className="page-hero-banner text-center" style={{ marginBottom: "3rem" }}>
                <div className="container banner-content">
                    <h1>Laporan Transparansi</h1>
                    <p>Komitmen kami untuk memberikan pelaporan dana yang jelas dan dapat dipertanggungjawabkan.</p>
                </div>
            </div>

            <div className="container main-container">

                <section className="info-section text-center about-intro">
                    <p className="lead-text">
                        PeduliBersama menjunjung tinggi prinsip akuntabilitas. Kami memastikan bahwa setiap Rupiah yang didonasikan oleh Anda dapat dilacak penyalurannya demi membangun ekosistem filantropi yang sehat.
                    </p>
                </section>

                {/* Dashboard Stats */}
                <div className="dashboard-grid">
                    <div className="dash-card">
                        <div className="icon-badge bg-blue"><TrendingUp size={24} /></div>
                        <h3>Total Dana Terkumpul</h3>
                        <p className="amount">Rp 12.540.000.000</p>
                        <span className="desc">Total kumulatif sejak platform didirikan</span>
                    </div>

                    <div className="dash-card">
                        <div className="icon-badge bg-green"><CheckCircle size={24} /></div>
                        <h3>Dana yang Telah Disalurkan</h3>
                        <p className="amount">Rp 10.320.000.000</p>
                        <span className="desc">Telah dicairkan untuk kebutuhan program</span>
                    </div>

                    <div className="dash-card">
                        <div className="icon-badge bg-orange"><RefreshCw size={24} /></div>
                        <h3>Program Sedang Berjalan</h3>
                        <p className="amount">320 Program</p>
                        <span className="desc">Proses penggalangan dana masih berlangsung</span>
                    </div>

                    <div className="dash-card">
                        <div className="icon-badge bg-teal"><PieChart size={24} /></div>
                        <h3>Program Telah Selesai</h3>
                        <p className="amount">1,250 Program</p>
                        <span className="desc">Dana sudah 100% diterima pihak terkait</span>
                    </div>
                </div>

                <div className="content-wrapper">
                    <h2>Mekanisme Transparansi PeduliBersama</h2>

                    <h3>1. Alokasi 0% Biaya Platform</h3>
                    <p>PeduliBersama <b>tidak memotong persentase apa pun</b> dari donasi yang dikumpulkan sebagai biaya operasional platform. Satu-satunya pemotongan yang terjadi murni karena kebijakan tarif pihak ketiga (Payment Gateway) sebesar 1-2% untuk pemrosesan metode pembayaran digital.</p>

                    <h3>2. Cek Laporan Berkala (Update)</h3>
                    <p>Penggalang dana diwajibkan untuk mengunggah kabar terbaru (*Update*) secara berkala, lengkap dengan bukti foto nota pembayaran Rumah Sakit, bukti pembelian material yatim, kuitansi logistik bencana, atau dokumentasi penyaluran lainnya agar dana sisa dapat dicairkan.</p>

                    <h3>3. Audit Eksternal</h3>
                    <p>Catatan keuangan dan transaksi PeduliBersama diaudit setiap akhir tahun finansial oleh Kantor Akuntan Publik (KAP) independen untuk memastikan kelayakan pencatatan arus dana titipan amal masyarakat.</p>
                </div>

            </div>

            <Newsletter />
        </div>
    );
};

export default Transparency;
