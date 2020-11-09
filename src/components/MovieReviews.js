import React from 'react'

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {props.reviews.map(review => {
                return <div key={review.date_updated} className="review">
                            <h2>{review.display_title}</h2>
                            <h4>Rated {review.mpaa_rating}</h4>
                            <h3>Review Title: {review.headline}</h3>
                            <p>{review.summary_short}</p>
                       </div>
            })}
        </div>
    )
}

export default MovieReviews