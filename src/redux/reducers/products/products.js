import { FETCH_ALL_PRODUCTS } from '../../actions/actionTypes';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
