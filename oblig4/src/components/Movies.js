import React from 'react';
import { getMovies } from '../utils/movieService';
import Movie from './Movie.js';

const Movies = () => {
    //State
    const [movies, setMovies] = React.useState([]);
    
    //funksjon for å håndtere klikk
    const handleClick = async () => {
        const tempMovies = await getMovies();
        setMovies(tempMovies);
    };

    return (
        //håndter state
        //sjekke om data finnes og lengden er større enn 0 
        //håndter klikk
        <>
        <section>
        {movies?.length > 0 ? 
            movies.map( movie => (
                    <Movie movie = {movie} />
                )) : <p>Ingen filmer</p>}
        
        <button type="button" onClick={handleClick}>Klikk for å hente filmer</button>
        </section>
        </>
    );

}

export default Movies;