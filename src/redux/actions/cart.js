import {
  ADD_TO_CART, DELETE_FROM_CART, REMOVE_ALERT, PROCEED_TO_CHECKOUT, PROCEED_TO_PAYMENT,
  GENERATE_PAYMENT_INTENT, PAYMENT_SUCCESS,
} from './actionTypes';
import * as api from '../../api/api';
import { returnErrors } from './errors';

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

export const processPayment = (paymentData) => async (dispatch) => {
  try {
    const response = await api.createPayment(paymentData);

    dispatch({
      type: GENERATE_PAYMENT_INTENT,
      payload: response,
    });
  } catch (error) {
    dispatch(returnErrors(error.message, 404, 'PAYMENT_INTENT_FAILED'));
  }
};

export const paymentSuccess = (paymentIntent) => async (dispatch) => {
  dispatch({
    type: PAYMENT_SUCCESS,
    payload: paymentIntent,
  });
};
