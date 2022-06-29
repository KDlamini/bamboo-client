import React from 'react';
import { NavLink } from 'react-router-dom';

function Filters() {
  return (
    <div>
      <div className="detail-box filter-box text-start ms-3 mt-2 p-2 border rounded-1">
        <h3 className="title pb-2 border-bottom">Refine by Category</h3>
        <NavLink to="/query" className="text-start details-link">Search Page</NavLink>
      </div>
      <div className="detail-box text-start ms-3 my-2 p-2 border rounded-1">
        <h3 className="title pb-2 border-bottom">Filters</h3>
        <div className="filter-box">
          <h4 className="details-info-text">Price</h4>
        </div>
        <div className="filter-box border-top">
          <h4 className="details-info-text py-2">Rating</h4>
        </div>
      </div>
    </div>
  );
}

export default Filters;
