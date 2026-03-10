import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';
import Pagination from '../components/Pagination';
import Newsletter from '../components/Newsletter';
import { fetchBlogs } from '../services/api';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');

    // Dummy data for sidebar (ideally fetched from API)
    const categories = [
        "Kisah Inspiratif",
        "Update Program",
        "Edukasi Sosial",
        "Laporan Donasi",
        "Tips Donasi"
    ];
    const popularPosts = blogs.slice(0, 3);
    const recentPosts = blogs.slice(0, 3);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                // Note: we're reusing limits/logic from fundraisers for simplicity
                const response = await fetchBlogs(currentPage, 4, selectedCategory);
                setBlogs(response.data);
                setTotalPages(response.totalPages);
            } catch (error) {
                console.error("Error fetching blogs", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [currentPage, selectedCategory]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <div className="page-banner blog-banner">
                <div className="container banner-content">
                    <h1 className="banner-title">Blog Inspirasi & Informasi Donasi</h1>
                    <p className="banner-subtitle">Temukan kisah inspiratif, laporan program, dan informasi seputar kegiatan sosial.</p>
                    <div className="breadcrumb mt-2">
                        <span>Home</span> / <span className="current">Blog</span>
                    </div>
                </div>
            </div>

            <div className="container main-container">
                <div className="blog-layout">
                    {/* Main Content Area */}
                    <div className="blog-main-content">
                        {loading ? (
                            <div className="loading-state">Memuat artikel...</div>
                        ) : (
                            <div className="blog-grid">
                                {blogs.length > 0 ? (
                                    blogs.map(blog => (
                                        <BlogCard key={blog.id} blog={blog} />
                                    ))
                                ) : (
                                    <div className="empty-state">Tidak ada artikel ditemukan untuk kategori ini.</div>
                                )}
                            </div>
                        )}

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>

                    {/* Sidebar Area */}
                    <div className="blog-sidebar-container">
                        <BlogSidebar
                            categories={categories}
                            popularPosts={popularPosts}
                            recentPosts={recentPosts}
                            onCategorySelect={handleCategorySelect}
                        />
                    </div>
                </div>
            </div>

            <div style={{ height: '80px' }}></div>
            <Newsletter />
        </div>
    );
};

export default Blog;
