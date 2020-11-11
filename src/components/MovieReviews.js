// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    // console.log(props)
    return (
        <div className='review-list'>
            {props.reviews.map(r => <div className='review'>{r.display_title} - {r.summary_short}</div>)}
        </div>
    )
}

export default MovieReviews