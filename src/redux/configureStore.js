import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import products from './reducers/products/products';
import cart from './reducers/cart/cart';

const store = configureStore({
  reducer: {
    products,
    cart,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
