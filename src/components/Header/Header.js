import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {
    return (
        <header>
            <Link to="/">movie app</Link>
        </header>
    );
};

export default Header;
