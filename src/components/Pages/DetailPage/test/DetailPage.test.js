import React from 'react';
import { screen, render } from '@testing-library/react';
import DetailPage from '../DetailPage';

test('check does info render correcly', async () => {
    render(<DetailPage></DetailPage>);
    const titleText = await screen.findAllByRole('heading', {
        name: /Dilwale Dulhania Le Jayenge/i,
    });
    expect(titleText).toBeInTheDocument();
});
