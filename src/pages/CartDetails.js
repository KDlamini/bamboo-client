import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';

function cartDetails() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <section className="container-fluid m-0 product-details cart-details">
        <h2 className="title mx-2 ps-3">Shopping Cart</h2>
        <div className="row mx-2">

          <div className="col-md-9 pt-3">
            {cartItems.map((item) => {
              const { _id: id } = item;
              return <CartItem key={id} item={item} />;
            })}
            <p className="card-text my-3">
              { cartItems
                ? 'Placing an item in your shopping cart does not reserve that item or price. We only reserve stock for your order once payment is received.'
                : null}
            </p>
          </div>

          <div className="col-md-3">
            <div className="detail-box my-3 p-2 border rounded-1">
              <h3 className="title text-dark mb-4 mt-1">Cart Summary</h3>
              <div className="d-flex justify-content-between card-text mt-3">
                <div className="d-flex">
                  <h2 className="card-text pt-1 my-0 me-2">Total:</h2>
                  <p className="details-info-text pt-1 my-0 me-3">
                    (
                    {totalQuantity}
                    {totalQuantity.length === 1 ? ' item' : ' items'}
                    )
                  </p>
                </div>
                &nbsp;
                <b className="card-text price p-0 text-success">
                  R
                  {' '}
                  {totalPrice}
                </b>
              </div>

              <div className="actions my-3 py-1">
                <button
                  type="button"
                  className="buy btn btn-success rounded-1 w-100"
                  onClick={dispatch}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
            <div className="detail-box my-3 p-2 border rounded-1">
              <div className="details-info-wrapper">
                <ul className="ps-3 list-unstyled my-3">
                  <li className="card-text mb-2">
                    <i className="fa-solid fa-lock me-3" />
                    Secure checkout
                  </li>
                  <li className="card-text mb-2">
                    <i className="fa-solid fa-credit-card me-3" />
                    Many ways to pay
                  </li>
                  <li className="card-text mb-2">
                    <i className="fa-solid fa-truck me-3" />
                    Fast, reliable delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default cartDetails;
