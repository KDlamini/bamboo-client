import { returnErrors } from './errors';
import {
  USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_SUCCESS, REGISTER_FAIL,
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

// load user
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
  const response = await fetch('http://localhost:5000/users/register', {
    method: 'POST',
    body: JSON.stringify(user),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await response.json();

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
export const login = ({ email, password }) => async (dispatch) => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await response.json();

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

// Logout User
export const logout = () => ({
  type: LOGOUT_SUCCESS,
});
