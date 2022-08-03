import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getSingleOrder } from '../redux/actions/orders';

const OrderHistoryCard = ({ order, setShowDetails }) => {
  const { products, delivery_status: status, createdAt } = order;
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const dispatch = useDispatch();

  return (
    <div className="detail-box cart-info-wrapper p-3 my-2 border rounded-1">
      <div className="d-flex justify-content-between">
        <div>
          {
            status === 'pending' ? (
              <div>
                <h2 className="card-text text-dark">
                  Ordered:
                  {' '}
                  {new Date(createdAt).toLocaleDateString(undefined, options)}
                </h2>
                <p className="card-text">
                  Status:
                  {' '}
                  <i className="text-success">Pending delivery (delivers in 7 - 10 days)</i>
                </p>
              </div>
            ) : (
              <h2 className="card-text text-dark">Delivered Thu, 12 Aug 2021</h2>
            )
          }
          <p className="card-text">To: Customer name (Customer)</p>
        </div>

        <div className="actions">
          <Button
            variant="secondary"
            type="submit"
            className="buy btn-secondary rounded-1"
            onClick={() => {
              setShowDetails(true);
              dispatch(getSingleOrder(order));
            }}
          >
            Order details
          </Button>
        </div>
      </div>

      <div className="order-img-wrapper">
        {
          products.map((product) => {
            const {
              _id: id, image,
            } = product;

            return (
              <div key={id} className="order-img-item">
                <img src={image} alt="product" className="order-img border rounded-1" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default OrderHistoryCard;
