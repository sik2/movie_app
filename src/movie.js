import React, { Component } from 'react';
import './movie.css';

class movie extends Component {
    render() {
        return(
            <div>
                <moviePoster/>
                <h1>Fucking page!</h1>
            </div>
        );
    }
}
class movePoster extends Component {
    render() {
        return(
            <img src="/image/dead.jpg" alt=""/>
        );
    }
}
export default movePoster;