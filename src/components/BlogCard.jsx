import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';
import { Calendar, User } from 'lucide-react';

const BlogCard = ({ blog }) => {
    return (
        <article className="blog-card">
            <div className="blog-image-wrapper">
                <Link to={`/blog/${blog.id}`}>
                    <img src={blog.image} alt={blog.title} className="blog-img" />
                </Link>
                <span className="blog-category-badge">{blog.category}</span>
            </div>

            <div className="blog-content">
                <div className="blog-meta">
                    <div className="meta-item">
                        <User size={14} className="meta-icon" />
                        <span>{blog.authorName}</span>
                    </div>
                    <div className="meta-item">
                        <Calendar size={14} className="meta-icon" />
                        <span>{blog.date}</span>
                    </div>
                </div>

                <h3 className="blog-title">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>

                <p className="blog-excerpt">{blog.excerpt}</p>

                <Link to={`/blog/${blog.id}`} className="blog-read-more">
                    Baca Selengkapnya <span className="arrow">→</span>
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
