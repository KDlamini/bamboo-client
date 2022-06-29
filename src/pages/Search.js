import React from 'react';
import { useSelector } from 'react-redux';
import Filters from '../components/Filters';
import Product from '../components/Product';
import AdvertWideBanner from '../components/AdvertWideBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import { longAdverts } from '../components/advertisements';
import boxAd1 from '../assets/boxAd1.png';
import boxAd2 from '../assets/boxAd3.png';

const Search = () => {
  const products = useSelector((state) => state.products.queries);

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
          <div className="ms-3 mt-4">
            <div className="mt-2">
              <AdvertSideBox image={boxAd1} url="https://www.rentalcars.com/" />
            </div>
            <div className="mt-2">
              <AdvertSideBox image={boxAd2} url="https://gillette.com/" />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between ms-3 my-2">
            <p className="details-info-text py-1 my-0">{`${products.length} results`}</p>
            <div className="me-4">
              <span className="details-info-text">Sort by: &nbsp;</span>
              <select className="card-text border bg-light px-1 py-2">
                <option value="grapefruit">Relevance</option>
                <option value="lime">Price: High to Low</option>
                <option selected value="coconut">Price: Low to High</option>
                <option value="mango">Top Rated</option>
              </select>
            </div>
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
