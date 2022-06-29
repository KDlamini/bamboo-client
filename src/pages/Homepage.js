import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import Filters from '../components/Filters';
import AdvertBanner from '../components/AdvertBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import ProductCarousel from '../components/ProductCarousel';
import { getProducts } from '../redux/actions/products';
import advertsData from '../components/advertisements';
import rentCarsAd from '../assets/advert3.gif';
import gilletteAd from '../assets/advert5.gif';
import gifsterAd from '../assets/advert2.gif';
import sneakersAd from '../assets/advert4.gif';

function Homepage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  });

  const renderProducts = useMemo(() => {
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

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <div className="ms-3 mt-4">
            <AdvertSideBox image={sneakersAd} url="https://www.nike.com/" />
          </div>
          <div className="ms-3 mt-4" />
          <Filters />
        </div>
        <div className="col-md-9">
          <div className=" mt-4 mb-3">
            <AdvertBanner ads={advertsData} />
          </div>
          <ProductCarousel renderProducts={topProducts} heading="TOP PRODUCTS" />
          <ProductCarousel renderProducts={topDeals} heading="BEST DEALS" />
        </div>
      </div>

      <h2 className="title slider-heading text-center text-dark ms-2 p-2">SHOPPING</h2>

      <div className="row">
        <div className="col-md-9">
          <div className="products detail-box d-flex py-2">
            {renderProducts}
          </div>
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
    </section>
  );
}

export default Homepage;
