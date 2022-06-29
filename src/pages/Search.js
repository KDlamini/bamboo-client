import React from 'react';
import { useSelector } from 'react-redux';
import Filters from '../components/Filters';
import Product from '../components/Product';
import AdvertWideBanner from '../components/AdvertWideBanner';
import { longAdverts } from '../components/advertisements';

const Search = () => {
  const products = useSelector((state) => state.products);

  return (
    <section className="container-fluid m-0">
      <div className=" mt-3">
        <AdvertWideBanner ads={longAdverts} />
      </div>
      <p className="details-info-text p-1 my-0 ms-2">
        <span className="details-link">Department/</span>
        &nbsp; &nbsp; Category
      </p>
      <div className="row">
        <div className="col-md-3 p-0">
          <Filters />
        </div>
        <div className="col-md-9">
          <div className="products detail-box d-flex py-2">
            {
              products.map((product) => {
                const { _id: id } = product;

                return (
                  <Product key={id} product={product} />
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
