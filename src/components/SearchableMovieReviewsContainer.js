import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component
{
    constructor(props)
    {
        super()
        this.state = {searchTerm: '', reviews: []}
        this.getReviews()

    }

    // changeSomethingOnDeeperLevelOfState()
    // {
    //     this.setState({
    //         keyOfDeeperLevel: {
    //           ...this.state.keyOfDeeperLevel,
    //           thingWeWannaChange: 'New Value'
    //         }
    //       });
    // }

    // changeStateDynamically()
    // {
    //     this.setState((previousState => {return {value: previousState.value + 1}})) 
    //     //Just adding one as an example. You could call a function on this data if you wanted.
    //     //previousState parameter is automatically passed in. Name is descriptive.
    // }

    // componentDidMount() {
    //     //this.interval = setInterval(this.fetchWeather, 15000);
    //     //can set up a constant fetch
    // }

    // componentWillUnmount() {
    //     //clearInterval(this.interval);
    //     //would stop the fetch set up in componentDidMount
    // }

    getReviews = () => {
        fetch(`${URL}?query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(r => this.setState({reviews: r}))
    }

    handleSubmit = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render()
    {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                </form>
                <div className='searchable-movie-reviews'>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            </Fragment>
        )
    }
}