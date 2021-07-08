import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './ShowMovies.scss';
const ShowMovies = ({ movies }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const moviesPerPage = 5;
    const pagesVisited = pageNumber * moviesPerPage;
    const displayMovies = movies
        .slice(pagesVisited, pagesVisited + moviesPerPage)
        .map((movie) => <MovieCard movie={movie} key={movie.id}></MovieCard>);
    const pageCount = Math.ceil(movies.length / moviesPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            {displayMovies}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBtns'}
                previousClassName={'previousBtn'}
                nextLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            ></ReactPaginate>
        </>
    );
};

export default ShowMovies;
