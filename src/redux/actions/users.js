import { returnErrors, clearErrors } from './errors';
import {
  USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_SUCCESS, REGISTER_FAIL, LOGIN_MODAL, REGISTER_MODAL,
  ADD_ADDRESS, MODIFY_ADDRESS, DELETE_ADDRESS,
} from './actionTypes';
import * as api from '../../api/api';

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localStorage
  const { token } = getState().auth;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

// Load user
export const getCurrentUser = () => async (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  const res = await api.getAuthUser(tokenConfig(getState));

  if (res.status === 200) {
    dispatch({ type: USER_LOADED, payload: res.user });
  } else {
    dispatch(returnErrors(res.message, res.status));
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = (user) => async (dispatch) => {
  const res = await api.newRegistration(user);

  if (res.status === 200) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } else {
    dispatch(
      returnErrors(res.message, res.status, 'REGISTER_FAIL'),
    );
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (user) => async (dispatch) => {
  const res = await api.newSession(user);

  if (res.status === 200) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } else {
    dispatch(
      returnErrors(res.message, res.status, 'LOGIN_FAIL'),
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Add new address
export const createAddress = (address) => async (dispatch, getState) => {
  const { _id: id } = getState().auth.user;

  const res = await api.AddNewAddress(id, tokenConfig(getState), address);

  if (res.status === 200) {
    dispatch({ type: ADD_ADDRESS, payload: res });
  } else {
    dispatch(returnErrors(res.message, res.status));
  }
};

// Update address
export const updateAddress = (address) => async (dispatch, getState) => {
  const { _id: userId } = getState().auth.user;
  const { _id: id } = address;

  const res = await api.modifyAddress(userId, id, tokenConfig(getState), address);

  if (res.status === 200) {
    dispatch({ type: MODIFY_ADDRESS, payload: res });
  } else {
    dispatch(returnErrors(res.message, res.status));
  }
};

// Delete address
export const deleteAddress = (address) => async (dispatch, getState) => {
  const { _id: userId } = getState().auth.user;
  const { _id: id } = address;

  const res = await api.removeAddress(userId, id, tokenConfig(getState), address);

  if (res.status === 200) {
    dispatch({ type: DELETE_ADDRESS, payload: res });
  } else {
    dispatch(returnErrors(res.message, res.status));
  }
};

// Logout User
export const logout = () => ({
  type: LOGOUT_SUCCESS,
});

// Handle modal open & close
export const loginToggle = () => async (dispatch) => {
  dispatch(clearErrors());
  dispatch({ type: LOGIN_MODAL });
};

export const registerToggle = () => async (dispatch) => {
  dispatch(clearErrors());
  dispatch({ type: REGISTER_MODAL });
};
