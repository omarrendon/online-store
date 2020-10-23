import { ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART, TOTAL_PRICE } from "../types/types";

export const priceTotal = (productSelected, products) => dispatch => {
  console.log("PRICE_TOTAL_ACTIONS", products);
}

export const addToCart = (productSelected, products) => dispatch => {
  const cartItems = products;
  let productAlreadyInCart = false;

  cartItems.forEach(cp => {
    if (productSelected.id === cp.id) {
      cp.amount += 1;
      productAlreadyInCart = true;
    }
  });

  dispatch({
    type: ADD_TO_CART,
    payload: cartItems
  });
};

export const removeFromCart = (id) =>( {
  // const deleteItem = products.filter( deleteProduct => ( deleteProduct.id !== product.id))
    type: REMOVE_FROM_CART,
    payload: id
});

export const getProducts = item => ({
  type: GET_PRODUCTS,
  payload: item
});  