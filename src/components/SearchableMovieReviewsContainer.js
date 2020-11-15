import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: [],
    };
  }

  handleFormInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    {
      debugger;
    }
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then((resp) => resp.json())
      .then((rev) => this.setState({ reviews: rev.results }));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            type="text"
            id="search-input"
            onChange={this.handleFormInputChange}
          />
          <button type="submit">Submit Search</button>
        </form>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}

        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
