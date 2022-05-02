import React from 'react';
import Product from '../components/Product';
import products from '../product';

function Homepage() {
  return (
    <section className="container-fluid m-0">
      <div className="row justify-content-center">
        {

          products.map((product) => (
            <Product key={product.id} product={product} />
          ))

        }
      </div>
    </section>
  );
}

export default Homepage;
