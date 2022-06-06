/* eslint-disable no-case-declarations */
import { ADD_TO_CART } from '../../actions/actionTypes';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload[0];
      const { _id: payloadId } = product;

      const alreadyExist = state.cartItems.find((item) => {
        const { _id: id } = item;
        return id === payloadId;
      });

      if (alreadyExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            const { _id: id } = item;

            if (id === payloadId) {
              return {
                ...item,
                quantity: item.quantity + product.quantity,
              };
            }
            return item;
          }),
        };
      }
      return { ...state, cartItems: [...state.cartItems, ...action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
