import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  fetchData = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  componentDidMount() {
    this.fetchData()
  }
}

export default LatestMovieReviewsContainer