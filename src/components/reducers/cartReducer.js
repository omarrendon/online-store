import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";
import { products } from "../data";

const initialState = {
  item: [],
};

export const cartReducer = (state = initialState, action) => {
  let productIn = [];
  let productOut = [];

  switch (action.type) {
    case ADD_TO_CART:
      products.map((product) => {
        if (product.id === action.payload) {
          product = { ...product, amount: (product.amount += 1) };
        }

        if (product.amount >= 1) {
          productIn = [product, ...productIn];
        }
      });

      return {
        ...state,
        item: productIn,
      };

    case REMOVE_FROM_CART:
      productOut = [...state.item];

      return {
        ...state,
        item: productOut.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};
