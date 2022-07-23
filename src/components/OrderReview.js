import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import { processPayment } from '../redux/actions/cart';

const OrderReview = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const {
    price, quantity, address, paymentIntent,
  } = useSelector((state) => state.cart.checkout);
  const { isAuthenticated, user: { _id: userId } } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (paymentIntent) {
      setIsLoading(false);
      window.location.href = paymentIntent.url;
    }
  }, [paymentIntent]);

  const {
    username, phone, house_name: houseName, street, city, state, zip,
  } = address;

  const confirmOrder = () => {
    dispatch(processPayment({ userId, address, order: cartItems }));
    setIsLoading(true);
  };

  return (
    <section className="container-fluid main-container cart-details m-0">
      <h2 className="title mt-3 mx-2 ps-3">
        <span className="text-muted opacity-25">Delivery / </span>
        Payment
        <span className="text-muted opacity-25"> / Confirmation</span>
      </h2>

      <div className="row mx-2">
        <div className="col-md-9 pt-3">
          <div className="detail-box text-start p-3 border rounded-1">
            <h3 className="title">Order Review</h3>

            <div className="address-wrapper">
              <div className="actions d-flex justify-content-between mt-4">
                <h3 className="description-text text-dark m-0"><strong>Shipping Address</strong></h3>
                <button
                  type="button"
                  className="details-link bg-light p-0 m-0 border-0"
                  onClick={() => navigate('/checkout')}
                >
                  Change
                </button>
              </div>
              <div className="card-text w-100 p-2">
                <p className="p-o m-0">{username}</p>
                <p className="p-o m-0">{houseName || null}</p>
                <p className="p-o m-0">{street}</p>
                <p className="p-o m-0">{city}</p>
                <p className="p-o m-0">{state}</p>
                <p className="p-o m-0">{zip || null}</p>

                <p className="p-o m-0 mt-2">{formatPhoneNumberIntl(phone)}</p>
              </div>
            </div>

            <div className="cart-items-wrapper">
              <div className="actions d-flex justify-content-between mt-4">
                <h3 className="description-text text-dark m-0"><strong>Order Items</strong></h3>
                <button
                  type="button"
                  className="details-link bg-light p-0 m-0 border-0"
                  onClick={() => navigate('/cart')}
                >
                  Change
                </button>
              </div>

              <div className="card-text w-100 mt-2">
                {cartItems.map((item) => {
                  const {
                    _id: id, name, image, quantity, price, discountPrice, category,
                  } = item;

                  const displayPrice = discountPrice || price;

                  return (
                    <div key={id} className="d-flex mb-1">
                      <div className="cart-img-wrapper">
                        <img src={image} alt="product" className="cart-img" />
                      </div>

                      <div className="cart-info-wrapper d-flex flex-column justify-content-center px-3">
                        <h3 className="card-text mt-2"><strong>{name}</strong></h3>
                        <div className="text-start">
                          <p
                            className="m-0 p-0"
                          >
                            {category}
                          </p>
                        </div>
                        <p className="mt-2 text-start">
                          <b className="card-text price p-0">
                            $
                            {' '}
                            {displayPrice * quantity}
                          </b>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="detail-box my-3 p-3 border rounded-1">
            <h3 className="title text-dark mb-4 mt-1">Order Summary</h3>
            <div className="d-flex justify-content-between card-text mt-3">
              <div className="d-flex">
                <h2 className="card-text pt-1 my-0 me-2">To Pay:</h2>
                <p className="details-info-text pt-1 my-0 me-3">
                  (
                  {quantity}
                  {quantity === 1 ? ' item' : ' items'}
                  )
                </p>
              </div>
            &nbsp;
              <b className="card-text price p-0 text-success">
                $
                {' '}
                {price}
              </b>
            </div>

            <div className="actions mt-3 py-1">
              <button
                type="button"
                className="buy btn btn-success rounded-1 w-100"
                onClick={confirmOrder}
                disabled={!Object.keys(address).length || isAuthenticated === false}
              >
                {
                  isLoading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  ) : 'Confirm Order'
                }
              </button>
            </div>
            <p className="card-text mb-2 text-center">
              <i className="fa-solid fa-lock me-3" />
              Secure checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReview;
