import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCart, deleteFromCart } from '../redux/actions/cart';

function CartItem({ item }) {
  const dispatch = useDispatch();

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
        <a href="#category" className="details-link">
          <p className="details-link">{category}</p>
        </a>
        <div className="stock-info-wrapper d-flex mb-3 py-3">
          { stock.length > 0 ? <div className="stock-info text-dark my-0 me-3">In Stock</div> : <div className="stock-info text-danger my-0 me-1">Out of Stock</div> }
                &nbsp;
          <i className="fa fa-globe text-success pt-1 my-0 me-1" aria-hidden="true" />
                &nbsp;
          <p className="details-info-text pt-1 my-0 me-3">worldwide</p>
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
            onChange={(e) => dispatch(updateCart(item, Number(e.target.value)))}
            disabled={!stock.length}
          >
            <option defaultValue={quantity}>{quantity}</option>
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
