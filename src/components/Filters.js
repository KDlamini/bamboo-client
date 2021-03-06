import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'r-range-slider';
import { Form } from 'react-bootstrap';
import handleSort from './modules';
import { filterDepartment } from '../redux/actions/products';

function Filters({
  categories, active, setProducts, controlData, isSorted,
}) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [isFilteredByPrice, setIsFilteredByPrice] = useState(false);
  const [isFilteredByRating, setIsFilteredByRating] = useState({ status: false, type: 0 });
  const dispatch = useDispatch();

  const sortedData = useMemo(() => (
    handleSort(isSorted.type, controlData)
  ), [isSorted.type, controlData]);

  const handlePriceFilter = () => {
    let products = [...sortedData].filter((p) => (p.price >= minPrice && p.price <= maxPrice));
    const { status, type } = isFilteredByRating;

    if (status) {
      products = products.filter((p) => (p.rating >= type));
    }

    setProducts(products);
  };

  const handleRatingFilter = (rating) => {
    let products = [...sortedData].filter((p) => (p.rating >= rating));

    if (isFilteredByPrice) {
      products = products.filter((p) => (p.price >= minPrice && p.price <= maxPrice));
    }

    setProducts(products);
  };

  const handlePriceChange = (points, dragging) => {
    if (dragging) {
      setMinPrice(points[0]);
      setMaxPrice(points[1]);
    } else {
      handlePriceFilter();
      setIsFilteredByPrice(true);
    }
  };

  return (
    <div>
      <div className="detail-box filter-box text-start ms-3 mt-2 border rounded-1">
        <h3 className="title text-light bg-dark p-2 border-bottom">Related Categories</h3>
        <ul className="p-0">
          {
            categories && categories.map((category) => (
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
        <div className="filter-box py-2">
          <h4 className="details-info-text mb-3 px-2">Price</h4>
          <div className="ps-3 pe-4 mb-3">
            <Slider
              attrs={{ className: 'my-slider' }}
              start={0}
              end={4000}
              points={[minPrice, maxPrice]}
              labelStep={1000}
              scaleStep={500}
              showValue
              onChange={(points, dragging) => handlePriceChange(points, dragging)}
              labelStyle={() => ({
                top: 40,
                fontSize: 12,
                color: '#666',
              })}
            />
          </div>
          <p className="card-text d-flex justify-content-between px-2 mb-4">
            <span className="text-muted">Min</span>
            <span className="text-muted">Max</span>
          </p>
        </div>
        <div className="filter-box border-top py-2">
          <h4 className="details-info-text p-2">Rating</h4>
          <Form className="description-text px-2 mb-4">
            {[4, 3, 2, 1].map((number) => (
              <div key={`default-${number}`} className="d-flex mb-2">
                <Form.Check
                  className="p-0 me-2 fs-6"
                  type="radio"
                  name="rating"
                  value={number}
                  id={`default-radio-${number}`}
                  onChange={(e) => {
                    handleRatingFilter(e.target.value);
                    setIsFilteredByRating({ status: true, type: e.target.value });
                  }}
                />
                <div className="d-flex align-items-center p-0 m-0">
                  <span className="description-text me-1">{number}</span>
                  <i className="fa-solid fa-star text-warning reviews-star me-2" />
                  <span className="description-text">and up</span>
                </div>
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Filters;
