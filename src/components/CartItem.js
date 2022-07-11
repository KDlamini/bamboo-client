import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCart, deleteFromCart, deleteAlert } from '../redux/actions/cart';
import { filterDepartment } from '../redux/actions/products';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    _id: id, name, image, category, price, discountPrice, countInStock, quantity,
  } = item;

  const stock = [...Array(countInStock).keys()];
  const displayPrice = discountPrice || price;

  return (
    <div className="detail-box d-flex mb-1 p-2 border rounded-1">
      <div className="cart-img-wrapper">
        <img src={image} alt="product" className="cart-img" />
      </div>

      <div className="cart-info-wrapper px-3">
        <h2 className="card-text mt-3">{name}</h2>

        <div className="text-start">
          <button
            type="button"
            onClick={() => {
              dispatch(filterDepartment(category));
              navigate('/query');
            }}
            className="details-link bg-light p-0 border-0"
          >
            {category}
          </button>
        </div>
        <div className="stock-info-wrapper d-flex py-3">
          { stock.length > 0 ? <div className="stock-info text-dark my-0 me-3">In Stock</div> : <div className="stock-info text-danger my-0 me-1">Out of Stock</div> }
                &nbsp;
          <i className="fa fa-globe text-success pt-1 my-0 me-1" aria-hidden="true" />
                &nbsp;
          <p className="details-info-text pt-1 my-0 me-3">worldwide</p>
        </div>
        <div className="text-start">
          {
            discountPrice
            && (
            <p className="promotion-tag card-text mb-3 p-1 rounded-1">
              <i className="fa-solid fa-tag" />
            &nbsp; &nbsp;
              <span className="promotion-tag-text">Promotion Applied: Best Deals</span>
            </p>
            )
          }
        </div>
      </div>

      <div className="cart-img-wrapper px-2">
        <p className="mt-3 text-start">
          <b className="card-text price p-0">
            $
            {' '}
            {displayPrice * quantity}
          </b>
        </p>
        <div className="d-flex">
          <p className="details-info-text d-flex align-items-center my-0 pe-2">Qty: </p>
          <select
            className="form-select cart-select"
            aria-label="Default select example"
            value={quantity}
            onChange={(e) => {
              dispatch(updateCart(item, Number(e.target.value)));
              dispatch(deleteAlert());
            }}
            disabled={!stock.length}
          >
            {
              stock.map((stock, index) => (
                <option key={stock} value={index + 1}>{index + 1}</option>
              ))
            }
          </select>
        </div>
        <div className="delete mt-3">
          <button
            type="button"
            className="btn btn-sm p-1"
            onClick={() => dispatch(deleteFromCart(id))}
          >
            <i className="fa-solid fa-trash text-danger me-2" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
