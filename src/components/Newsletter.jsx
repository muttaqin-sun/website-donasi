import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="container newsletter-container">
                <div className="newsletter-content">
                    <h2>Jangan lewatkan pembaruan mingguan kami tentang donasi</h2>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Masukkan Alamat Email Anda..."
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="btn btn-secondary newsletter-btn">Berlangganan</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
