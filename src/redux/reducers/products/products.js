import { FETCH_ALL_PRODUCTS } from '../../actions/actionTypes';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload.map((product) => {
        const { deals, price } = product;
        const { discount, available } = deals[0];

        if (available) {
          return {
            ...product,
            discountPrice: Math.round(((100 - discount) / 100) * price),
          };
        }
        return product;
      });

    default:
      return state;
  }
};

export default productsReducer;
