import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
