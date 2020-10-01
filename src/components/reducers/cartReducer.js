import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";

const initialState = [
  {
    id: null,
    name: "",
    price: ""
  }
];

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];


    // case REMOVE_FROM_CART:
    //   return {
    //     item: action.payload - 1
    //   };

    default:
      return state;
  }
};
