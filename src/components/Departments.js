import React from 'react';

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
    <div>
      <ul>
        {
            departmentKeys.map((department) => <li key={department}>{department}</li>)
        }
      </ul>
    </div>
  );
};

export default Departments;
