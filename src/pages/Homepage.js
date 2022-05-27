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
          products && products.map((product) => {
            const { _id: id } = product;

            return (
              <Product key={id} product={product} />
            );
          })

        }
      </div>
    </section>
  );
}

export default Homepage;
