import { FETCH_ALL_PRODUCTS, QUERY_BY_DEPARTMENT } from './actionTypes';
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

export const filterDepartment = (category) => async (dispatch) => {
  try {
    dispatch({ type: QUERY_BY_DEPARTMENT, payload: category });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getProducts;
