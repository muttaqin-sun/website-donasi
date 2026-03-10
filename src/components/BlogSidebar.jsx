import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './BlogSidebar.css';
import { Link } from 'react-router-dom';

const BlogSidebar = ({ categories, popularPosts, recentPosts, onCategorySelect, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(searchTerm);
    };

    return (
        <aside className="blog-sidebar">
            {/* Search Widget */}
            <div className="sidebar-widget search-widget">
                <h3 className="widget-title">Cari Blog</h3>
                <form onSubmit={handleSearch} className="sidebar-search-form">
                    <input
                        type="text"
                        placeholder="Ketik kata kunci..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="sidebar-search-input"
                    />
                    <button type="submit" className="sidebar-search-btn">
                        <Search size={18} />
                    </button>
                </form>
            </div>

            {/* Categories Widget */}
            <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Kategori</h3>
                <ul className="widget-list category-list">
                    <li onClick={() => onCategorySelect && onCategorySelect('Semua Kategori')}>
                        <span className="category-name">Semua Kategori</span>
                    </li>
                    {categories.map((cat, idx) => (
                        <li key={idx} onClick={() => onCategorySelect && onCategorySelect(cat)}>
                            <span className="category-name">{cat}</span>
                            <span className="category-icon">→</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Popular Posts Widget */}
            <div className="sidebar-widget related-posts-widget">
                <h3 className="widget-title">Pos Terpopuler</h3>
                <div className="related-posts-list">
                    {popularPosts.map(post => (
                        <div key={post.id} className="related-post-item">
                            <img src={post.image} alt={post.title} className="related-post-img" />
                            <div className="related-post-info">
                                <Link to={`/blog/${post.id}`} className="related-post-title">{post.title}</Link>
                                <span className="related-post-date">{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="sidebar-widget related-posts-widget">
                <h3 className="widget-title">Pos Terbaru</h3>
                <div className="related-posts-list">
                    {recentPosts.map(post => (
                        <div key={post.id} className="related-post-item">
                            <img src={post.image} alt={post.title} className="related-post-img" />
                            <div className="related-post-info">
                                <Link to={`/blog/${post.id}`} className="related-post-title">{post.title}</Link>
                                <span className="related-post-date">{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
