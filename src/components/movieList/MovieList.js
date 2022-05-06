import './MovieList.css';
import Movie from '../movieItem/Movie';

const movieContent = (movies) => {
  if(movies.length){
    return (
      <>
        <h1>
          {movies.length}
          {movies.length > 1 ? ' movies' : ' movie'} found
        </h1>
        <div className="movie-list-content">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  }
  else{
    return (
      <div className="movies-not-found">
        <h1>No movie found</h1>
        <button type="button" className="btn-confirm">
          GO BACK TO SEARCH
        </button>
      </div>
    )
  }
}

const MovieList = ({ movies }) => {
  return movieContent(movies);
};

export default MovieList;
