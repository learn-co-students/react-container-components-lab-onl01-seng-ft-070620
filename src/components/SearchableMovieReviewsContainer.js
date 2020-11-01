import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  // handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const response = await fetch(URL + this.state.searchTerm)
  //   const movies = await response.json()
  //   this.setState({ reviews: movies.results })
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(movies => this.setState({ reviews: movies.results }))
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer