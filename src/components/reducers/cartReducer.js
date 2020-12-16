import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";
import { products } from "../data";

const initialState = {
  item: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  let productIn = [];
  let productOut = [];
  let totalAdd = 0;

  switch (action.type) {
    case ADD_TO_CART:
      products.forEach((product) => {
        if (product.id === action.payload) {
          product = { ...product, amount: (product.amount += 1) };
          totalAdd = state.total + product.price;
        }

        if (product.amount >= 1) {
          productIn = [product, ...productIn];
          totalAdd = state.total + product.price;
        }
      });

      return {
        ...state,
        item: productIn,
        total: totalAdd,
      };

    case REMOVE_FROM_CART:
      productOut = [...state.item];

      const productDiscount = productOut.find(
        (item) => item.id === action.payload
      );

      let newTotal =
        state.total - productDiscount.price * productDiscount.amount;

      return {
        ...state,
        item: state.item.filter((product) => product.id !== action.payload),
        total: newTotal,
      };

    default:
      return state;
  }
};
