import React from 'react';

const Movie = ({movie}) => {

    return (
        <>
            <h2>{movie.title}</h2>
            <p>Actor: {movie.actor}</p>
        </>
    )

}

export default Movie;