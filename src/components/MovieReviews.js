import React from 'react';

const MovieReviews = props => {
  let i = -1
  return (
    <div className='review-list'>
      <ul>
        {props.reviews.map(review => 
          <li key={i++} className="review">
            <h2>{review.headline}</h2>
            <h3>By: {review.byline}</h3>
            <p>{review.summary_short}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default MovieReviews