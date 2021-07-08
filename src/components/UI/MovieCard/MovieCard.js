import React from 'react';
import MovieRating from '../MovieRating/MovieRating';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
const MovieCard = ({ movie }) => {
    const webSiteTitle = (title) => {
        return title.replace(/\s/g, '');
    };
    const movieTitle = webSiteTitle(movie.title);
    return (
        <figure name="movie">
            <MovieRating rating={movie.vote_average}></MovieRating>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <figcaption>
                <h2>{movie.title}</h2>
                <Link
                    to={{
                        pathname: `/movie/${movieTitle}`,
                        state: {
                            id: movie.id,
                        },
                    }}
                >
                    see more
                </Link>
            </figcaption>
        </figure>
    );
};

export default MovieCard;
