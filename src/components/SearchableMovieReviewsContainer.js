import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const api = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  fetchMovieReviews = () => {
    const baseUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${api}`;

    fetch(baseUrl)
      .then(res => res.json())
      .then(obj => this.setState({ reviews: obj.results }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.fetchMovieReviews}>
          <input
            type="text"
            name="searchTerm"
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
          <input type="submit" name="" id="" />
        </form>
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
        ;
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
