import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    // A simple redirect or placeholder since the user focuses on Fundraiser page based on the prompt
    // But we provide a functional button
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 0', minHeight: '60vh' }}>
            <h1>Selamat Datang di PeduliBersama</h1>
            <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>Mulai langkah kecil Anda untuk perubahan besar.</p>
            <button
                className="btn btn-primary"
                style={{ marginTop: '30px' }}
                onClick={() => navigate('/fundraiser')}
            >
                Lihat Semua Kampanye Donasi
            </button>
        </div>
    );
};

export default Home;
