import React, { useState } from 'react';
import searchIcon from '../../../assets/searchIcon.svg';
import axios from 'axios';
// import {getData} from '../../../utils/utils';
import './SearchBar.scss';
const API_WEBPAGE = 'https://api.themoviedb.org/3/search/movie';
const SearchBar = () => {
    const [movie, setMovie] = useState('');
    async function getMovie() {
        try {
            const { data } = await axios.get(
                `${API_WEBPAGE}?api_key=${process.env.REACT_APP_API_KEY}&query=${movie}&language=en-US&page=1&include_adult=false`
            );
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        getMovie();
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="search movie"
                id=""
                placeholder="Search movie"
                value={movie}
                onChange={({ target }) => setMovie(target.value)}
            />
            <img src={searchIcon} alt="search icon" />
        </form>
    );
};

export default SearchBar;
