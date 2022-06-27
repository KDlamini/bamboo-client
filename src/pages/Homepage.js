import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import Filters from '../components/Filters';
import AdvertBanner from '../components/AdvertBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import { getProducts } from '../redux/actions/products';
import flashSale from '../assets/bannerAd3.jpg';
import gilletteAd from '../assets/advert3.gif';

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

    return [];
  }, [products]);

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <AdvertSideBox image={gilletteAd} url="https://www.rentalcars.com/" />
          <Filters />
        </div>
        <div className="col-md-9">
          <AdvertBanner image={flashSale} />
          <div className="products detail-box border rounded-1">
            Carousel
          </div>
          <div className="products detail-box d-flex py-2">
            {renderProducts}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
