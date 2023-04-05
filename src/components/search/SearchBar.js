import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // eslint-disable-next-line arrow-body-style
    let filteredResults = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    if (department) {
      filteredResults = filteredResults.filter(
        (product) => product.department === department,
      );
    }
    setResults(filteredResults);
  };

  const departments = [...new Set(products.map((product) => product.department))];

  return (
    <div className="search-bar navbar-dark bg-dark">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" type="submit">
          <i className="fa-solid fa-magnifying-glass" />
        </button>

        <select className="search-options" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </form>
      <ul>
        {results.map((product) => {
          const { _id: id, name } = product;
          return (
            <li key={id}>{name}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;

// This code creates a Search component that takes in an array of products as a prop.
// The component maintains state for the search term, selected department, and search results.
// The handleSearch function filters the products based on the search term and selected
// department and updates the results state.
// The departments array is created by mapping over the products and extracting
// the unique department values.
// The component returns a form with an input field for the search term,
// a dropdown for selecting the department, and a submit button.
// The search results are displayed in an unordered list below the form.
