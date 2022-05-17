import { FETCH_ALL_PRODUCTS } from './actionTypes';
import * as api from '../../api/api';

// API action creators
export const getProducts = () => async (dispatch) => {
  try {
    const data = await api.fetchProducts();

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getProducts;
