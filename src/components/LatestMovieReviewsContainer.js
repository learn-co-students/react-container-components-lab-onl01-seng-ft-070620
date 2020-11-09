import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LastestMovieReviewsContainer extends Component {
    state = {reviews: []}

    componentDidMount() {
        fetch(URL)
          .then(r => r.json())
          .then(({ results }) => this.addReviews(results))
    }

    addReviews(reviews) {
        this.setState({reviews: reviews})
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}