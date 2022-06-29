import React from 'react';
import { useSelector } from 'react-redux';
import Filters from '../components/Filters';
import Product from '../components/Product';
import AdvertBanner from '../components/AdvertBanner';
import advertsData from '../components/advertisements';

const Search = () => {
  const products = useSelector((state) => state.products);

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <Filters />
        </div>
        <div className="col-md-9">
          <div className=" mt-4 mb-3">
            <AdvertBanner ads={advertsData} />
          </div>
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
