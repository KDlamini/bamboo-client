import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PhoneInput from 'react-phone-number-input';
import { createAddress } from '../redux/actions/users';
import 'react-phone-number-input/style.css';

const NewAddress = ({ setShowNewAddress }) => {
  const location = useSelector((state) => state.auth.location);
  const [username, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [houseName, setHouseName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const address = {
      username,
      phone,
      house_name: houseName,
      street,
      city,
      state,
      zip,
    };

    dispatch(createAddress(address));
  };

  return (
    <div>
      <h3 className="title text-dark mb-3">Add New Address</h3>

      <Form onSubmit={handleSubmit} className="address p-1">
        <FormGroup>
          <Label for="fullName" className="description-text">Full Name</Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            className="mb-3"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label for="phone" className="description-text">Phone</Label>
          <PhoneInput
            international
            defaultCountry={location ? location.country_code2 : 'US'}
            value={phone}
            name="phone"
            id="phone"
            className="mb-3"
            onChange={setPhone}
            required
          />

          <Label for="houseName" className="description-text">
            Flat/House/Apartment/Building/Company Name
          </Label>
          <Input
            type="text"
            name="houseName"
            id="houseName"
            className="mb-3"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
          />

          <Label for="street" className="description-text">Street Address</Label>
          <Input
            type="text"
            name="street"
            id="street"
            className="mb-3"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <Label for="city" className="description-text">Town/City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            className="mb-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <Label for="state" className="description-text">State/Region/Province</Label>
          <Input
            type="text"
            name="state"
            id="state"
            className="mb-3"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          <Label for="zipCode" className="description-text">Zip Code</Label>
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            className="mb-3"
            value={zip}
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

export default NewAddress;
