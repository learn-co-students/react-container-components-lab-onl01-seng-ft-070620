import React from 'react';
import uuid from 'uuid';

const MovieReviews = (props) => {
    return (
        <ul className="review-list">
            {props.reviews.map(review => <li key={uuid()} className="review">{review.display_title}</li>)}
        </ul>
    )
}

export default MovieReviews