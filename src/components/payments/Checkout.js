import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NewAddress from '../address/NewAddress';
import ModifyAddress from '../address/ModifyAddress';
import AddressList from '../address/AddressList';
import { getCurrentUser } from '../../redux/actions/users';
import { proceedToPayment } from '../../redux/actions/cart';

const Checkout = () => {
  const { price, quantity } = useSelector((state) => state.cart.checkout);
  const { response, isAuthenticated } = useSelector((state) => state.auth);
  const [defaultAddress, setDefaultAddress] = useState({});
  const [oldAddress, setOldAddress] = useState(null);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [showModifyAddress, setShowModifyAddress] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (response.status === 200) {
      dispatch(getCurrentUser());
      setShowNewAddress(false);
      setShowModifyAddress(false);
    }
  }, [response]);

  const renderAddress = () => {
    if (showNewAddress) {
      return <NewAddress setShowNewAddress={setShowNewAddress} />;
    }

    if (showModifyAddress) {
      return (
        <ModifyAddress
          oldAddress={oldAddress}
          setShowModifyAddress={setShowModifyAddress}
        />
      );
    }

    return (
      <AddressList
        setOldAddress={setOldAddress}
        defaultAddress={defaultAddress}
        setDefaultAddress={setDefaultAddress}
        setShowNewAddress={setShowNewAddress}
        setShowModifyAddress={setShowModifyAddress}
      />
    );
  };

  return (
    <section className="container-fluid main-container cart-details m-0">
      <h2 className="title mt-3 mx-2 ps-3">
        Delivery
        <span className="text-muted opacity-25"> / Payment / Confirmation</span>
      </h2>

      <div className="row mx-2">
        <div className="col-md-9 pt-3">
          <div className="detail-box text-start p-3 border rounded-1">
            {renderAddress()}
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
                disabled={!Object.keys(defaultAddress).length || isAuthenticated === false}
                onClick={() => {
                  dispatch(proceedToPayment(defaultAddress));
                  navigate('/review_order');
                }}
              >
                Continue
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

export default Checkout;
