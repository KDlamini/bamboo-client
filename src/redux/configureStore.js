import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import products from './reducers/products/products';

const store = configureStore({
  reducer: {
    products,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
