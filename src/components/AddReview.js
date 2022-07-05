import React from 'react';
import Rating from 'react-rating';
import { Form, Button } from 'react-bootstrap';

const AddReview = () => (
  <div className="py-2">
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className="description-text me-2">Rate: </Form.Label>
        <Rating
          initialRating={0}
          emptySymbol="fa-regular fa-star me-1"
          fullSymbol="fa-solid fa-star me-1"
          className="text-warning"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          className="comment-text"
          as="textarea"
          rows="3"
          name="comment"
          placeholder="Write review comment"
        />
      </Form.Group>

      <div className="actions text-end">
        <Button variant="primary" type="submit" className="buy btn-secondary rounded-1 me-3">
          Cancel
        </Button>
        <Button variant="primary" type="submit" className="buy btn-success rounded-1">
          Submit
        </Button>
      </div>
    </Form>
  </div>
);

export default AddReview;
