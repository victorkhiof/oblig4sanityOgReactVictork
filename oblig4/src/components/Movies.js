import React from 'react';
import { getMovies } from '../utils/movieService';

const Movies = () => {
    //State
    const [data, setData] = React.useState([]);
    //funksjon for å håndtere klikk

    const handleClick = async () => {
        const movies = await getMovies();
        setData(movies);
    };

    return (
                //håndter state
        //sjekke om data finnes og lengden er større enn 0 
        //håndter klikk
        <p>

        {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
        
        <button type="button" onClick={handleClick}>Klikk!</button>
        </p>
    );

}

export default Movies;