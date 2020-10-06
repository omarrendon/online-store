import { ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART } from "../types/types";

export const addToCart = (productSelected, products) => dispatch => {
  const cartItems = products;
  let productAlreadyInCart = false;

  cartItems.forEach(cp => {
    if (productSelected.id === cp.id) {
      cp.amount += 1;
      productAlreadyInCart = true;
    }
  });

  // if (!productAlreadyInCart) {
  //   cartItems.push({ ...products });
  // }

  dispatch({
    type: ADD_TO_CART,
    payload: cartItems
  });
};

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const getProducts = item => ({
  type: GET_PRODUCTS,
  payload: item
});
