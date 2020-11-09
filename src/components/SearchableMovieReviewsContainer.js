import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    updateSearchTerm = (e) => {
        this.setState(previousState => {
            return {
                ...previousState,
                [e.target.name]: e.target.value
            }
        })
    }

    fetchReviews = (e) => {
        e.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
          .then(r => r.json())
          .then(({results}) => this.addQueriedReviews(results))
    }

    addQueriedReviews(reviews) {
        this.setState({reviews: reviews})
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.fetchReviews}>
                    <input 
                        onChange={this.updateSearchTerm}
                        type="text" 
                        name="searchTerm"
                        value={this.state.searchTerm}    
                    />
                    <input 
                        type="submit"
                        value="Submit"
                    />
                </form>
                <div className="searchable-movie-reviews">
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            </React.Fragment>
        )
    }
}