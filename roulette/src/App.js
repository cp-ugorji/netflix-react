import './App.css';
import MovieList from './components/movieList/MovieList';
import MovieFilter from './components/movieFilter/MovieFilter';
import MovieSearch from './components/movieSearch/MovieSearch';
import movieData from './data/movies';
import ErrorBoundary from './components/movieError/ErrorBoundary';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix</h1>
      </header>
      <div>
        <MovieSearch />
        <MovieFilter />
        <ErrorBoundary>
          <MovieList movies={movieData} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
