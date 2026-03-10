import React from 'react';
import './CampaignCard.css';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const percent = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);

    return (
        <div className="campaign-card">
            <div className="campaign-image-container">
                <img src={campaign.image} alt={campaign.title} className="campaign-img" />
            </div>

            <div className="campaign-body">
                <div className="campaign-meta">
                    <span className="category-tag">{campaign.category}</span>
                    <span className="category-tag">{campaign.tags.join(' ')}</span>
                </div>

                <h3 className="campaign-title">{campaign.title}</h3>

                <div className="campaign-author-row">
                    <div className="author-info">
                        <img src={campaign.authorAvatar} alt={campaign.authorName} className="author-avatar" />
                        <span className="author-name">{campaign.authorName}</span>
                    </div>
                    <div className="days-left">
                        <Calendar size={14} className="calendar-icon" />
                        <span>{campaign.daysLeft} Hari lagi</span>
                    </div>
                </div>

                <p className="campaign-desc">{campaign.description}</p>

                <div className="progress-section">
                    <div className="progress-label-container">
                        <span className="progress-percentage" style={{ left: `calc(${percent}% - 15px)` }}>
                            {percent}%
                        </span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
                    </div>

                    <div className="progress-stats">
                        <div className="stat-item raised">
                            Mulai Terkumpul: <strong>Rp{campaign.raised.toLocaleString('id-ID')}</strong>
                        </div>
                        <div className="stat-item goal">
                            Target Donasi: <strong>Rp{campaign.goal.toLocaleString('id-ID')}</strong>
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <Link to={`/donate/${campaign.id}`} className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                            Donasi Sekarang
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
