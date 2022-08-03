import React from 'react';

const OrderHistoryDetails = () => (
  <section>
    <div className="detail-box cart-info-wrapper p-1 my-2 border rounded-1">
      <div className="d-flex">
        <div className="flex-grow-1 p-2">
          <h2 className="card-text text-dark">Shipping Address</h2>
          <p className="card-text m-0">Adress</p>
          <p className="card-text m-0">City</p>
          <p className="card-text m-0">State</p>
          <p className="card-text m-0">Zip</p>
        </div>

        <div className="flex-grow-1 p-2">
          <h2 className="card-text text-dark">Delivery Method</h2>
          <p className="card-text">Standard</p>

          <h2 className="card-text text-dark mt-3">Payment Method</h2>
          <p className="card-text">State</p>
        </div>

        <div className="flex-grow-1 p-2">
          <h2 className="card-text text-dark">Order Summary</h2>
          <div className="d-flex justify-content-between">
            <p className="card-text">Subtotal</p>
            <p className="card-text">$ 000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">Delivery fee</p>
            <p className="card-text">$ 0</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OrderHistoryDetails;
