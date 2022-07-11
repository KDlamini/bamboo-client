import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddressList = ({ setShowNewAddress }) => (
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
    <div className="promotion-tag d-flex py-1">
      <Form className="flex-shrink-1 d-flex align-items-center">
        <Form.Check
          className="p-2 fs-6"
          type="radio"
          name="address"
        />
      </Form>

      <div className="description-text w-100 p-2">
        <h3 className="title text-dark">Simo Wilson Dlamini</h3>
        <p className="p-o m-0">The Wall</p>
        <p className="p-o m-0">271 Schoeman Street</p>
        <p className="p-o m-0">Hatfield, Pretoria</p>
        <p className="p-o m-0">Gauteng</p>
        <p className="p-o m-0">o177</p>
      </div>

      <div className="actions flex-shrink-1 d-flex align-items-center">
        <button
          type="button"
          className="btn btn-sm p-1 px-2"
        >
          <i className="far fa-edit text-primary" />
        </button>

        <button
          type="button"
          className="btn btn-sm p-1 px-2 mx-2"
        >
          <i className="fa-solid fa-trash text-danger" />
        </button>
      </div>
    </div>
  </div>
);

export default AddressList;
