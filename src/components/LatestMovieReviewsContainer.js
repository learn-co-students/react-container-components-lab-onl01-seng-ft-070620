import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
                .then(result => this.updateReviews(result))
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                LATEST MOVIE REVIEWS
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

    updateReviews = (result) => {
        // console.log(result)
        this.setState({
            reviews: result.results
        })
    }
}

export default LatestMovieReviewsContainer
