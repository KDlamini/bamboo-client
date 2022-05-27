import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

function Product({ product }) {
  const {
    _id: id, name, image, price, rating,
  } = product;

  return (
    <div key={id} className="card col-md-3 m-3 p-2">
      <Link to={`product/${id}`} className="link text-dark">
        <img src={image} alt="product" className="product-img" />
        <h2 className="card-text name">{name}</h2>
        <p className="card-text">
          <b>Price:</b>
          {' '}
          <span className="price">
            R
            {' '}
            {price}
          </span>
        </p>
        <p className="card-text">
          <b>Rating:</b>
          {' '}
          <Rating
            initialRating={rating}
            readonly
            emptySymbol="fa-regular fa-star me-2"
            fullSymbol="fa-solid fa-star me-2"
            className="text-warning"
          />
        </p>
      </Link>
    </div>
  );
}

export default Product;
