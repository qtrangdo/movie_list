import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Header from './Header';
import Search from './Search';
import AddMovie from './AddMovie';

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
            existMovies: true,
            conflictMovie: false
        }
        this.addQuery = '';
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

    movieChange(event) {
        //event is false
        this.setState({conflictMovie: false})
    }
    //BUGSSSSSSSSS!!!!
    //CHECK FOR EMPTY TITLE
    //SET conflick back to false when delete string
    addMovie(title) {
        const { conflictMovie } = this.state
        // if(title = '') {
        //     this.setState({ conflictMovie: false })
        // } else
        if (this.checkConflict(title)) {
            this.setState({ conflictMovie: true })
        } else if (!conflictMovie) {
            let movies = this.state.movies;
            !!movies ? movies.push({ 'title': title }) : movies = [{ 'title': title }];
            this.setState({
                movies,
                conflictMovie: false
            })
        }
    }

    checkConflict(title) {
        const { movies } = this.state;
        if (!!movies) {
            for (let movie of movies) {
                if (movie.title === title) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                <Header />
                <AddMovie addMovie={this.addMovie.bind(this)} onChange={this.movieChange.bind(this)}/>
                {this.state.conflictMovie &&
                    <div className="alert alert-warning" role="warning">
                        Movie is already in the list
                    </div>
                }
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