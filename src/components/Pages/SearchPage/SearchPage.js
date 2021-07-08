import React, { useEffect, useState } from 'react';
import Autocomplete from '../../UI/Autocomplete/Autocomplete';
import axios from 'axios';
import MovieCard from '../../UI/MovieCard/MovieCard';
import './SearchPage.scss';
const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [filteredSuggestions, setFilteredSuggestion] = useState([]);
    const [userInput, setUserInput] = useState('');
    useEffect(() => {
        getMovies();
    }, [userInput]);
    const getMovies = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${userInput}&language=en-US&page=1&include_adult=false`
            );
            setMovies(data.results.splice(0, 4));
            const filteredSuggestions = data.results
                .splice(0, 4)
                .map((movie) => movie.title)
                .filter(
                    (suggestion) =>
                        suggestion
                            .toLowerCase()
                            .indexOf(userInput.toLowerCase()) > -1
                );
            setFilteredSuggestion(filteredSuggestions);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="mainpage">
            <h1>Search movies</h1>
            <Autocomplete
                userInput={userInput}
                setUserInput={setUserInput}
                filteredSuggestions={filteredSuggestions}
                setFilteredSuggestion={setFilteredSuggestion}
            ></Autocomplete>
            <div className="search">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
