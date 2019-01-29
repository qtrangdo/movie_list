import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchStr: ''
        }
    }

    render() {
        return (
            <div className="container-fluid my-4">
                <div className="input-group">
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Search for movie'
                    />
                    <span className='input-group-btn'>
                        <button className='btn btn-outline-primary' type='button'>Go</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Search;