import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const api = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const queryAll = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${api}`;

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    this.fetchMovieReviews();
  }

  fetchMovieReviews = (query = undefined) => {
    const searchable = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}?api-key=${api}`;
    const baseUrl = !!query ? searchable : queryAll;

    fetch(baseUrl)
      .then(res => res.json())
      .then(obj => this.setState({ reviews: obj.results }));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
