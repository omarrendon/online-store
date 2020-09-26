import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";

const initialState = {
  item: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        // ...state,
        item: action.payload + 1
      };

    case REMOVE_FROM_CART:
      return {
        item: action.payload - 1
      };

    default:
      return state;
  }
};
