/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART, DELETE_FROM_CART, REMOVE_ALERT, PROCEED_TO_CHECKOUT, PROCEED_TO_PAYMENT,
} from '../../actions/actionTypes';

const alerts = {
  newItem: { status: 'Successfully added new item to cart.', control: 0 },
  itemUpdate: { status: 'Successfully updated item from cart.', control: 0 },
};

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const checkout = JSON.parse(localStorage.getItem('checkout')) || {};

const initialState = {
  cartItems,
  alert: {},
  checkout,
};

const cartReducer = (state = initialState, action) => {
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
                quantity: product.quantity,
              };
            }
            return item;
          }),
          alert: { ...alerts.itemUpdate, control: product.quantity },
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, ...action.payload],
        alert: { ...alerts.newItem, control: action.payload.quantity },
      };

    case PROCEED_TO_CHECKOUT:
      return {
        ...state,
        checkout: action.payload,
      };

    case PROCEED_TO_PAYMENT:
      return {
        ...state,
        checkout: { ...state.checkout, address: action.payload },
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          const { _id: id } = item;
          return id !== action.payload;
        }),
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: { ...state.alert, status: action.payload },
      };

    default:
      return state;
  }
};

export default cartReducer;
