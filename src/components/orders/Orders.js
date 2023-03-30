import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderHistoryCard from './OrderHistoryCard';
import OrderHistoryDetails from './OrderHistoryDetails';
import { fetchOrders } from '../../redux/actions/orders';

const Orders = () => {
  const orders = useSelector((state) => state.orders.data);
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrders());
    }
  }, []);

  const handleRenders = () => {
    if (showDetails) {
      return (
        <OrderHistoryDetails />
      );
    }

    return (
      orders.length ? (
        orders.map((order) => (
          <OrderHistoryCard
            key={order.paymentIntentId}
            order={order}
            setShowDetails={setShowDetails}
          />
        ))
      ) : (
        <div className="detail-box text-start border rounded-1">
          <p className="description-text m-0 p-3 text-center">You have no ordered items at the moment</p>
        </div>
      )
    );
  };

  return (
    <section className="container-fluid orders-page main-container m-0">
      <div className="mt-3 mx-2">
        <p className="details-info-text p-1 my-0">
          <span className="details-link">
            My account
            {' '}
            /
          </span>
        &nbsp; &nbsp;
          {' '}
          Orders
        </p>
      </div>

      <div className="row">
        <div className="col-md-3 p-0">
          <div className="detail-box text-start ms-3 my-2 pb-4 border rounded-1">
            <h3 className="title text-dark p-2 ps-3 border-bottom">Account Information</h3>

            <div className="my-3">
              <h4 className="details-info-text d-flex mb-2 px-3">
                <i className="fa-solid fa-basket-shopping me-2" />
                Orders
              </h4>
              <div className="d-flex flex-column card-text px-3">
                <button
                  type="button"
                  className="details-link bg-white px-2 m-0 mb-1 border-0"
                  onClick={() => {
                    setShowDetails(false);
                  }}
                >
                  Orders
                </button>
                <button
                  type="button"
                  className="details-link bg-white px-2 m-0 border-0"
                  onClick={() => {
                    setShowDetails(false);
                  }}
                >
                  Invoices
                </button>
              </div>
            </div>

            <div className="my-3">
              <h4 className="details-info-text d-flex mb-2 px-3">
                <i className="fa-solid fa-user me-2" />
                Customer Information
              </h4>
              <div className="d-flex flex-column card-text px-3">
                <button
                  type="button"
                  className="details-link bg-white px-2 m-0 mb-1 border-0"
                  onClick={() => {
                    setShowDetails(false);
                  }}
                >
                  Personal Details
                </button>
                <button
                  type="button"
                  className="details-link bg-white px-2 m-0 border-0"
                  onClick={() => {
                    setShowDetails(false);
                  }}
                >
                  Address Book
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="ms-3 my-2">
            <p className="details-info-text py-1 my-0">Orders</p>
          </div>
          <div className="ms-2">
            {handleRenders()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
