import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }


    onChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(jsObj => {
            console.log(jsObj)
            this.setState({
                reviews: jsObj.results
            })
        })
    }

    render() {
        return(
            <React.Fragment>
                <form onSubmit={this.onSubmit} className="searchable-movie-reviews">
                    <input type="text" name="query" onChange={this.onChange} />
                    <input type="submit" />
                </form>
                <h3>Search Results:</h3>
                <MovieReviews reviews={this.state.reviews} />
            </React.Fragment>
        )
    }
}