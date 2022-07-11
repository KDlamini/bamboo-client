import {
  FETCH_ALL_PRODUCTS, ADD_REVIEW, FETCH_ALL_PROMOTIONS, QUERY_BY_DEPARTMENT,
  GET_ONE_PRODUCT, USER_LOADING,
} from '../../actions/actionTypes';

const product = JSON.parse(localStorage.getItem('product')) || {};

const initialState = {
  data: [],
  response: product,
  queries: [],
  isLoading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

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
        }).reverse(),
        isLoading: false,
      };

    case GET_ONE_PRODUCT:
      return {
        ...state,
        response: state.data.find((product) => {
          const { _id: id } = product;
          return id === action.payload;
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
