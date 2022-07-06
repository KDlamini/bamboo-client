import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../redux/actions/cart';
import Reviews from '../components/Reviews';
import AdvertSideBox from '../components/AdvertSideBox';
import Response from '../components/Response';
import boxAd from '../assets/boxAd.png';

function ProductDetails() {
  const product = useSelector((state) => state.products.response) || {};
  const message = useSelector((state) => state.cart.alert) || {};
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const {
    name, image, rating, category, description, features,
    reviews, price, discountPrice, countInStock, deals,
  } = product;

  const stock = [...Array(countInStock).keys()];
  const displayPrice = discountPrice || price;

  const addToCart = () => {
    dispatch(updateCart(product, quantity));
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setTotalPrice(value * displayPrice);
    setQuantity(value);
  };

  return (
    <section className="container-fluid m-0 product-details">
      <Response message={message} />

      <div className="row">

        <div className="col-md-9">
          <div className="detail-box d-flex my-3 p-2 border rounded-1">
            <div className="details-img-wrapper">
              <img src={image} alt="product" className="details-img" />
              {
                deals[0].available ? (
                  <div className="discount text-light rounded-1 m-1 p-1">
                    <p className="discount-percent">{`${deals[0].discount}%`}</p>
                    OFF
                  </div>
                ) : null
              }
            </div>
            <div className="details-info-wrapper">
              <h2 className="card-text mt-3">{name}</h2>
              <a href="#category" className="details-link">
                <p className="details-link">{category}</p>
              </a>
              <div className="d-flex mb-3">
                <i className="fa-solid fa-star text-warning pt-1 me-1" />
                <p className="details-info-text me-2">{rating}</p>
                <a href="#category" className="d-flex details-link">
                  <p className="details-link me-1">{reviews ? reviews.length : 0}</p>
                  <p className="details-link">Reviews</p>
                </a>
              </div>
              <div className="stock-info-wrapper d-flex mb-5 py-3 border-top border-bottom">
                { stock.length > 0 ? <div className="stock-info text-dark my-0 me-3">In Stock</div> : <div className="stock-info text-danger my-0 me-1">Out of Stock</div> }
                &nbsp;
                <i className="fa fa-globe text-success pt-1 my-0 me-1" aria-hidden="true" />
                &nbsp;
                <p className="details-info-text pt-1 my-0 me-3">worldwide</p>
                &nbsp;
                <p className="details-info-text pt-1 my-0">
                  {stock.length}
                  {' '}
                  Left
                </p>
              </div>
              <ul className="ps-3">
                { displayPrice > 500
                  ? <li className="card-text mb-2">Eligible for free Shipping & Delivery.</li>
                  : <li className="card-text mb-2">Worldwide Shipping Available.</li>}
                <li className="card-text mb-2">Hassle-Free Exchanges & Returns for 30 Days.</li>
                <li className="card-text mb-2">6-Month Limited Warranty.</li>
              </ul>
            </div>
          </div>
          <div className="detail-box my-3 p-2 pt-4 border rounded-1">
            <h3 className="title text-dark">Description</h3>
            <p className="description-text">{description}</p>
            <h3 className="title text-dark mt-2">{features ? 'Key Features:' : null}</h3>
            <ul className="description-text">
              {features && features.map((feature) => <li key={feature} className="description-text mb-2">{feature}</li>)}
            </ul>
          </div>

          <Reviews rating={rating} reviews={reviews} />
        </div>

        <div className="col-md-3">
          <div className="detail-box my-3 p-2 border rounded-1">
            <p className="card-text mt-3">
              <b className="price">
                $
                {' '}
                {displayPrice}
              </b>
              {
                discountPrice
                && (
                <div className="price-old text-danger">
                  Was
                  {' '}
                  <span className="text-decoration-line-through">{price}</span>
                </div>
                )
              }
            </p>
            <hr />

            <p className="details-info-text my-0">Select Quantity</p>
            <select
              className="form-select w-50"
              aria-label="Default select example"
              value={quantity}
              onChange={(e) => handleQuantityChange(e)}
              disabled={!stock.length}
            >
              <option defaultValue={1}>1</option>
              {
                stock.map((stock, index) => (
                  <option key={stock} value={index + 1}>{index + 1}</option>
                ))
              }
            </select>

            <div className="d-flex stock-info text-dark mt-3">
              <p className="my-0">Total Price: </p>
              &nbsp;
              <b className="ml-3">
                $
                {' '}
                {totalPrice > displayPrice ? totalPrice : displayPrice}
              </b>
            </div>

            <div className="actions my-3 py-1">
              <button
                type="button"
                className="buy btn btn-success rounded-1 w-100"
                onClick={addToCart}
                disabled={!stock.length}
              >
                <i className="fa fa-plus" aria-hidden="true" />
                <i className="fas fa-shopping-cart" />
                &nbsp;
                Add to Cart
              </button>
            </div>
          </div>

          <div className="me-1">
            <div className="mt-2">
              <AdvertSideBox image={boxAd} url="/" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
