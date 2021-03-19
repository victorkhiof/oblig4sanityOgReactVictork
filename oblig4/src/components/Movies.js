import React from 'react';
import { getMovies } from '../utils/movieService';

const Movies = () => {
    //State
    const [data, setData] = React.useState([]);
    //funksjon for å håndtere klikk

    const handleClick = async () => {
        const movies = await getMovies();
        setData(movies);
        console.log(data);
    };

    return (
                //håndter state
        //sjekke om data finnes og lengden er større enn 0 
        //håndter klikk
        <>
        <p>test skriving ut data:</p>
        <section>
        {data?.length > 0 ? data.map(
            dataEntry => (
                <>
                <p>{dataEntry.title}</p>
                <p>{dataEntry.actor}</p>
                </>
                )) : null}
        
        <button type="button" onClick={handleClick}>Klikk! Jeg er movies.js-knapp</button>
        </section>
        </>
    );

}

export default Movies;