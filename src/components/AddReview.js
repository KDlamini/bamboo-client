import React, { useState } from 'react';
import Rating from 'react-rating';
import { Form, Button } from 'react-bootstrap';

const AddReview = ({ setShowAddReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      rating,
      comment,
      createdAt: new Date(),
      user: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/',
      },
    };

    return review;
  };

  return (
    <div className="py-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="description-text me-2">Rate: </Form.Label>
          <Rating
            initialRating={0}
            emptySymbol="fa-regular fa-star me-1"
            fullSymbol="fa-solid fa-star me-1"
            className="text-warning"
            onChange={(rating) => setRating(rating)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            className="comment-text"
            as="textarea"
            rows="5"
            name="comment"
            placeholder="Write review comment"
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
