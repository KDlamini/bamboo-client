import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Filters from '../components/Filters';
import Product from '../components/Product';
import AdvertWideBanner from '../components/AdvertWideBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import { longAdverts, departmentsList } from '../components/data';
import handleSort from '../components/modules';
import boxAd1 from '../assets/boxAd1.png';
import boxAd2 from '../assets/boxAd3.png';

const useForceRerender = () => {
  const [increment, setIncrement] = useState(0);
  return () => setIncrement(increment + 1);
};

const Search = () => {
  const controlData = useSelector((state) => state.products.queries) || [];

  const [products, setProducts] = useState([...controlData]);
  const randomProduct = products ? products[Math.floor(Math.random() * products.length)] : [];
  const department = randomProduct ? randomProduct.department : 'Department';
  const category = randomProduct ? randomProduct.category : 'Category';
  const relatedCategories = departmentsList[department];

  const [isSorted, setIsSorted] = useState({ status: false, type: '' });

  const forceRerender = useForceRerender();

  const renderProducts = () => {
    if (products.length > 0) {
      return products.map((product) => {
        const { _id: id } = product;

        return (
          <Product key={id} product={product} />
        );
      });
    }

    return (
      <div className="text-center border w-100">
        <h5 className="text-center text-muted my-5">No products found...</h5>
      </div>
    );
  };

  return (
    <section className="container-fluid m-0">
      <div className=" mt-3">
        <AdvertWideBanner ads={longAdverts} />
      </div>
      <p className="details-info-text p-1 my-0 ms-2">
        <span className="details-link">
          {department}
          {' '}
          /
        </span>
        &nbsp; &nbsp;
        {' '}
        {category}
      </p>
      <div className="row">
        <div className="col-md-3 p-0">
          <Filters
            categories={relatedCategories}
            active={category}
            controlData={controlData}
            setProducts={setProducts}
            isSorted={isSorted}
          />
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
            <p className="details-info-text py-1 my-0">{`${products ? products.length : 0} results`}</p>
            <div className="me-4">
              <span className="details-info-text">Sort by: &nbsp;</span>
              <select
                className="card-text border bg-light px-1 py-2"
                onChange={(e) => {
                  setProducts(handleSort(e.target.value, controlData));
                  setIsSorted({ status: true, type: e.target.value });
                  forceRerender();
                }}
              >
                <option value="Relevance">Relevance</option>
                <option value="High to Low">Price: High to Low</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="Top Rated">Top Rated</option>
              </select>
            </div>
          </div>
          <div className="products detail-box d-flex py-2">
            {renderProducts()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
