import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterDepartment } from '../redux/actions/products';

function Filters({ categories, active }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="detail-box filter-box text-start ms-3 mt-2 border rounded-1">
        <h3 className="title text-light bg-dark p-2 border-bottom">Related Categories</h3>
        <ul className="p-0">
          {
            categories.map((category) => (
              <li
                key={category}
                className="list-unstyled"
              >
                {
                category !== active ? (
                  <button
                    type="button"
                    className="p-2 w-100 text-start bg-light categories"
                    onClick={() => {
                      dispatch(filterDepartment(category));
                    }}
                  >
                    {category}
                  </button>
                ) : null
              }
              </li>
            ))
          }
        </ul>
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
