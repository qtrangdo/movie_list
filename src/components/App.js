import React from 'react';
import MovieItem from './MovieItem';



const App = (props) => {
    return (
        <div className='container-fluid card'>
            {props.movies.map(movie => <MovieItem key={movie.title} movie={movie} />)}
        </div>

    )
}

export default App;