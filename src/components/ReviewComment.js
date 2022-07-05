import React from 'react';
import Rating from 'react-rating';

const ReviewComment = ({ rating }) => (
  <div className="review-comment border-bottom pt-2 pb-3 mb-2">
    <Rating
      initialRating={rating}
      readonly
      emptySymbol="fa-regular fa-star me-1"
      fullSymbol="fa-solid fa-star me-1"
      className="text-warning"
    />
    <h2 className="card-text mt-3">Katherine - 14 June 2021</h2>
    <p className="card-text pe-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem.

    </p>
  </div>
);

export default ReviewComment;
