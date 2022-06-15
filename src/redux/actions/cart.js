import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';
// import * as api from '../../api/api';

// API action creators
export const updateCart = (product, quantity) => async (dispatch, getState) => {
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

export const deleteFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_FROM_CART, payload: id });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    throw new Error(error.message);
  }
};
