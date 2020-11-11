import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";
import { products } from "../data";


const initialState = {
  item: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let productIn = []
      
      products.map(product => {
        if(product.id === action.payload.id) {
          product = { ...product, amount: (product.amount += 1) };
        }

        if(product.amount >= 1) {
          productIn.push({...product})
          console.log('PRODUCT >= 1', productIn);
        }
        return productIn;
      });

      return {
        ...state,
        item: productIn
      };

    case REMOVE_FROM_CART:
      return {
        ...state.item,
        item: state.item.filter(product => product.id !== action.payload)
      };

    default:
      return state;
  }
};
