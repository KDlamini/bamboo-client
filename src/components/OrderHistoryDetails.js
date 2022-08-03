import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistoryDetails = () => {
  const {
    delivery_status: status, createdAt, subtotal, shipping,
  } = useSelector((state) => state.orders.order);
  const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  };

  return (
    <section>
      <div className="detail-box cart-info-wrapper p-2 my-2 border rounded-1">
        {
        status === 'pending' ? (
          <div className="p-2 mb-2">
            <h2 className="card-text text-muted">
              Ordered
              {' '}
              {new Date(createdAt).toLocaleDateString(undefined, options)}
            </h2>
          </div>
        ) : (
          <h2 className="card-text text-dark">Delivered Thu, 12 Aug 2021</h2>
        )
      }
        <div className="d-flex">
          <div className="flex-grow-1 p-2">
            <h2 className="card-text text-dark d-flex">
              <i className="fa-solid fa-location-dot me-2" />
              Shipping Address
            </h2>
            <p className="card-text m-0">{shipping.name || ''}</p>
            <p className="card-text m-0">{shipping.line1}</p>
            <p className="card-text m-0">{shipping.line2}</p>
            <p className="card-text m-0">{shipping.city}</p>
            <p className="card-text m-0">{shipping.state}</p>
            <p className="card-text m-0">{shipping.country || ''}</p>
            <p className="card-text m-0">{shipping.postal_code || ''}</p>
          </div>

          <div className="flex-grow-1 p-2">
            <h2 className="card-text text-dark d-flex">
              <i className="fa-solid fa-truck me-2" />
              Delivery Method
            </h2>
            <p className="card-text">Standard</p>

            <h2 className="card-text text-dark d-flex">
              <i className="fa-solid fa-money-check-dollar me-2" />
              Payment Method
            </h2>
            <p className="card-text">Card</p>
          </div>

          <div className="flex-grow-1 p-2">
            <h2 className="card-text text-dark d-flex">
              <i className="fa-solid fa-tags me-2" />
              Order Summary
            </h2>
            <div className="d-flex justify-content-between">
              <p className="card-text">Subtotal</p>
              <p className="card-text">
                <b className="price">
                  $
                  {' '}
                  {subtotal / 100}
                </b>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Delivery fee</p>
              <p className="card-text">
                <b className="price">
                  $
                  {' '}
                  0
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistoryDetails;
