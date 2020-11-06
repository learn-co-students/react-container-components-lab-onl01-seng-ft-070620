import React from 'react'

const MovieReview = ({title, headline, summaryShort, url}) => {
    return (
    <div className='review'>
        <h3>{title}</h3>
        <h5>{headline}</h5>
        <p> {summaryShort} </p>
        <a href={url}>Full Review</a>
    </div>
    )
}
export default MovieReview