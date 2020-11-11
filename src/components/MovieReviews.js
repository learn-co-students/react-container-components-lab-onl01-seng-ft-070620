// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className='review-list'>
            {props.reviews.map(review => {return(<p className='review'>{review.display_title}</p>)})}
        </div>
    )
}