import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  // async componentDidMount() {
  //   const response = await fetch(URL)
  //   const movies = await response.json()
  //   this.setState({ reviews: movies.results })
  // }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(movies => this.setState({ reviews: movies.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer