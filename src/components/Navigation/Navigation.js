import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Search</Link>
                </li>
                <li>
                    <Link to="/top-rated">Top rated</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
                <li>
                    <Link to="/popular">Popular</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
