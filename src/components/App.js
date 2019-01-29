import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Header from './Header';
import Search from './Search';

var movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: null || movies,
            existMovies: true
        }
    }

    onChange(str) {
        let moviesChange = [];
        let existMovies;
        movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(str.toLowerCase())) {
                moviesChange.push(movie)
            }
        });
        moviesChange.length > 0 ? existMovies = true : existMovies = false;
        this.setState({ movies: moviesChange, existMovies })
    }



    render() {
        return (
            <div>
                <Header />
                <Search onChange={this.onChange.bind(this)} />
                {!!this.state.movies &&
                    <div className='container-fluid card'>
                        {this.state.movies.map(movie => <MovieItem key={movie.title} movie={movie} />)}
                    </div>
                }
                {!this.state.existMovies && 
                    <div className='alert alert-warning' role='alert'>
                        {/* Add icon herelater */}
                        No movie found
                    </div>
                }
            </div>
        )
    }
}

export default App;