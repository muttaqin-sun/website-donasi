import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Heart, Mail, Lock } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login for now
        console.log('Logging in with:', email, password);
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo-icon-login">
                        <Heart size={24} color="white" fill="white" />
                    </div>
                    <h2>Selamat Datang Kembali</h2>
                    <p>Masuk untuk melanjutkan ke PeduliBersama</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Masukkan email Anda"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Masukkan password Anda"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Ingat saya</span>
                        </label>
                        <a href="#" className="forgot-password">Lupa password?</a>
                    </div>

                    <button type="submit" className="login-button">Masuk</button>
                </form>

                <div className="login-footer">
                    <p>Belum punya akun? <Link to="/register" className="register-link">Daftar sekarang</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
