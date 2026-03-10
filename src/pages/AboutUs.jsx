import React, { useEffect } from "react";
import "./PageStyles.css"; // Shared CSS for text-heavy pages
import Newsletter from "../components/Newsletter";
import { Target, Heart, Users, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="info-page">
      <div className="page-hero-banner text-center">
        <div className="container banner-content">
          <h1>Tentang Kami</h1>
          <p>Mengenal lebih dekat perjalanan dan tujuan mulia PeduliBersama.</p>
        </div>
      </div>

      <div className="container main-container">
        <section className="info-section text-center about-intro">
          <h2>Platform Peduli Sesama</h2>
          <p className="lead-text">
            PeduliBersama hadir sebagai jembatan kebaikan, menghubungkan
            jiwa-jiwa dermawan yang ingin membantu dengan mereka yang sedang
            membutuhkan secercah harapan. Kami menyederhanakan proses donasi
            dengan keamanan dan transparansi penuh.
          </p>
        </section>

        <div className="vision-mission-grid">
          <div className="vision-box">
            <div className="icon-wrapper">
              <Globe size={32} color="var(--primary)" />
            </div>
            <h2>Visi Kami</h2>
            <p className="vision-text">
              "Mewujudkan masyarakat yang saling peduli dan membantu melalui
              pemanfaatan teknologi digital."
            </p>
          </div>

          <div className="mission-box">
            <div className="icon-wrapper">
              <Target size={32} color="var(--primary)" />
            </div>
            <h2>Misi Kami</h2>
            <ul className="mission-list">
              <li>
                Mempermudah masyarakat dalam menyalurkan donasi di mana saja dan
                kapan saja.
              </li>
              <li>
                Menyediakan platform donasi yang 100% transparan dan dapat
                dilacak.
              </li>
              <li>
                Membantu keberhasilan berbagai program sosial dan medis yang
                mendesak.
              </li>
              <li>
                Menghubungkan donatur dengan penggalang dana secara aman dan
                terverifikasi.
              </li>
            </ul>
          </div>
        </div>

        <section className="info-section stats-section">
          <h2 className="text-center">Dampak yang Telah Kita Buat</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">Rp 2.5M+</span>
              <span className="stat-label">Total Donasi Terkumpul</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">25,000+</span>
              <span className="stat-label">Jumlah Donatur Aktif</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">300</span>
              <span className="stat-label">Program Donasi Aktif</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1,150+</span>
              <span className="stat-label">Program Berhasil Didanai</span>
            </div>
          </div>
        </section>

        <div className="cta-section text-center">
          <h2>Mari Menjadi Bagian dari Perubahan</h2>
          <p>Ribuan orang sudah bergabung untuk membuat perbedaan nyata.</p>
          <Link to="/fundraiser" className="btn btn-primary cta-btn">
            Mulai Berdonasi Sekarang <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default AboutUs;
