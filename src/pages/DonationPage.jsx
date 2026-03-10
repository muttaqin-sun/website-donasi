import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCampaigns } from '../services/api';
import './DonationPage.css';

const DonationPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState(null);
    const [amount, setAmount] = useState('50000');
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    // User Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const presetAmounts = [10000, 25000, 50000, 100000, 250000, 500000];

    useEffect(() => {
        if (id) {
            // Fetch campaign details if id is provided
            fetchCampaigns(1, 100).then(res => {
                const found = res.data.find(c => c.id.toString() === id);
                if (found) setCampaign(found);
            });
        }
        window.scrollTo(0, 0);
    }, [id]);

    const handleAmountClick = (value) => {
        setAmount(value.toString());
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        const val = e.target.value.replace(/\D/g, ''); // Only allow numbers
        setCustomAmount(val);
        setAmount('custom');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalAmount = amount === 'custom' ? customAmount : amount;

        if (!finalAmount || parseInt(finalAmount) < 10000) {
            alert("Minimal donasi Rp 10.000");
            return;
        }

        if (!paymentMethod) {
            alert("Pilih metode pembayaran");
            return;
        }

        // Normally we'd integrate with payment gateway here
        // Simulating success
        alert(`Terima kasih! Dialihkan ke halaman instruksi pembayaran untuk donasi sejumlah Rp ${parseInt(finalAmount).toLocaleString('id-ID')} via ${paymentMethod}...`);
        navigate('/'); // back to home or success page
    };

    const paymentOptions = {
        'Transfer Bank': [
            { id: 'BCA', name: 'BCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg' },
            { id: 'Mandiri', name: 'Mandiri', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg' },
            { id: 'BNI', name: 'BNI', logo: 'https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BNI-512.png' },
            { id: 'BRI', name: 'BRI', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg' }
        ],
        'E-Wallet': [
            { id: 'GoPay', name: 'GoPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg' },
            { id: 'OVO', name: 'OVO', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg' },
            { id: 'DANA', name: 'DANA', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg' },
            { id: 'ShopeePay', name: 'ShopeePay', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg' }
        ],
        'Gerai Retail': [
            { id: 'Indomaret', name: 'Indomaret', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png' },
            { id: 'Alfamart', name: 'Alfamart', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg' }
        ]
    };

    return (
        <div className="donation-page">
            <div className="container donation-container">
                <div className="donation-form-wrapper">
                    <h1 className="form-title">
                        {campaign ? `Donasi untuk: ${campaign.title}` : 'Donasi Umum'}
                    </h1>

                    {campaign && (
                        <div className="campaign-summary-box">
                            <img src={campaign.image} alt={campaign.title} className="summary-img" />
                            <div className="summary-info">
                                <span className="summary-target">Target: Rp {(campaign.goal * 15000).toLocaleString('id-ID')}</span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="donation-form">

                        {/* 1. Pilih Nominal */}
                        <div className="form-section">
                            <h2 className="section-title"><span className="step-number">1</span> Pilih Nominal Donasi</h2>
                            <div className="preset-amounts">
                                {presetAmounts.map(val => (
                                    <button
                                        type="button"
                                        key={val}
                                        className={`amount-btn ${amount === val.toString() ? 'selected' : ''}`}
                                        onClick={() => handleAmountClick(val)}
                                    >
                                        Rp {val.toLocaleString('id-ID')}
                                    </button>
                                ))}
                            </div>
                            <div className="custom-amount-wrapper">
                                <span className="currency-prefix">Rp</span>
                                <input
                                    type="text"
                                    placeholder="Nominal Donasi Lainnya (Min. 10.000)"
                                    className={`custom-amount-input ${amount === 'custom' ? 'selected-input' : ''}`}
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    onFocus={() => setAmount('custom')}
                                />
                            </div>
                        </div>

                        {/* 2. Informasi Donatur */}
                        <div className="form-section">
                            <h2 className="section-title"><span className="step-number">2</span> Informasi Donatur</h2>

                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nama Lengkap"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required={!isAnonymous}
                                    disabled={isAnonymous}
                                />
                            </div>

                            <div className="checkbox-group">
                                <label className="anonymous-toggle">
                                    <input
                                        type="checkbox"
                                        checked={isAnonymous}
                                        onChange={(e) => setIsAnonymous(e.target.checked)}
                                    />
                                    Sembunyikan nama saya (Hamba Allah)
                                </label>
                            </div>

                            <div className="input-row">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Alamat Email (Opsional)"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Nomor Telepon/WA"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <textarea
                                    name="message"
                                    placeholder="Pesan Dukungan / Doa (Opsional)"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </div>

                        {/* 3. Metode Pembayaran */}
                        <div className="form-section">
                            <h2 className="section-title"><span className="step-number">3</span> Metode Pembayaran</h2>

                            <div className="payment-categories">
                                {Object.entries(paymentOptions).map(([category, methods]) => (
                                    <div key={category} className="payment-category">
                                        <h3 className="payment-category-title">{category}</h3>
                                        <div className="payment-methods-grid">
                                            {methods.map(method => (
                                                <div
                                                    key={method.id}
                                                    className={`payment-method-card ${paymentMethod === method.id ? 'selected' : ''}`}
                                                    onClick={() => setPaymentMethod(method.id)}
                                                >
                                                    <div className="radio-circle">
                                                        {paymentMethod === method.id && <div className="radio-dot"></div>}
                                                    </div>
                                                    <img src={method.logo} alt={method.name} className="payment-logo" />
                                                    <span className="payment-name">{method.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary & Submit */}
                        <div className="form-submit-section">
                            <div className="summary-total">
                                <span>Total Donasi</span>
                                <span className="total-amount">
                                    Rp {(amount === 'custom' ? (parseInt(customAmount) || 0) : parseInt(amount)).toLocaleString('id-ID')}
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Lanjutkan Pembayaran
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;
