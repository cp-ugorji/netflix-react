import React from 'react';
import './movieDelete.css';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';
import PropTypes from 'prop-types';

const MovieDelete = ({ showModal, setShowModal, movieId, refreshMovies }) => {
    const close = () => setShowModal(false);

    async function deleteMovieAction() {
        console.log('deleted');
        close();
    }

    return (
        <div className="modal-container">
            <DialogOverlay aria-label="movie" isOpen={showModal} onDismiss={close}>
                <DialogContent aria-label="movie" className="modal-content">
                    <div className="button-container">
                        <button className="btn-close" onClick={close}>
                            <span aria-hidden>×</span>
                        </button>
                    </div>

                    <h1 className="modal-title">DELETE MOVIE</h1>
                    <p>Are you sure you want to delete this movie?</p>

                    <div className="button-container">
                        <button className="btn-confirm" type="button" onClick={deleteMovieAction}>
                            CONFIRM
                        </button>
                    </div>
                </DialogContent>
            </DialogOverlay>
        </div>
    );
};

MovieDelete.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    movieId: PropTypes.number.isRequired
};

export default MovieDelete;
