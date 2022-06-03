import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import Filters from '../components/Filters';
import { getProducts } from '../redux/actions/products';

function Homepage() {
  const selectProducts = useSelector((state) => state.products);
  const [products, setProducts] = useState(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <section className="container-fluid m-0">
      <div className="row">
        <div className="col-md-3 p-0">
          <Filters setProducts={setProducts} />
        </div>
        <div className="col-md-9">
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
