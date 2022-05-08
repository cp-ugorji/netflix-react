
import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';
import PropTypes from 'prop-types';
import './MovieForm.css'

const MovieForm = ({ showModal, setShowModal, editMovie = {}, refreshMoviesAdd, refreshMoviesUpdate }) => {
  const movieObj = {
    title:        editMovie?.title        || '',
    release_date: editMovie?.release_date || '',
    poster_path:  editMovie?.poster_path  || '',
    genres:       editMovie?.genres       || [],
    overview:     editMovie?.overview     || '',
    runtime:      editMovie?.runtime      || '',
  }

  console.log(movieObj);

  if (editMovie.id) {
    movieObj.id = editMovie.id;
  }

  const close = () => setShowModal(false);

  const switchModalTitle = editMovie.id ? 'EDIT ' : 'ADD ';
  const switchSubmit = editMovie.id ? 'SAVE' : 'SUBMIT';

  return (
    <div className="modal-container">
      <DialogOverlay aria-label="movie" isOpen={showModal} onDismiss={close}>
        <DialogContent aria-label="movie" className="modal-content">

          <div className="button-container">
            <button className="btn-close" onClick={close}>
              <span aria-hidden>×</span>
            </button>
          </div>

          <h1 className="modal-title">{ switchModalTitle }MOVIE</h1>
          <form>
          <div className="row-container">
              <label>
                  <p className="input-label">TITLE*</p>
                  <input
                    className="input-form-movie"
                    name="title"
                    type="text"
                    placeholder="Title here"
                    value={ movieObj.title }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">RELEASE DATE</p>
                  <input
                    className="input-form-movie"
                    name="release_date"
                    type="text"
                    placeholder="Select Date"
                    value={ movieObj.release_date }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">MOVIE URL*</p>
                  <input
                    className="input-form-movie"
                    name="poster_path"
                    type="text"
                    placeholder="Movie URL here"
                    value={ movieObj.poster_path }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">GENRES*</p>
                  <select
                    className="input-form-movie"
                    name="genres"
                    type="text"
                    placeholder="Select Genre"
                    value={ movieObj.genres }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">OVERVIEW*</p>
                  <input
                    className="input-form-movie"
                    name="overview"
                    type="text"
                    placeholder="Overview here"
                    value={ movieObj.overview }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">RUNTIME*</p>
                  <input
                    className="input-form-movie"
                    name="runtime"
                    type="text"
                    placeholder="Runtime here"
                    value={ movieObj.runtime }
                  />
              </label>
            </div>

            <div className="button-container">
              <button className="btn-reset" type="button">RESET</button>
              <button className="btn-submit" type="submit">{ switchSubmit }</button>
            </div>
          </form>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

MovieForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default MovieForm;
