import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../types/types";
import { products } from "../data";

const initialSate = {
  favorite: []
};

export const favoriteReducer = (state = initialSate, action) => {
  let likedProducts = [];

  switch (action.type) {
    case ADD_TO_FAVORITE:
      products.map(product => {
        if (product.id === action.payload) {
          product = { ...product, favorite: (product.favorite = true) };
        }
        if (product.favorite === true) {
          likedProducts.push(product);
        }
      });

      return {
        ...state,
        favorite: likedProducts
      };

    case REMOVE_FROM_FAVORITE:
      console.log(action.payload);
      state.favorite.map(product => {
        if (product.id === action.payload) {
          product = { ...product, favorite: (product.favorite = false) };
        }
        if (product.favorite === false) {
          likedProducts = state.favorite.filter(fav => fav.id !== action.payload);
        }
      });

      return {
        favorite: likedProducts
      };

    default:
      return state;
  }
};
