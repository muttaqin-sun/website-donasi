import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogs } from '../services/api';
import './BlogDetail.css';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import BlogCard from '../components/BlogCard';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            try {
                setLoading(true);
                // In real app, we'd fetch specific blog by ID. 
                // Here we just fetch page 1 and find it, or use fallback
                const response = await fetchBlogs(1, 10);
                const foundBlog = response.data.find(b => b.id.toString() === id);

                if (foundBlog) {
                    setBlog(foundBlog);
                    // Find related blogs by category
                    const related = response.data
                        .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
                        .slice(0, 2);

                    setRelatedBlogs(related.length > 0 ? related : response.data.slice(0, 2));
                }
            } catch (error) {
                console.error("Error fetching blog post", error);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="blog-detail-page">
                <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>Memuat Artikel...</h2>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-detail-page">
                <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h2>Artikel tidak ditemukan.</h2>
                    <Link to="/blog" className="btn btn-primary mt-2">Kembali ke Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            {/* Detail Header */}
            <div className="blog-detail-header">
                <div className="container header-container">
                    <div className="category-tag mb-1">{blog.category}</div>
                    <h1 className="detail-title">{blog.title}</h1>
                    <div className="detail-meta">
                        <span className="meta-item"><User size={16} /> Ditulis oleh {blog.authorName}</span>
                        <span className="meta-item"><Calendar size={16} /> {blog.date}</span>
                    </div>
                </div>
            </div>

            <div className="container detail-content-container">
                <div className="detail-featured-image">
                    <img src={blog.image} alt={blog.title} />
                </div>

                <div className="detail-body">
                    <p className="lead-paragraph">{blog.excerpt}</p>

                    <div className="article-content">
                        {/* Mocking rich content */}
                        <p>Seiring dengan berkembangnya kesadaran masyarakat tentang pentingnya berbagi, muncul berbagai macam metode untuk berdonasi. Hal ini tentunya merupakan kabar baik, mengingat masih banyak saudara kita yang membutuhkan uluran tangan.</p>

                        <h3>Mengapa Ini Penting?</h3>
                        <p>Memberikan dukungan melalui platform yang tepat memastikan bahwa kontribusi Anda mencapai mereka yang benar-benar membutuhkan. Jangan sampai niat baik Anda justru disalahgunakan oleh pihak-pihak yang tidak bertanggung jawab.</p>

                        <blockquote className="article-quote">
                            "Kebaikan yang paling bermakna adalah kebaikan yang sampai ke tangan mereka yang paling membutuhkannya secara tepat waktu."
                        </blockquote>

                        <p>Banyak dari kita yang sering ragu saat ingin menyumbangkan sebagian dari rezeki. Memeriksa kembali legitimasi yayasan, melihat rekam jejak penyaluran dana, dan membaca laporan pertanggungjawaban adalah beberapa langkah penting yang harus dilakukan.</p>

                        <p>{blog.content}</p>
                    </div>

                    <div className="detail-footer">
                        <div className="post-tags">
                            <Tag size={18} className="tag-icon" />
                            <div className="tags-list">
                                <span>{blog.category}</span>
                                <span>Sosial</span>
                                <span>Inspirasi</span>
                            </div>
                        </div>

                        <div className="post-share">
                            <span className="share-label"><Share2 size={18} /> Bagikan:</span>
                            <div className="share-icons">
                                <a href="#" className="share-btn facebook"><Facebook size={16} /></a>
                                <a href="#" className="share-btn twitter"><Twitter size={16} /></a>
                                <a href="#" className="share-btn linkedin"><Linkedin size={16} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-articles-section">
                    <h3 className="related-title">Artikel Terkait</h3>
                    <div className="related-grid">
                        {relatedBlogs.map((b) => (
                            <BlogCard key={b.id} blog={b} />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ height: '80px' }}></div>
            <Newsletter />
        </div>
    );
};

export default BlogDetail;
