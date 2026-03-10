import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would typically send the data to a backend API
        alert(`Terima Kasih, ${formData.name}! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.`);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero-banner">
                <div className="container contact-banner-content">
                    <h1>Hubungi Kami</h1>
                    <p>Punya pertanyaan atau ingin berkolaborasi? Kami selalu siap mendengar dari Anda.</p>
                </div>
            </div>

            <div className="container contact-main-container">
                <div className="contact-grid">

                    {/* Left Side: Contact Information */}
                    <div className="contact-info-section">
                        <h2>Informasi Kontak</h2>
                        <p className="contact-intro">
                            PeduliBersama senantiasa terbuka untuk kritik, saran, dukungan donasi skala besar, maupun tawaran relawan. Hubungi kami melalui kanal di bawah ini:
                        </p>

                        <div className="info-cards">
                            <div className="info-card">
                                <div className="icon-wrapper">
                                    <MapPin size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3>Kantor Pusat</h3>
                                    <p>Jl. Jend. Sudirman No. Kav 21<br />Jakarta Selatan, 12920<br />Indonesia</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-wrapper">
                                    <Phone size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3>Telepon & WhatsApp</h3>
                                    <p>+62 811 1234 5678<br />(021) 555-1234</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-wrapper">
                                    <Mail size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3>Email Bantuan</h3>
                                    <p>halo@pedulibersama.org<br />donasi@pedulibersama.org</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-wrapper">
                                    <Clock size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3>Jam Operasional</h3>
                                    <p>Senin - Jumat: 09:00 - 17:00 WIB<br />Tim Tanggap Bencana: 24 Jam</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-section">
                        <h2>Kirim Pesan</h2>
                        <form onSubmit={handleSubmit} className="message-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tulis nama Anda"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Alamat Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="nama@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subjek Pesan</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Apa yang ingin Anda sampaikan?"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Pesan Anda</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tulis pesan lengkap Anda di sini..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-msg-btn">
                                <Send size={18} />
                                Kirim Pesan Sekarang
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default ContactUs;
