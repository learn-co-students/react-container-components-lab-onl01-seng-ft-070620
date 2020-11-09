import React, { Component } from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h4>~Search Reviews~</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} />
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const endpoint = URL + `&query=${this.state.searchTerm}`
    fetch(`${endpoint}`)
    .then(response => response.json())
    .then(jsObj => {
      this.setState({reviews: jsObj.results})
    })

    this.setState({searchTerm: ''})
  }

}
