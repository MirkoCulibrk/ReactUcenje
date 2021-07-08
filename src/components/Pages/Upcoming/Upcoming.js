import React, { useState, useEffect } from 'react';
import { getData } from '../../../utils/utils';
import ShowMovies from '../../UI/ShowMovies/ShowMovies';
const UPCOMING_MOVIE_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
const Upcoming = () => {
    const [movies, setMovies] = useState();
    const [error, setError] = useState(false);
    useEffect(async () => {
        const [data, error] = await getData(UPCOMING_MOVIE_URL);
        if (error) {
            setError('ne valja');
        }
        setMovies(data.results);
    }, []);
    return (
        <div className="mainpage">
            {error && error}
            <h1>Upcoming movies</h1>
            <div>{movies && <ShowMovies movies={movies}></ShowMovies>}</div>
        </div>
    );
};

export default Upcoming;
