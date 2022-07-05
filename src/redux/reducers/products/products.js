import {
  FETCH_ALL_PRODUCTS, ADD_REVIEW, FETCH_ALL_PROMOTIONS, QUERY_BY_DEPARTMENT,
} from '../../actions/actionTypes';

const productsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        data: action.payload.map((product) => {
          const { deals, price } = product;
          const { discount, available } = deals[0];

          if (available) {
            return {
              ...product,
              discountPrice: Math.round(((100 - discount) / 100) * price),
            };
          }
          return product;
        }),
      };

    case ADD_REVIEW:
      return {
        ...state,
        response: action.payload,
      };

    case FETCH_ALL_PROMOTIONS:
      return {
        ...state,
        queries: state.data.filter((product) => product.deals[0].available === action.payload),
      };

    case QUERY_BY_DEPARTMENT:
      return {
        ...state,
        queries: state.data.filter((product) => product.category === action.payload),
      };

    default:
      return state;
  }
};

export default productsReducer;
