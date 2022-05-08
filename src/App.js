import React from 'react';
<<<<<<< HEAD
import './App.css';
import './buttons.css';
=======

>>>>>>> 34d90a41f8e08aedd5b9a558b7c89c6c0e4288f5
import Add from './components/addMovie/Add';
import MovieList from './components/movieList/MovieList';
import MovieFilter from './components/movieFilter/MovieFilter';
import MovieSearch from './components/movieSearch/MovieSearch';
import movieData from './data/movies';
import ErrorBoundary from './components/movieError/ErrorBoundary';
import MovieSort from './components/movieSort/MovieSort';

import './buttons.css';
import './App.css';

function App() {
  return (
    <div className="netflix-roulette-content">
      <Add />
      <MovieSearch />

      <div className="movie-main-content">
        <div className="main-content--header">
          <MovieFilter />
          <MovieSort />
        </div>
        <ErrorBoundary>
          <MovieList movies={movieData} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
