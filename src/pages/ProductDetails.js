import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../redux/actions/products';

function ProductDetails() {
  const products = useSelector((state) => state.products);
  const { id: productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  const product = products.find((prod) => {
    const { _id: id } = prod;
    return id === productId;
  }) || {};

  const {
    name, image, description, price, countInStock,
  } = product;

  const quantity = [...Array(countInStock).keys()];

  return (
    <section className="container-fluid m-0">
      <div className="row">

        <div className="col-md-6">
          <div className="card my-3 p-2">
            <h2 className="card-text">{name}</h2>
            <img src={image} alt="product" className="details-img" />
            <p className="card-text">{description}</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="my-3 p-2">
            <p className="card-text">
              <b>Price:</b>
              {' '}
              <span className="price">
                R
                {' '}
                {price}
              </span>
            </p>
            <hr />
            <select className="form-select w-50" aria-label="Default select example">
              <option defaultValue={0}>Quantity</option>
              {
                quantity.map((stock, index) => (
                  <option key={stock} value={index + 1}>{index + 1}</option>
                ))
              }
            </select>
            <div className="actions my-3 py-1 text-end border-bottom">
              <button type="button" className="btn btn-success rounded-0">ADD TO CART</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
