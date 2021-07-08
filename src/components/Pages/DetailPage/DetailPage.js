import React, { useState, useEffect } from 'react';
import { getData } from '../../../utils/utils';
import ActorCard from '../../UI/ActorCard/ActorCard';
import MovieCard from '../../UI/MovieCard/MovieCard';
import MovieDetails from '../../UI/MovieDetails/MovieDetails';
import { useLocation } from 'react-router-dom';
import './DetailPage.scss';
const DetailPage = () => {
    const location = useLocation();
    const movieId = location.state.id;
    const [details, setDetails] = useState();
    const [actors, setActors] = useState();
    const [simularMovies, setSimularMovies] = useState();
    useEffect(() => {
        getAllData();
    }, [movieId]);
    async function getAllData() {
        const [data, error1] = await getData(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const [actors, error2] = await getData(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const [simularMovies, error3] = await getData(
            `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        if (error1 || error2 || error3) {
            console.log('something went wrong');
        }
        setSimularMovies(simularMovies.results.slice(0, 5));
        setActors(actors.cast.slice(0, 5));
        setDetails(data);
    }
    return (
        <section key={movieId}>
            {details && <MovieDetails details={details}></MovieDetails>}
            <h2>Simular movies</h2>
            <div className="cards">
                {simularMovies &&
                    simularMovies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))}
            </div>

            <h2>Actors</h2>
            <div className="cards">
                {actors &&
                    actors.map((actor) => (
                        <ActorCard actor={actor} key={actor.id}></ActorCard>
                    ))}
            </div>
        </section>
    );
};

export default DetailPage;
