import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

function Product({ product }) {
  const {
    _id: id, name, image, price, rating, deals,
  } = product;

  return (
    <div key={id} className="card product col-md-3 m-3 mt-0 p-2">
      <Link to={`product/${id}`} className="link text-dark">
        <img src={image} alt="product" className="product-img" />
        <h2 className="card-text name">{name}</h2>
        <p className="card-text">
          <b className="price">
            $
            {' '}
            {price}
          </b>
        </p>
        <p className="card-text">
          Rating:
          {' '}
          <Rating
            initialRating={rating}
            readonly
            emptySymbol="fa-regular fa-star me-2"
            fullSymbol="fa-solid fa-star me-2"
            className="text-warning"
          />
        </p>
        {
          deals[0].available ? (
            <div className="discount text-light rounded-1 m-1 p-1 w-25">
              <p className="discount-percent">{`${deals[0].discount}%`}</p>
              OFF
            </div>
          ) : null
        }
      </Link>
    </div>
  );
}

export default Product;
