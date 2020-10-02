import { ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART } from "../types/types";

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = id => ({
 type: REMOVE_FROM_CART,
 payload: id
});

export const getProducts = (item) => ({
  type: GET_PRODUCTS,
  payload: item
});
