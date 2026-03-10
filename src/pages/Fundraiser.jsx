import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CampaignCard from '../components/CampaignCard';
import Pagination from '../components/Pagination';
import Newsletter from '../components/Newsletter';
import { fetchCampaigns } from '../services/api';
import './Fundraiser.css';

const Fundraiser = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
    const [sortOption, setSortOption] = useState('newest');

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const response = await fetchCampaigns(currentPage, 6, selectedCategory, sortOption);
                setCampaigns(response.data);
                setTotalPages(response.totalPages);
                setTotalItems(response.totalItems);
            } catch (error) {
                console.error("Error fetching campaigns", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [currentPage, selectedCategory, sortOption]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // reset to page 1 on filter
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="fundraiser-page">
            <Newsletter />

            <div className="container main-container">
                <SearchBar onCategoryChange={handleCategoryChange} />

                <div className="results-header">
                    <h2 className="results-count">{totalItems} Proyek Ditemukan</h2>
                    <div className="sort-dropdown">
                        <select className="sort-select" value={sortOption} onChange={handleSortChange}>
                            <option value="newest">Terbaru</option>
                            <option value="popular">Terpopuler</option>
                            <option value="ending_soon">Segera Berakhir</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="loading-state">Memuat kampanye...</div>
                ) : (
                    <div className="campaign-grid">
                        {campaigns.map(campaign => (
                            <CampaignCard key={campaign.id} campaign={campaign} />
                        ))}
                    </div>
                )}

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

        </div>
    );
};

export default Fundraiser;
