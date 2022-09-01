import { FETCH_ALL_ORDERS, GET_ONE_ORDER } from '../../actions/actionTypes';

const initialState = {
  data: [],
  order: {},
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ORDERS:
      return {
        ...state,
        data: action.payload,
      };

    case GET_ONE_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
