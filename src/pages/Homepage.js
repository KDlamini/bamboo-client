import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import AdvertBanner from '../components/AdvertBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import ProductCarousel from '../components/ProductCarousel';
import Departments from '../components/Departments';
import LoadingSpinner from '../components/LoadingSpinner';
import advertsData from '../components/data';
import paginateItems from '../components/pagination/paginateItems';
import Paginate from '../components/pagination/Paginate';
import rentCarsAd from '../assets/advert3.gif';
import gilletteAd from '../assets/advert5.gif';
import gifsterAd from '../assets/advert2.gif';
import sneakersAd from '../assets/advert4.gif';
import homeAd from '../assets/boxAd.png';

function Homepage() {
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.data);

  const renderProducts = useCallback((products) => {
    if (products.length) {
      return products.map((product) => {
        const { _id: id } = product;

        return (
          <Product key={id} product={product} />
        );
      });
    }

    return null;
  }, [products]);

  const topProducts = useMemo(() => {
    if (products.length) {
      let bestBuys = products.filter((item) => item.rating >= 4.5);
      bestBuys = bestBuys.sort((a, b) => b.rating - a.rating);

      return bestBuys.map((product) => {
        const { _id: id } = product;

        return (
          <Product key={id} product={product} />
        );
      });
    }

    return null;
  }, [products]);

  const topDeals = useMemo(() => {
    if (products.length) {
      let discounts = products.filter((item) => item.deals[0].available === true);
      discounts = discounts.sort((a, b) => b.deals[0].discount - a.deals[0].discount);

      return discounts.map((product) => {
        const { _id: id } = product;

        return (
          <Product key={id} product={product} />
        );
      });
    }

    return null;
  }, [products]);

  const { currentItems, pageCount, handlePageClick } = paginateItems(products);

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <div className="ms-3 mt-4">
            <AdvertSideBox image={sneakersAd} url="https://www.nike.com/" />
          </div>

          <div className="ms-3 mt-4" />

          <Departments />

          <div className="ms-3 mt-3">
            <AdvertSideBox image={homeAd} url="/" />
          </div>
        </div>
        <div className="col-md-9">
          <div className=" mt-4 mb-3">
            <AdvertBanner ads={advertsData} />
          </div>
          <h2 className="title slider-heading text-center text-dark mx-3 p-2">TOP PRODUCTS</h2>
          {isLoading ? <LoadingSpinner /> : <ProductCarousel renderProducts={topProducts} />}
          <h2 className="title slider-heading text-center text-dark mx-3 p-2">BEST DEALS</h2>
          {isLoading ? <LoadingSpinner /> : <ProductCarousel renderProducts={topDeals} />}
        </div>
      </div>

      <h2 className="title slider-heading text-center text-dark ms-2 p-2">SHOPPING</h2>

      <div className="row">
        <div className="col-md-9">
          {isLoading
            ? <LoadingSpinner />
            : (
              <div className="products detail-box d-flex py-2">
                {renderProducts(currentItems)}
              </div>
            )}
        </div>
        <div className="col-md-3 p-0">
          <div className="me-2">
            <div className="mt-2">
              <AdvertSideBox image={rentCarsAd} url="https://www.rentalcars.com/" />
            </div>
            <div className="mt-2">
              <AdvertSideBox image={gilletteAd} url="https://gillette.com/" />
            </div>
            <div className="mt-2">
              <AdvertSideBox image={gifsterAd} url="https://www.giftster.com/" />
            </div>
          </div>
        </div>
      </div>

      <div className="title slider-heading text-center text-dark ms-2 p-2">
        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </section>
  );
}

export default Homepage;
