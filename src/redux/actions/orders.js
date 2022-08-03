import { FETCH_ALL_ORDERS, GET_ONE_ORDER } from './actionTypes';
import * as api from '../../api/api';
import { tokenConfig } from './users';
import { returnErrors } from './errors';

// Fetch all orders
export const fetchOrders = () => async (dispatch) => {
  const user = () => ({
    auth: {
      token: localStorage.getItem('token') || '',
    },
  });

  const res = await api.getOrders(tokenConfig(user));

  if (res.status === 200) {
    dispatch({ type: FETCH_ALL_ORDERS, payload: res.orders });
  } else {
    dispatch(returnErrors(res.message, res.status, 'FETCH ORDERS FAIL'));
  }
};

// get one order
export const getSingleOrder = (order) => ({
  type: GET_ONE_ORDER,
  payload: order,
});

export default fetchOrders;
