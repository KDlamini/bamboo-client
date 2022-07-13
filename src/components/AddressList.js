import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import { deleteAddress } from '../redux/actions/users';

const AddressList = ({ setShowNewAddress, setShowModifyAddress, setOldAddress }) => {
  const { billing_address: addressList } = useSelector((state) => state.auth.user || []);
  const [defaultAddress, setDefaultAddress] = useState({});
  const { _id: defaultId } = defaultAddress;

  const dispatch = useDispatch();

  useEffect(() => {
    if (addressList && addressList.length > 0) {
      setDefaultAddress(addressList[addressList.length - 1]);
    }
  }, [addressList]);

  const reverseList = addressList ? [...addressList].reverse() : [];

  return (
    <div className="p-1">
      <div className="actions d-flex justify-content-between mb-3">
        <h3 className="title d-flex align-items-center text-dark m-0 me-5">Delivery Address</h3>
        <Button
          variant="dark"
          type="submit"
          className="buy btn-dark rounded-1"
          onClick={() => setShowNewAddress(true)}
        >
          Add Address
        </Button>
      </div>
      <Form>
        {
          reverseList && reverseList.map((address, index) => {
            const {
              _id: id, username, phone, house_name: houseName, street, city, state, zip,
            } = address;
            return (
              <div key={id} className={`${id === defaultId ? 'promotion-tag' : ''} d-flex py-1 mb-2`}>
                <div className="flex-shrink-1 d-flex align-items-center">
                  <Form.Check
                    className="p-2 fs-6"
                    type="radio"
                    name="address"
                    value={index}
                    id={`default-radio-${index}`}
                    onChange={(e) => setDefaultAddress(addressList[e.target.value])}
                    checked={id === defaultId}
                  />
                </div>

                <div className="description-text w-100 p-2">
                  <h3 className="title text-dark">{username}</h3>
                  <p className="p-o m-0">{houseName || null}</p>
                  <p className="p-o m-0">{street}</p>
                  <p className="p-o m-0">{city}</p>
                  <p className="p-o m-0">{state}</p>
                  <p className="p-o m-0">{zip || null}</p>

                  <p className="p-o m-0 mt-2">{formatPhoneNumberIntl(phone)}</p>
                </div>

                <div className="actions flex-shrink-1 d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-sm p-1 px-2"
                    onClick={() => {
                      setOldAddress(address);
                      setShowModifyAddress(true);
                    }}
                  >
                    <i className="far fa-edit text-primary" />
                  </button>

                  <button
                    type="button"
                    className="btn btn-sm p-1 px-2 mx-2"
                    onClick={() => dispatch(deleteAddress(address))}
                  >
                    <i className="fa-solid fa-trash text-danger" />
                  </button>
                </div>
              </div>
            );
          })
      }
      </Form>
    </div>
  );
};

export default AddressList;
