import React from 'react';
import Rating from 'react-rating';

const ReviewComment = ({ review }) => {
  const { name, comment, rating } = review;

  return (
    <div className="review-comment border-bottom pt-2 pb-3 mb-2">
      <Rating
        initialRating={rating}
        readonly
        emptySymbol="fa-regular fa-star reviews-star me-1"
        fullSymbol="fa-solid fa-star reviews-star me-1"
        className="text-warning"
      />
      <h2 className="card-text mt-3">
        {name}
        {' '}
        - 14 June 2021
      </h2>
      <p className="description-text pe-2">
        {comment}
      </p>
    </div>
  );
};

export default ReviewComment;
