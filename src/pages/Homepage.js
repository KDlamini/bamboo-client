import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import { getProducts } from '../redux/actions/products';

function Homepage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <section className="container-fluid m-0 d-flex justify-content-center">
      <div className="container row justify-content-center">
        {

          products.length && products.map((product) => (
            <Product key={product.id} product={product} />
          ))

        }
      </div>
    </section>
  );
}

export default Homepage;
