import './Add.css';
import MovieForm from '../modals/MovieForm';
import React from 'react';

const Add = () => {
  const [show, setShow] = React.useState(false);
  const open = () => setShow(true);
  
  return (
    <div className="new-movie-container">
      <button type="button" className="btn-add" onClick={open}>
        + ADD MOVIE
      </button>
      <MovieForm showModal={show} setShowModal={setShow} />
    </div>
  );
};

export default Add;
