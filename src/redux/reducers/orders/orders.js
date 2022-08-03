import { FETCH_ALL_ORDERS } from '../../actions/actionTypes';

const initialState = {
  data: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ORDERS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
