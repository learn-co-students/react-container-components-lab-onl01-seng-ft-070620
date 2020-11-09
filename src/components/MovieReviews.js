import React from 'react'

const MovieReviews = props =>
  <ul className='review-list'>
    {props.reviews.map(r =>
      <li className='review'>
        <a href={r.link.url}>{r.display_title}</a>: {r.summary_short}
      </li>)
    }
  </ul>

export default MovieReviews
