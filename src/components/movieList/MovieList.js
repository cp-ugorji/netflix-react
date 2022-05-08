import React from 'react';

import Movie from '../movieItem/Movie';

import './MovieList.css';

function MovieList({ movies }) {
  const movieContentSize = movies.length;
  const searchResultStat =
    movieContentSize > 1 ? `${movieContentSize} movies` : `${movieContentSize} movie`;
  const mapMovies = movies.map((movie) => <Movie key={movie.id} movie={movie} />);

  if (movieContentSize) {
    return (
      <>
        <h1>{searchResultStat} found</h1>
        <div className="movie-list-content">{mapMovies}</div>
      </>
    );
  }
  return (
    <div className="movies-not-found">
      <h1>No movie found</h1>
      <button type="button" className="btn-confirm">
        GO BACK TO SEARCH
      </button>
    </div>
  );
}

export default MovieList;
