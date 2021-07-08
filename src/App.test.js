import React from 'react';
import { findByText, screen } from '@testing-library/react';
import { renderWithRouter } from './test-utils/test-library-utils';
import App from './App';
import userEvent from '@testing-library/user-event';

test('App render on home page(top rated movies) and changing to all pages', () => {
    renderWithRouter(<App></App>);
    const topRatedText = screen.getByText(/Top rated movies/i);
    expect(topRatedText).toBeInTheDocument();

    // for reference https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
    // which button on mouse is clicked.
    const leftClick = { button: 0 };
    const upcomingPageUrl = screen.getByText(/upcoming/i);
    userEvent.click(upcomingPageUrl, leftClick);
    const upcomingText = screen.getByText(/Upcoming movies/i);
    expect(upcomingText).toBeInTheDocument();

    const popularPageUrl = screen.getByText(/popular/i);
    userEvent.click(popularPageUrl, leftClick);
    const popularText = screen.getByText(/popular movies/i);
    expect(popularText).toBeInTheDocument();

    // const logo=screen.getByText(/movie app/i);
    // screen.debug();
    // userEvent.click(logo,leftClick);
    // expect(topRatedText).toBeInTheDocument();
});

test('clicking see more button change route to detail page', async () => {
    renderWithRouter(<App></App>);
    const [button1] = await screen.findAllByRole('link', {
        name: 'see more',
    });
    const leftClick = { button: 0 };
    userEvent.click(button1, leftClick);
    const detailPageText = await screen.findByText('detail');
    expect(detailPageText).toBeInTheDocument();
});
/**
 * TODO odraditi deo da kad nece search tj nema odogovora da bude nomathc
 */
test('landing on bad page', () => {
    // renderWithRouter(<App></App>,{route:'/'})
});
