import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";

export const priceTotal = (productSelected, products) => dispatch => {
  console.log("PRICE_TOTAL_ACTIONS", products);
}

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id
});

export const removeFromCart = (id) =>({
  type: REMOVE_FROM_CART,
  payload: id
});