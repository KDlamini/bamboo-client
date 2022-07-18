import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';

const OrderReceipt = () => {
  const navigate = useNavigate();

  return (
    <section className="container-fluid main-container cart-details m-0">
      <h2 className="title my-3 mx-2 ps-3">
        <span className="text-muted opacity-25">Delivery / Payment / </span>
        Confirmation
      </h2>
      <div className="detail-box text-center mx-3 p-3 rounded-1">
        <h3 className="title text-center">Order Confirmation</h3>
        <div className="d-flex justify-content-center my-2">
          <Alert color="success" className="text-center w-50 m-0">Payment Successful</Alert>
        </div>
        <h4 className="description-text text-center fs-6 mt-4">Receipt #1571-0725</h4>

        <div className="receipt-content d-flex flex-column align-items-center mt-4">
          <div className="w-75 p-1">
            <div className="d-flex justify-content-between description-text p-1">
              <div>
                <h5 className="description-text fw-bold text-center m-0">AMOUNT PAID</h5>
                <p className="description-text m-0">
                  <b>$</b>
                  {' '}
                  899
                </p>
              </div>
              <div>
                <h5 className="description-text fw-bold text-center m-0">DATE PAID</h5>
                <p className="description-text m-0">7/15/22, 11:20 AM</p>
              </div>

              <div>
                <h5 className="description-text fw-bold text-center m-0">PAYMENT METHOD</h5>
                <p className="description-text m-0">
                  <b>Visa</b>
                  {' '}
                  - 4242
                </p>
              </div>
            </div>

            <hr className="my-3" />

            <div className="d-flex justify-content-between description-text p-1">
              <div>
                <h5 className="description-text fw-bold text-center m-0">DELIVERY ADDRESS</h5>
                <p className="description-text m-0">
                  <b>John Doe</b>
                  {' '}
                  <br />
                  123 Main St.
                  {' '}
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h5 className="description-text fw-bold text-center m-0">DELIVERY METHOD</h5>
                <p className="description-text m-0 mt-3">
                  <b>Standard</b>
                  {' '}
                  -
                  {' '}
                  <b>$</b>
                  {' '}
                  0
                </p>
              </div>
            </div>

            <hr className="my-3" />

            <div className="description-text p-1">
              <h5 className="description-text fw-bold m-0">SUMMARY</h5>
              <div className="d-flex justify-content-between my-1">
                <p className="description-text m-0">Order #9f4d3d53-3e65-4888-bec7-63be96e33e0f</p>
                <p className="description-text m-0">
                  <b>$</b>
                  {' '}
                  899.00
                </p>
              </div>

              <div className="d-flex justify-content-between my-1">
                <h5 className="description-text fw-bold m-0">Amount charged</h5>
                <p className="description-text m-0">
                  <b>$</b>
                  {' '}
                  899.00
                </p>
              </div>
            </div>
          </div>

          <div className="actions mb-3 mt-5">
            <button
              type="button"
              className="buy btn btn-warning rounded-1 m-0"
              onClick={() => navigate('/')}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReceipt;
