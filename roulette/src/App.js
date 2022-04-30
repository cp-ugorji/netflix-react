import './App.css';
import './buttons.css';
import Add from './components/addMovie/Add';
import MovieList from './components/movieList/MovieList';
import MovieFilter from './components/movieFilter/MovieFilter';
import MovieSearch from './components/movieSearch/MovieSearch';
import movieData from './data/movies';
import ErrorBoundary from './components/movieError/ErrorBoundary';

const App = () => {
  return (
    <div className="netflix-roulette-content">
      <>
        <Add />
        <MovieSearch />
      </>

      <div className="movie-main-content">
        <div className="main-content--header">
          <MovieFilter />
        </div>
        <ErrorBoundary>
          <MovieList movies={movieData} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
