import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = event => this.setState({searchTerm: event.target.value})

    handleSubmit = event => {
        event.preventDefault()
        this.fetchReviewSearch()
    }

    fetchReviewSearch = () => {
        let searchURL = URL + `&query=${this.state.searchTerm}`
        fetch(searchURL)
        .then(r=>r.json())
        .then(reviews=> this.setState({reviews: reviews.results}))
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer