import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import products from './reducers/products/products';
import cart from './reducers/cart/cart';
import error from './reducers/users/errors';
import auth from './reducers/users/auth';

const store = configureStore({
  reducer: {
    products,
    cart,
    auth,
    error,
  },
}, applyMiddleware(logger, thunk));

export default store;
