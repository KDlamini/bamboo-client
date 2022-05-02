import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  const {
    id, name, image, price, rating,
  } = product;

  return (
    <div key={product.description} className="card col-md-3 m-3 p-2">
      <Link to={`product/${id}`}>
        <img src={image} alt="product" className="product-img" />
        <h1 className="card-text">{name}</h1>
        <p className="card-text">
          <b>Price:</b>
          {' '}
          {price}
        </p>
        <p className="card-text">
          <b>Rating:</b>
          {' '}
          {rating}
        </p>
      </Link>
    </div>
  );
}

export default Product;
