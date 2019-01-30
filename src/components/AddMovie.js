import React, { Component } from 'react';

class AddMovie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {
                title: ''
            }
        }
    }

    onChange(event) {
        this.setState({
            ...this.state,
            movie: {
                ...this.state.movie,
                title: event.target.value
            }
        })
    }

    onClick() {
        this.props.addMovie(this.state.movie.title)
    }

    render() {
        return (
            <div className="container-fluid my-3">
                <div className="input-group">
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Add a movie title'
                        value={this.state.movie.title}
                        onChange={this.onChange.bind(this)}
                    />
                    <span className='input-group-btn'>
                        <button className="btn btn-success" onClick={this.onClick.bind(this)}>Add</button>
                    </span>
                </div>
            </div>
        )
    }

}

export default AddMovie;