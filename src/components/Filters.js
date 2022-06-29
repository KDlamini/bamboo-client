import React from 'react';

function Filters() {
  return (
    <div>
      <div className="detail-box filter-box text-start ms-3 mt-2 border rounded-1">
        <h3 className="title text-light bg-dark p-2 border-bottom">Refine by Category</h3>
      </div>
      <div className="detail-box text-start ms-3 my-2 border rounded-1">
        <h3 className="title text-light bg-dark p-2 border-bottom">Filters</h3>
        <div className="filter-box">
          <h4 className="details-info-text px-2">Price</h4>
        </div>
        <div className="filter-box border-top">
          <h4 className="details-info-text p-2">Rating</h4>
        </div>
      </div>
    </div>
  );
}

export default Filters;
