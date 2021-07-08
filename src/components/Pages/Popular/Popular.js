import React, { useState, useEffect } from 'react';
import { getData } from '../../../utils/utils';
import ShowMovies from '../../UI/ShowMovies/ShowMovies';
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const Popular = () => {
    const [movies, setMovies] = useState();
    const [error, setError] = useState(false);
    useEffect(async () => {
        const [data, error] = await getData(POPULAR_URL);
        if (error) {
            setError('ne valja');
        }
        setMovies(data.results);
    }, []);
    console.log(movies);
    return (
        <div className="mainpage">
            {error && error}
            <h1>Popular movies</h1>
            <div>{movies && <ShowMovies movies={movies}></ShowMovies>}</div>
        </div>
    );
};
