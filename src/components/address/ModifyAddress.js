import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PhoneInput from 'react-phone-number-input';
import { updateAddress } from '../../redux/actions/users';
import 'react-phone-number-input/style.css';

const ModifyAddress = ({ oldAddress, setShowModifyAddress }) => {
  const [username, setName] = useState(oldAddress.username || '');
  const [phone, setPhone] = useState(oldAddress.phone || '');
  const [houseName, setHouseName] = useState(oldAddress.house_name || '');
  const [street, setStreet] = useState(oldAddress.street || '');
  const [city, setCity] = useState(oldAddress.city || '');
  const [state, setState] = useState(oldAddress.state || '');
  const [zip, setZip] = useState(oldAddress.zip || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id: id } = oldAddress;

    const newAddress = {
      _id: id,
      username,
      phone,
      house_name: houseName,
      street,
      city,
      state,
      zip,
    };

    dispatch(updateAddress(newAddress));
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
            defaultCountry="US"
            name="phone"
            id="phone"
            className="mb-3"
            value={phone}
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
              onClick={() => setShowModifyAddress(false)}
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

export default ModifyAddress;
