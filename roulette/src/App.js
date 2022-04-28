import './App.css';
import MovieList from './components/movieList/MovieList';
import MovieFilter from './components/movieFilter/MovieFilter';
import movieData from './data/movies';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix</h1>
      </header>
      <div>
        <MovieFilter />
        <MovieList movies={movieData} />
      </div>
    </div>
  );
};

export default App;
