import { rest } from 'msw';
import { topRated } from './mockData';
export const handlers = [
    rest.get(
        'https://api.themoviedb.org/3/movie/top_rated',
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json({ results: topRated }));
        }
    ),
    rest.get('https://api.themoviedb.org/3/movie/upcoming', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ results: topRated }));
    }),
    rest.get('https://api.themoviedb.org/3/movie', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ results: topRated }));
    }),
];
