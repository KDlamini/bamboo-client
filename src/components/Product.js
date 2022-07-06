import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { getOneProduct } from '../redux/actions/products';

function Product({ product }) {
  const dispatch = useDispatch();

  const {
    _id: id, name, image, price, rating, deals, discountPrice,
  } = product;

  return (
    <div key={id} className="card product col-md-3 m-3 mt-0 p-2">
      <Link
        className="link text-dark"
        onClick={() => dispatch(getOneProduct(id))}
        to={`product/${id}`}
      >
        <img src={image} alt="product" className="product-img" />
        <h2 className="card-text name">{name}</h2>
        <div className={discountPrice ? 'd-flex justify-content-between card-text' : 'card-text'}>
          <b className="price">
            $
            {' '}
            {discountPrice || price}
          </b>
          {
            discountPrice
            && (
            <p className="price-old text-danger">
              Was
              {' '}
              <span className="text-decoration-line-through">{price}</span>
            </p>
            )
          }
        </div>
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
            <div className="discount text-light rounded-1 m-1 p-1">
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
