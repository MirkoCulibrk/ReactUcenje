import React from 'react';
import './MovieRating.scss';
const MovieRating = ({ rating }) => {
    const color = rating > 7 ? '#FFB10A' : '#FF424F';
    return (
        <div
            className="rating"
            style={{ backgroundColor: color }}
            data-testid="rating"
        >
            <span>{rating > 0 ? rating : 'Upcoming movie'}</span>
        </div>
    );
};

export default MovieRating;
