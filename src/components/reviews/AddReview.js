import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { Form, Button } from 'react-bootstrap';
import { addReview } from '../../redux/actions/products';

const AddReview = ({ setShowAddReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [ratingError, setRatingError] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) { setRatingError(true); return; }

    const review = {
      userId: '6283bddf8aac99d0127c0314',
      name: 'Agatha Harkness',
      rating,
      comment,
    };

    dispatch(addReview(id, review));
    setShowAddReview(false);
  };

  const handleRateChange = (value) => {
    if (ratingError && value > 0) setRatingError(false);

    setRating(value);
  };

  return (
    <div className="py-2 mb-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="description-text me-2">Rate: </Form.Label>
          <Rating
            initialRating={0}
            emptySymbol="fa-regular fa-star me-1"
            fullSymbol="fa-solid fa-star me-1"
            className="text-warning"
            onChange={(rating) => handleRateChange(rating)}
          />
          {
            ratingError && (
              <Form.Text className="card-text text-danger d-block">
                Please rate this product by clicking a star. Rating must not be zero.
              </Form.Text>
            )
          }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            className="comment-text"
            as="textarea"
            rows="5"
            name="comment"
            placeholder="Write review comment"
            required
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        <div className="actions text-end">
          <Button
            variant="primary"
            type="submit"
            className="buy btn-secondary rounded-1 me-3"
            onClick={() => setShowAddReview(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="buy btn-success rounded-1">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddReview;
