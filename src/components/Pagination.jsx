import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            // Just showing simple pagination for now based on the image: 1, 2, Next ->
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="pagination">
            {getPageNumbers().map(page => (
                <button
                    key={page}
                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="page-btn next-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next »
            </button>
        </div>
    );
};

export default Pagination;
