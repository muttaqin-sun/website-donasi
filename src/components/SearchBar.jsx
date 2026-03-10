import React, { useState } from 'react';
import './SearchBar.css';
import { Search, ChevronDown } from 'lucide-react';

const SearchBar = ({ onCategoryChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('Semua Kategori');

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        if (onCategoryChange) {
            onCategoryChange(value);
        }
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <div className="category-dropdown">
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="category-select"
                    >
                        <option value="Semua Kategori">Semua Kategori</option>
                        <option value="Medis">Medis</option>
                        <option value="Kesehatan">Kesehatan</option>
                        <option value="Yayasan">Yayasan</option>
                        <option value="Amal">Amal</option>
                        <option value="Anak-anak">Anak-anak</option>
                    </select>
                    <ChevronDown className="select-icon" size={16} />
                </div>

                <div className="search-divider"></div>

                <div className="search-input-wrapper">
                    <input
                        type="text"
                        placeholder="Cari Proyek Donasi..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <button className="search-btn">
                        <Search size={20} className="search-icon-svg" />
                    </button>
                </div>
            </div>

            <div className="popular-searches">
                <span className="popular-label">Pencarian Populer:</span>
                <div className="popular-tags">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryChange({ target: { value: 'Medis' } }); }}>Medis</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryChange({ target: { value: 'Kesehatan' } }); }}>Kesehatan</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryChange({ target: { value: 'Yayasan' } }); }}>Yayasan</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryChange({ target: { value: 'Anak-anak' } }); }}>Anak-anak</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryChange({ target: { value: 'Amal' } }); }}>Amal</a>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
