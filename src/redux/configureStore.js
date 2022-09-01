import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import products from './reducers/products/products';
import cart from './reducers/cart/cart';
import error from './reducers/users/errors';
import auth from './reducers/users/auth';
import orders from './reducers/orders/orders';

const store = configureStore({
  reducer: {
    products,
    cart,
    auth,
    orders,
    error,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
