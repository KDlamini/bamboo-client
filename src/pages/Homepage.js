import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import Filters from '../components/Filters';
import AdvertBanner from '../components/AdvertBanner';
import AdvertSideBox from '../components/AdvertSideBox';
import { getProducts } from '../redux/actions/products';
import flashSale from '../assets/sale.gif';
import gilletteAd from '../assets/advert5.gif';

function Homepage() {
  const selectProducts = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectProducts.length) {
      dispatch(getProducts());
    }
    setProducts(selectProducts);
  }, [selectProducts]);

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <AdvertSideBox image={gilletteAd} />
          <Filters setProducts={setProducts} />
        </div>
        <div className="col-md-9">
          <AdvertBanner image={flashSale} />
          <div className="products detail-box d-flex py-2">
            {
              products && products.map((product) => {
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
}

export default Homepage;
