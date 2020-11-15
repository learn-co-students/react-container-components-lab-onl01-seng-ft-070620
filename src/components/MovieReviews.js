import React from "react";

const singleReview = ({
  headline,
  byline,
  mpaa_rating,
  summary_short,
  link,
}) => {
  return (
    <div className="review">
      <br />
      <header>
        <a href={link.url}>{headline}</a>
      </header>
      <h4>Written by: {byline}</h4>
      <h4>{mpaa_rating}</h4>
      <p>{summary_short}</p>
      <br />
      <br />
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(singleReview)}</div>
);

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
