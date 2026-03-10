import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Heart, ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <Heart size={20} color="white" fill="white" />
                    </div>
                    <span className="logo-text">PeduliBersama<br /><small>Gerakan Kepedulian Kolektif</small></span>
                </Link>
                <nav className="navbar-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <div className="nav-dropdown">
                        <span className="nav-link dropdown-toggle">
                            Pages <ChevronDown size={14} className="dropdown-icon" />
                        </span>
                        <div className="dropdown-menu">
                            <Link to="/about" className="dropdown-item">Tentang Kami</Link>
                            <Link to="/how-it-works" className="dropdown-item">Cara Kerja</Link>
                            <Link to="/faq" className="dropdown-item">FAQ</Link>
                            <Link to="/transparency" className="dropdown-item">Transparansi</Link>
                            <Link to="/terms" className="dropdown-item">Syarat & Ketentuan</Link>
                            <Link to="/privacy" className="dropdown-item">Kebijakan Privasi</Link>
                        </div>
                    </div>
                    <Link to="/fundraiser" className="nav-link">Fundraiser</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </nav>
                <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/login" className="nav-link" style={{ marginRight: '1.5rem', fontWeight: '600' }}>
                        Masuk
                    </Link>
                    <Link to="/donate" className="btn btn-primary">
                        <Heart size={16} fill="white" />
                        Donasi Sekarang
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
