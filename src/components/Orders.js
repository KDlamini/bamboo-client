import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderHistoryCard from './OrderHistoryCard';
import { fetchOrders } from '../redux/actions/orders';

const Orders = () => {
  const orders = useSelector((state) => state.orders.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrders());
    }
  }, []);

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
              <h4 className="details-info-text d-flex mb-3 px-3">
                <i className="fa-solid fa-basket-shopping me-2" />
                Orders
              </h4>
              <div className="card-text ps-4 pe-3">
                <p className="details-link m-0">Orders</p>
                <p className="details-link m-0">Invoices</p>
              </div>
            </div>

            <div className="my-3">
              <h4 className="details-info-text d-flex mb-3 px-3">
                <i className="fa-solid fa-user me-2" />
                Customer Information
              </h4>
              <div className="card-text ps-4 pe-3">
                <p className="details-link m-0">Personal Details</p>
                <p className="details-link m-0">Address Book</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="ms-3 my-2">
            <p className="details-info-text py-1 my-0">Orders</p>
          </div>
          <div className="ms-2">
            {
              orders.length ? (
                orders.map((order) => (
                  <OrderHistoryCard key={order.paymentIntentId} order={order} />
                ))
              ) : (
                <div className="detail-box text-start border rounded-1">
                  <p className="description-text m-0 p-3 text-center">You have no ordered items at the moment</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
