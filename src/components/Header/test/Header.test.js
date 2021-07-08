import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from '../Header';

test('does logo and search bar render correcly', () => {
    render(
        <BrowserRouter>
            <Header></Header>
        </BrowserRouter>
    );
    const logo = screen.getByText(/movie app/i);
    expect(logo).toBeInTheDocument();
    const searchBar = screen.getByPlaceholderText(/search movie/i);
    expect(searchBar).toBeInTheDocument();
});
