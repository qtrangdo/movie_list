import React, {Component} from 'react';


class MovieItem extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='card-body border'>
                <h5 className='card-title'>
                    {this.props.movie.title}
                </h5>
            </div>
        )
    }
}

export default MovieItem;