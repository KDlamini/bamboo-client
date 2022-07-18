import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { v4 as uuidv4 } from 'uuid';
import { getSecret, paymentSuccess } from '../redux/actions/cart';
import { returnErrors, clearErrors } from '../redux/actions/errors';

const Payment = () => {
  const {
    price, quantity, address, paymentIntent,
  } = useSelector((state) => state.cart.checkout);
  const { email } = useSelector((state) => state.auth.user);

  const stripe = useStripe();
  const elements = useElements();
  const paymentData = { id: uuidv4(), price, email };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearErrors());

    if (Object.keys(paymentIntent).length === 0) {
      dispatch(getSecret(paymentData));
    }
  }, []);

  const confirmPayment = async (event, clientSecret) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          address: {
            city: address.city,
            line1: address.house_name,
            line2: address.street,
            postal_code: address.zip,
            state: address.state,
          },
          email,
          name: address.username,
          phone: address.phone,
        },
      },
    });

    if (error) {
      dispatch(returnErrors(error, 401, 'PAYMENT_FAILED'));
    } else if (paymentIntent.status === 'succeeded') {
      dispatch(clearErrors());
      dispatch(paymentSuccess(paymentIntent));
    }
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
            <h3 className="title">Place an Order</h3>
            <div className="card-details-wrapper mt-3">
              <Form className="address">
                <Form.Group className="mb-3">
                  <Form.Label className="description-text me-2">Card Holder</Form.Label>
                  <Form.Control
                    name="card-holder"
                    placeholder="Card Holder Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="description-text me-2">Card Details</Form.Label>
                  <CardElement />
                </Form.Group>
              </Form>
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
                className="buy btn btn-warning rounded-1 w-100"
                onClick={(e) => confirmPayment(e, paymentIntent.client_secret)}
                disabled={!stripe || !elements}
              >
                Pay
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

export default Payment;
