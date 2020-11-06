// import React from 'react'
// import MovieReview from './MovieReview'

// const MovieReviews = ({reviews}) => {
//     return (
//         <div className="review-list"> 
//             {reviews.map( review => <MovieReview title={review.display_title} headline={review.headline} summaryShort={review.summary_short} url={review.link.url} /> )}
//         </div>
//     )
// }

// MovieReviews.defaultProps = {
//     reviews: []
// }

// export default MovieReviews

import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;