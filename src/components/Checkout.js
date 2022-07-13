import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NewAddress from './NewAddress';
import ModifyAddress from './ModifyAddress';
import AddressList from './AddressList';

const Checkout = () => {
  const { price, quantity } = useSelector((state) => state.cart.checkout);
  const response = useSelector((state) => state.auth.response);
  const [oldAddress, setOldAddress] = useState(null);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [showModifyAddress, setShowModifyAddress] = useState(false);

  useEffect(() => {
    if (response.status === 200) {
      window.location.reload();
      // setShowNewAddress(false);
      // setShowModifyAddress(false);
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
            <h3 className="title text-dark mb-4 mt-1">Cart Summary</h3>
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
