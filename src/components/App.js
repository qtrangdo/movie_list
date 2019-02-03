import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Header from './Header';
import Search from './Search';
import AddMovie from './AddMovie';


class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            matchedMovie: [],
            existMovies: true,
            conflictMovie: false,
            emptyTitle: false
        }
        this.addQuery = '';
    }

    onChange(str) {
        let moviesChange = [];
        let existMovies;
        this.state.movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(str.toLowerCase())) {
                moviesChange.push(movie)
            }
        });
        moviesChange.length > 0 ? existMovies = true : (existMovies = false, moviesChange = this.state.movies);
        this.setState({ matchedMovie: moviesChange, existMovies })
    }

    movieChange(event) {
        if (event === false) {
            this.setState({conflictMovie: false})
        } else {
            this.setState({emptyTitle: false})
        }
    }
    

    addMovie(title) {
        const { conflictMovie, movies, matchedMovie} = this.state

        if(title === '') {
            this.setState({ emptyTitle: true })
        } else
        if (this.checkConflict(title)) {
            this.setState({ conflictMovie: true })
        } else if (!conflictMovie) {
            movies.push({ 'title': title });
            matchedMovie.push({ 'title': title })
            // !!movies ? movies.push({ 'title': title }) : movies = [{ 'title': title }];
            this.setState({
                movies,
                matchedMovie,
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
                {this.state.emptyTitle &&
                    <div className="alert alert-warning" role="warning">
                        Please enter movie title to add.
                    </div>
                }
                <Search onChange={this.onChange.bind(this)} />
                {!this.state.existMovies &&
                    <div className='alert alert-warning' role='alert'>
                        {/* Add icon herelater */}
                        No movie found
                    </div>
                }
                {/* {!!this.state.movies && */}
                    <div className='container-fluid card'>
                        {this.state.matchedMovie.map(movie => <MovieItem key={movie.title} movie={movie} />)}
                    </div>
                {/* } */}
            </div>
        )
    }
}

export default App;