import { ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART } from "../types/types";

const initialState = {
  item: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        item: [ action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        item: state.item.filter(product => product.id !== action.payload)
      };

    case GET_PRODUCTS:
      return [...state];

    default:
      return state;
  }
};
