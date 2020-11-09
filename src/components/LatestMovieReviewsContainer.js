import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {reviews: []}
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <h4>~Latest Reviews~</h4>
        <MovieReviews reviews={this.state.reviews} />
        <br></br>
      </div>
    )
  }

  componentDidMount() {
    fetch(`${URL}`)
    .then(response => response.json())
    .then(jsObj => {
      this.setState({reviews: jsObj.results})
    })
  }

}
