import React from 'react';

const Movies = () => {
    //State
    // const [value, setNewValue] = React.useState('')
    //funksjon for å håndtere klikk

    const handleClick = () => {
        console.log("hei!")
    }

    return (
        //håndter state

        //håndter klikk
        <button onClick={handleClick}>Klikk!</button>
    );

}

export default Movies;