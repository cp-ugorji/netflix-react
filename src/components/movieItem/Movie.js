import './Movie.css';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => {
  return (
    <div className="item-container">
      <div className="menu-action">
        <Menu>
          <MenuButton>Actions</MenuButton>
          <MenuList>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className="movie-container">
        <div>
          <img src={movie.image_url} height="461" width="337" alt="movie icon" />
        </div>

        <div className="title-content">
          <p className="movie-title">{movie.title}</p>
          <span className="movie-date">{new Date(movie.release_date).getFullYear()}</span>
        </div>

        <p className="movie-genres">{movie.genres.join(', ')}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default Movie;
