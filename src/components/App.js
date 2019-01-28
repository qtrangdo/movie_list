import React from 'react';
import MovieItem from './MovieItem';
import Header from './Header';



const App = (props) => {
    return (
        <div>
            <Header />
            <div className='container-fluid card'>
                {props.movies.map(movie => <MovieItem key={movie.title} movie={movie} />)}
            </div>
        </div>
    )
}

export default App;