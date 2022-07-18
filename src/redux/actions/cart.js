import {
  ADD_TO_CART, DELETE_FROM_CART, REMOVE_ALERT, PROCEED_TO_CHECKOUT, PROCEED_TO_PAYMENT,
  GENERATE_PAYMENT_INTENT,
} from './actionTypes';
import * as api from '../../api/api';

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

export const deleteAlert = () => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_ALERT, payload: null });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const proceedToCheckout = (price, quantity) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROCEED_TO_CHECKOUT,
      payload: { price, quantity },
    });
    localStorage.setItem('checkout', JSON.stringify(getState().cart.checkout));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const proceedToPayment = (address) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROCEED_TO_PAYMENT,
      payload: address,
    });
    localStorage.setItem('checkout', JSON.stringify(getState().cart.checkout));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSecret = (paymentData) => async (dispatch) => {
  try {
    const response = await api.fetchClientSecret(paymentData);

    dispatch({
      type: GENERATE_PAYMENT_INTENT,
      payload: response,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
