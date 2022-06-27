import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import Filters from '../components/Filters';
import AdvertBanner from '../components/AdvertBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import ProductCarousel from '../components/ProductCarousel';
import { getProducts } from '../redux/actions/products';
import flashSale from '../assets/bannerAd3.jpg';
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

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <div className="ms-3 mt-4">
            <AdvertSideBox image={sneakersAd} url="https://www.nike.com/" />
          </div>
          <Filters />
        </div>
        <div className="col-md-9">
          <div className=" my-4">
            <AdvertBanner image={flashSale} url="https://www.apple.com/shop/buy-watch/apple-watch" />
          </div>
          <ProductCarousel renderProducts={renderProducts} heading="TOP PRODUCTS" />
          <ProductCarousel renderProducts={renderProducts} heading="BEST DEALS" />
        </div>
      </div>

      <h2 className="title slider-heading text-center ms-2 p-2">SHOPPING</h2>

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
