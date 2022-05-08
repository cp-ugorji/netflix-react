import React from 'react';
import './MovieFilter.css';

const MovieFilter = () => {
    return (
        <div className="filter-container">
            <span>ALL</span>
            <span>DOCUMENTARY</span>
            <span>COMEDY</span>
            <span>HORROR</span>
            <span>CRIME</span>
        </div>
    );
};

export default MovieFilter;
