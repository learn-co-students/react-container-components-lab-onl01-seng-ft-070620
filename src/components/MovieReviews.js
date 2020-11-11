import React from "react";

const MovieReviews = ({ reviews: arr }) => {
  const helperFuncs = {
    list: () => arr.map(rev => <div className="review">{rev.headline}</div>)
  };

  return <div className="review-list">{helperFuncs.list()}</div>;
};

export default MovieReviews;
