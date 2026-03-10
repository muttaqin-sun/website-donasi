import React, { useState, useEffect } from 'react';
import './PageStyles.css';
import './FAQ.css';
import Newsletter from '../components/Newsletter';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // first item open by default

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "Apakah berdonasi di platform ini benar-benar aman?",
            a: "Ya, sangat aman. Semua transaksi dilakukan menggunakan Payment Gateway resmi yang diawasi oleh Bank Indonesia. Selain itu, setiap penggalang dana wajib melewati tahapan verifikasi dokumen identitas untuk meminimalisasi penyalahgunaan."
        },
        {
            q: "Metode pembayaran apa saja yang saat ini tersedia?",
            a: "Kami menyediakan berbagai macam pembayaran. Anda bisa berdonasi menggunakan Bank Transfer otomatis (BCA, BNI, Mandiri, BRI), E-Wallet (GoPay, OVO, LinkAja, DANA), hingga pembayaran di minimarket seperti (Indomaret dan Alfamart)."
        },
        {
            q: "Apakah saya bisa menyumbang secara anonim tanpa identitas (Hamba Allah)?",
            a: "Tentu saja. Di halaman checkout donasi Anda bisa mengaktifkan centang 'Sembunyikan nama saya (Hamba Allah)'. Nama dan identitas Anda tidak akan ditampilkan di daftar donator publik, meski platform tetap mencatat data internal untuk transparansi lalu-lintas dana."
        },
        {
            q: "Apakah ada biaya administrasi tambahan saat mendonasi?",
            a: "Platform mendedikasikan transparansi penuh. Kami tidak memotong dana sepeser pun untuk administrasi pengembangan, namun akan ada biaya yang dipotong langsung oleh Payment Gateway sebesar ~2% tergantung metode pembayaran Anda, selebihnya 100% dana langsung disalurkan ke pasien."
        },
        {
            q: "Bagaimana cara mencairkan dana sebagai penggalang dana?",
            a: "Dana dapat ditarik secara parsial setelah kampanye mulai berjalan dengan melampirkan laporan perkembangan ke mana dana tersebut telah digunakan. Proses penarikan membutuhkan verifikasi admin selama 1-2 hari kerja."
        },
        {
            q: "Apakah saya perlu memiliki yayasan berbentuk hukum untuk membuat penggalangan dana?",
            a: "Tidak harus! Kampanye dapat dibuat atas nama individu/pribadi. Namun, bagi pengguna atas nama Yayasan, proses verifikasi harus menyertakan Akta Pendirian dan sertifikat resmi agar akun mendapat lencana Valid."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="info-page">
            <div className="page-hero-banner text-center" style={{ marginBottom: "2rem" }}>
                <div className="container banner-content">
                    <h1>Sering Ditanyakan (FAQ)</h1>
                    <p>Temukan jawaban cepat atas kebingungan dan pertanyaan seputar donasi.</p>
                </div>
            </div>

            <div className="container main-container">
                <div className="faq-wrapper">
                    <div className="faq-list">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                                    <div className="faq-question" onClick={() => toggleAccordion(index)}>
                                        <h3>{faq.q}</h3>
                                        <div className="faq-toggle-icon">
                                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="faq-answer">
                                            <p>{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default FAQ;
