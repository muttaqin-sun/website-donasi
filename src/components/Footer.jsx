import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col about-col">
          <Link to="/" className="footer-logo">
            <div className="logo-icon">
              <Heart size={20} color="white" fill="white" />
            </div>
            <span className="logo-text">
              PeduliBersama
              <br />
              <small>Gerakan Kepedulian Kolektif</small>
            </span>
          </Link>
          <p className="footer-desc">
            PeduliBersama adalah Website Crowdfunding & Amal untuk mendesain
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <Facebook size={18} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={18} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={18} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-title">Sumber Daya</h4>
          <ul className="footer-links">
            <li>
              <Link to="#">Cara Kerja</Link>
            </li>
            <li>
              <Link to="#">Tanya Jawab</Link>
            </li>
            <li>
              <Link to="#">Sertifikat</Link>
            </li>
            <li>
              <Link to="#">Cerita Fundraiser</Link>
            </li>
            <li>
              <Link to="#">Misi</Link>
            </li>
            <li>
              <Link to="#">Syarat dan Ketentuan</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col posts-col">
          <h4 className="footer-title">Postingan Blog</h4>
          <div className="footer-post">
            <Link to="#">
              Sepuluh Rahasia Ahli Amal yang Tidak Anda Ketahui.
            </Link>
            <span className="post-date">April 5, 2026</span>
          </div>
          <div className="footer-post">
            <Link to="#">Lima Tanda Anda Sedang Menderita.</Link>
            <span className="post-date">Maret 5, 2026</span>
          </div>
        </div>

        <div className="footer-col location-col">
          <h4 className="footer-title">Lokasi</h4>
          <div className="location-info">
            <strong>Bojonegoro</strong>
            <p>JL.Veteran No.25, Bojonegoro, Jawa Timur, Indonesia</p>
          </div>
          <div className="map-placeholder">
            {/* Map dots representation */}
            <div className="dots-map"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            PeduliBersama Crowdfunding & Charity Website - © 2026 by Kelompok 8
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
