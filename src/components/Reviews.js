import React, { useState, useCallback } from 'react';
import Rating from 'react-rating';
import ProgressBar from '@ramonak/react-progress-bar';
import ReviewComment from './ReviewComment';
import AddReview from './AddReview';

const Reviews = ({ rating, reviews }) => {
  const [showAddReview, setShowAddReview] = useState(false);
  const bgColors = ['#198754', '#25cd66', '#b8b504', '#ffc107', '#ba0219'];

  const ratingPerStar = useCallback((num) => (
    reviews.filter((obj) => obj.rating === num).length
  ), [reviews]);

  const ratingPercent = (number) => (number / reviews.length) * 100;

  return (
    <div className="detail-box text-start my-3 p-2 pt-4 border rounded-1" id="reviews">
      <h3 className="title text-dark">Reviews</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex reviews-header">
            <p className="details-info-text me-3 px-2 fs-2">{rating}</p>
            <div className="p-2">
              <Rating
                initialRating={rating}
                readonly
                emptySymbol="fa-regular fa-star me-1"
                fullSymbol="fa-solid fa-star me-1"
                className="text-warning"
              />
              <div href="#category" className="d-flex">
                <p className="card-text me-1">{reviews ? reviews.length : 0}</p>
                <p className="card-text">Reviews</p>
              </div>
            </div>
          </div>
          <div className="p-2 border-top">
            {
            [5, 4, 3, 2, 1].map((stat, index) => (
              <div key={stat} className="progress-bar-wrapper d-flex">
                <p className="progress-left">
                  <span className="details-info-text me-1">{stat}</span>
                  <i className="fa-solid fa-star reviews-star text-warning pt-1 me-1" />
                </p>
                <ProgressBar
                  className="progress-bar-custom"
                  width={100}
                  height={8}
                  bgColor={bgColors[index]}
                  isLabelVisible={false}
                  completed={ratingPercent(stat)}
                />
                <p className="progress-right details-info-text text-end">{ratingPerStar(stat)}</p>
              </div>
            ))
          }
          </div>
          <div className="actions text-center mt-2">
            <button
              type="button"
              className="buy btn btn-success rounded-1 w-100"
              onClick={() => setShowAddReview(true)}
              disabled={showAddReview}
            >
              Add Review
            </button>
          </div>
        </div>

        <div className="col-md-9">
          {
            showAddReview ? (
              <AddReview setShowAddReview={setShowAddReview} />
            ) : null
          }

          <div className={showAddReview ? 'reviews-disabled' : 'reviews-list'}>
            <div className="d-flex justify-content-between my-2">
              <p className="details-info-text py-1 my-0">{`${reviews ? reviews.length : 0} results`}</p>
              <div className="me-4">
                <span className="details-info-text">Sort by: &nbsp;</span>
                <select
                  className="card-text border bg-light px-1 py-2"
                >
                  <option value="Relevance">Most recent</option>
                  <option value="High to Low">Most rated</option>
                </select>
              </div>
            </div>
            {
              reviews.map((review) => (
                <ReviewComment key={review.name} review={review} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
