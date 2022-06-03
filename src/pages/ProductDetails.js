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
    name, image, rating, category, description, reviews, price, countInStock,
  } = product;

  const quantity = [...Array(countInStock).keys()];

  return (
    <section className="container-fluid m-0 product-details">
      <div className="row">

        <div className="col-md-9">
          <div className="detail-box d-flex my-3 p-2 border rounded-1">
            <div className="details-img-wrapper">
              <img src={image} alt="product" className="details-img" />
            </div>
            <div className="details-info-wrapper">
              <h2 className="card-text">{name}</h2>
              <a href="#category" className="details-link">
                <p className="details-link">{category}</p>
              </a>
              <div className="d-flex mb-3">
                <i className="fa-solid fa-star text-warning pt-1 me-1" />
                <p className="details-info-text me-2">{rating}</p>
                <a href="#category" className="d-flex details-link">
                  <p className="details-link me-1">{reviews.length}</p>
                  <p className="details-link">Reviews</p>
                </a>
              </div>
              <div className="stock-info-wrapper d-flex mb-5 py-3 border-top border-bottom">
                { quantity.length > 0 ? <div className="stock-info text-dark my-0 me-3">In Stock</div> : <div className="stock-info text-danger my-0 me-1">Out of Stock</div> }
                &nbsp;
                <i className="fa fa-globe text-success pt-1 my-0 me-1" aria-hidden="true" />
                &nbsp;
                <p className="details-info-text pt-1 my-0 me-3">worldwide</p>
                &nbsp;
                <p className="details-info-text pt-1 my-0">
                  {quantity.length}
                  {' '}
                  Left
                </p>
              </div>
              <ul className="ps-3">
                { price > 5000
                  ? <li className="card-text mb-2">Eligible for free Shipping & Delivery.</li>
                  : <li className="card-text mb-2">Worldwide Shipping Available.</li>}
                <li className="card-text mb-2">Hassle-Free Exchanges & Returns for 30 Days.</li>
                <li className="card-text mb-2">6-Month Limited Warranty.</li>
              </ul>
            </div>
          </div>
          <div className="detail-box my-3 p-2 border rounded-1">
            <h3 className="title text-dark">Description</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="detail-box my-3 p-2 border rounded-1">
            <p className="card-text">
              <b className="price">
                R
                {' '}
                {price}
              </b>
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
            <div className="actions my-3 py-1">
              <button type="button" className="buy btn btn-success rounded-1 w-100">
                <i className="fa fa-plus" aria-hidden="true" />
                <i className="fas fa-shopping-cart" />
                &nbsp;
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
