import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../test-utils/test-library-utils';
import TopRated from '../TopRated';

describe('success part', () => {
    test('check does Movie Card render correcly', async () => {
        renderWithRouter(<TopRated></TopRated>);
        const movies = await screen.findAllByRole('img');
        expect(movies).toHaveLength(3);
        const altImg = movies.map((movie) => movie.alt);
        expect(altImg).toEqual([
            'Dilwale Dulhania Le Jayenge',
            'The Shawshank Redemption',
            'Wrath of Man',
        ]);

        const title1 = screen.getByText('Dilwale Dulhania Le Jayenge');
        const title2 = screen.getByText('The Shawshank Redemption');
        const title3 = screen.getByText('Wrath of Man');
        expect(title1).toHaveTextContent('Dilwale Dulhania Le Jayenge');
        expect(title2).toHaveTextContent('The Shawshank Redemption');
        expect(title3).toHaveTextContent('Wrath of Man');
        // const [title1,title2]=await screen.findAllByRole('heading');

        // expect(within(title1)).getByText('Dilwale Dulhania Le Jayenge').toBeTruthy();
    });
    test('check does rating works correcly', async () => {
        renderWithRouter(<TopRated></TopRated>);
        const [rating1, rating2, rating3] = await screen.findAllByTestId(
            'rating'
        );
        expect(rating1).toHaveStyle('background-color: rgb(255, 177, 10)');
        expect(rating2).toHaveStyle('background-color: rgb(255, 66, 79)');
        expect(rating3).toHaveTextContent('Incoming movie');
    });
});
