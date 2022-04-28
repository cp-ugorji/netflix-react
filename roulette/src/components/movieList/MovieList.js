import './MovieList.css';
import Movie from '../movieItem/Movie';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.length ? (
        <div className="movie-list-content">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="movies-not-found">
          <h1>No movie found</h1>
          <button type="button" className="btn-confirm">
            GO BACK TO SEARCH
          </button>
        </div>
      )}
    </>
  );
};

export default MovieList;
