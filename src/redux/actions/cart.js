import { ADD_TO_CART } from './actionTypes';
// import * as api from '../../api/api';

// API action creators
const updateCart = (product, quantity) => async (dispatch, getState) => {
  try {
    const cartItem = [
      {
        ...product,
        quantity,
      },
    ];

    dispatch({ type: ADD_TO_CART, payload: cartItem });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateCart;
