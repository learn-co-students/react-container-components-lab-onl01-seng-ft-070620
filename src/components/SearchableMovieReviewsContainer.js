import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }
    
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <button type='submit'>Search</button>
                </form>
                SEARCHED REVIEWS
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(response => response.json())
                .then(result => this.updateReviews(result))
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    updateReviews = (result) => {
        // console.log(result)
        this.setState({
            reviews: result.results
        })
    }
}

export default SearchableMovieReviewsContainer
