import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistoryDetails = () => {
  const {
    products, delivery_status: status, createdAt, subtotal, shipping,
  } = useSelector((state) => state.orders.order);
  const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  };

  return (
    <section>
      <div className="detail-box cart-info-wrapper p-2 my-2 border rounded-1">
        <div className="p-2 mb-2">
          {
            status === 'pending' ? (
              <h2 className="card-text text-muted">
                Ordered
                {' '}
                {new Date(createdAt).toLocaleDateString(undefined, options)}
              </h2>
            ) : (
              <h2 className="card-text text-dark">Delivered Thu, 12 Aug 2021</h2>
            )
          }
        </div>
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

      <div className="detail-box cart-info-wrapper p-2 my-2 border rounded-1">
        <div className="p-2 mb-2">
          {
            status === 'pending' ? (
              <p className="card-text">
                Status:
                {' '}
                <i className="text-success">Pending delivery (delivers in 7 - 10 days)</i>
              </p>
            ) : (
              <h2 className="card-text text-dark">Delivered Thu, 12 Aug 2021</h2>
            )
          }
        </div>

        <p className="card-text px-2">To: Customer name (Customer)</p>

        <div className="card-text w-100 mt-2">
          {
            products.map((product) => {
              const {
                _id: id, name, image, quantity, price, category, deals,
              } = product;

              const discountPrice = deals[0].available
                ? ((deals[0].discount + 100) / 100) * price : null;

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
                    <p className="m-0 text-start">
                      Quantity:
                      {' '}
                      {quantity}
                    </p>
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
            })
          }
        </div>
      </div>
    </section>
  );
};

export default OrderHistoryDetails;
