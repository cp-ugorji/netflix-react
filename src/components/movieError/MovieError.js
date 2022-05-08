import React from 'react';

function MovieError({ error }) {
    return <div role="alert">There was an error: {error.message}</div>;
}

export default MovieError;
