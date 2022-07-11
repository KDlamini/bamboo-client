import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

const BillingAddress = ({ setShowNewAddress }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [houseName, setHouseName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const address = {
      name,
      phone,
      'house name': houseName,
      street,
      city,
      state,
      zip,
    };

    return address;
  };

  return (
    <div>
      <h3 className="title text-dark mb-3">Add New Address</h3>

      <Form onSubmit={handleSubmit} className="p-1">
        <FormGroup>
          <Label for="fullName" className="description-text">Full Name</Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            className="mb-3"
            onChange={(e) => setName(e.target.value)}
          />

          <Label for="phone" className="description-text">Phone</Label>
          <Input
            type="phone"
            name="phone"
            id="phone"
            className="mb-3"
            onChange={(e) => setPhone(e.target.value)}
          />

          <Label for="houseName" className="description-text">
            Flat No./House No./Apartment No./Buildings No.
          </Label>
          <Input
            type="number"
            name="houseName"
            id="houseName"
            className="mb-3"
            onChange={(e) => setHouseName(e.target.value)}
          />

          <Label for="street" className="description-text">Street Address</Label>
          <Input
            type="text"
            name="street"
            id="street"
            className="mb-3"
            onChange={(e) => setStreet(e.target.value)}
          />

          <Label for="city" className="description-text">Town/City</Label>
          <Input
            type="email"
            name="city"
            id="city"
            className="mb-3"
            onChange={(e) => setCity(e.target.value)}
          />

          <Label for="state" className="description-text">State/Region/Province</Label>
          <Input
            type="text"
            name="state"
            id="state"
            className="mb-3"
            onChange={(e) => setState(e.target.value)}
          />

          <Label for="zipCode" className="description-text">Zip Code</Label>
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            className="mb-3"
            onChange={(e) => setZip(e.target.value)}
          />

          <div className="actions text-end">
            <Button
              variant="secondary"
              type="submit"
              className="buy btn-secondary rounded-1 me-3"
              onClick={() => setShowNewAddress(false)}
            >
              Cancel
            </Button>
            <Button
              variant="success"
              type="submit"
              className="buy btn-success rounded-1"
            >
              Save Address
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default BillingAddress;
