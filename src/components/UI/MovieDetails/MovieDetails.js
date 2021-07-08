/*eslint-disable */
import React from 'react';
import CastRating from '../CastRating/CastRating';
import './MovieDetails.scss';
const MovieDetails = ({ details }) => {
    return (
        <div className="details">
            <h1>{details.title}</h1>

            <figure className="details-info">
                <div className="img-container">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                        alt={details.title}
                    />
                </div>
                <div className="info-container">
                    <div className="details-rating">
                        <h2>Movie rating: {details.vote_average}</h2>

                        <CastRating id={details.id}></CastRating>
                    </div>
                    <figcaption>
                        <h2>Release Date: {details.release_date}</h2>
                        <p>{details.overview}</p>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default MovieDetails;
