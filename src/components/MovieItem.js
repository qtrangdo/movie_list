import React, { Component } from 'react';


class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: true
        }
    }

    onClick() {
        let watched = !this.state.watched
        this.setState({ watched })
    }

    render() {
        return (
            <div className='card-body border'>
                <h5 className='card-title'>
                    <div className='row'>
                        <div className="col col-sm-8">
                            {this.props.movie.title}
                        </div>
                        <div className="col col-sm-4">
                        {this.state.watched
                            ? <button className="btn btn-success btn-sm" onClick={this.onClick.bind(this)}> Watched</button>
                            : <button className="btn btn-info btn-sm" onClick={this.onClick.bind(this)}> To watched</button>
                        }
                            
                        </div>
                    </div>
                </h5>
            </div>
        )
    }
}

export default MovieItem;