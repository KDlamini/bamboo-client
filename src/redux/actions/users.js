import { returnErrors } from './errors';
import {
  USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL,
} from './actionTypes';
import * as api from '../../api/api';

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localStorage
  const { token } = getState().auth.token;

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
  try {
    // User loading
    dispatch({ type: USER_LOADING });

    const data = await api.getAuthUser(tokenConfig(getState));

    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {
    dispatch(returnErrors(error.message, error.status));
    dispatch({ type: AUTH_ERROR });
    throw new Error(error.message);
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(
      returnErrors(error.message, error.status, 'REGISTER_FAIL'),
    );
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(
      returnErrors(error.message, error.status, 'LOGIN_FAIL'),
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
