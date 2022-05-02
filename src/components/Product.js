import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

function Product({ product }) {
  const {
    id, name, image, price, rating,
  } = product;

  return (
    <div key={product.description} className="card col-md-3 m-3 p-2">
      <Link to={`product/${id}`} className="link text-dark">
        <img src={image} alt="product" className="product-img" />
        <h1 className="card-text name">{name}</h1>
        <p className="card-text">
          <b>Price:</b>
          {' '}
          {price}
        </p>
        <p className="card-text">
          <b>Rating:</b>
          {' '}
          <Rating
            initialRating={rating}
            emptySymbol="fa-regular fa-star me-2"
            fullSymbol="fa-solid fa-star me-2"
          />
        </p>
      </Link>
    </div>
  );
}

export default Product;
