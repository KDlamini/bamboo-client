import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

const Departments = () => {
  const departmentsList = {
    Beauty: ['Men\'s Grooming', 'Fragrances', 'Hair Care', 'Makeup', 'Skin Care', 'Body Care'],
    'Computers & Electronics': ['Desktop', 'Monitors', 'Computer Accessories', 'Laptop', 'Laptop Accessories', 'Software', 'Photography', 'Drones'],
    Gadgets: ['Smartphones', 'Tablets', 'Smartwatches', 'Smart Accessories'],
    Fashion: ['Men', 'Women', 'Kids', 'Watches', 'Jewellery', 'Footwear', 'Backpacks'],
    Gaming: ['Gaming Accessories', 'Playstation', 'Nintendo', 'Xbox Series'],
    'TV, Audio & Media': ['TV\'s', 'Home Entertainment', 'Headsets', 'Microphones', 'Guitars', 'Keyboard & Piano'],
    'Home & Appliances': ['Appliances', 'Kitchen', 'Furniture & Decor', 'Bed & Bath'],
    Sports: ['Sports Clothing', 'Sports Footwear', 'Sports Wearable Tech', 'Sports Nutrition', 'Cycling', 'Gym Equipment'],
  };

  const departmentKeys = Object.keys(departmentsList);

  return (
    <div className="d-flex flex-column border ms-3">
      <h2 className="title text-light p-2 bg-dark">Departments</h2>
      {
        departmentKeys.map((department) => (
          <DropdownButton
            as={ButtonGroup}
            key={department}
            id="dropdown-button-drop-end"
            drop="end"
            variant="light"
            title={department}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ))
      }
      <NavLink to="/query" className="promotions text-center text-light px-3 py-2 border">Promotions</NavLink>
    </div>
  );
};

export default Departments;
