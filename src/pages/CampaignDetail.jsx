import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CampaignDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="container" style={{ padding: '60px 0', minHeight: '60vh' }}>
            <h1>Detail Kampanye</h1>
            <p style={{ marginTop: '20px' }}>Menampilkan detail untuk kampanye ID: {id}</p>

            <div style={{ marginTop: '40px' }}>
                <button className="btn btn-outline" onClick={() => navigate(-1)}>
                    Kembali
                </button>
                <button className="btn btn-primary" style={{ marginLeft: '15px' }}>
                    Donasi Sekarang
                </button>
            </div>
        </div>
    );
};

export default CampaignDetail;
