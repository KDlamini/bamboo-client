import {
  FETCH_ALL_PRODUCTS, ADD_REVIEW, FETCH_ALL_PROMOTIONS, QUERY_BY_DEPARTMENT, GET_ONE_PRODUCT,
} from './actionTypes';
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

export const getOneProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ONE_PRODUCT, payload: id });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addReview = (id, review) => async (dispatch) => {
  try {
    const data = await api.postReview(id, review);

    dispatch({ type: ADD_REVIEW, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPromotions = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_PROMOTIONS, payload: true });
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
