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
      // console.log(state.favorite);
      console.log(action.payload);
      state.favorite.map(product => {
        if (product.id === action.payload) {
          product = { ...product, favorite: (product.favorite = false) };
        }
        if (product.favorite === false) {
          // return state.favorite.filter(fav => fav.id !== action.payload);
          likedProducts = state.favorite.filter(fav => fav.id !== action.payload);
        }
      });

      console.log(state.favorite);
// checar el useeffect por que se vuelve a renderizar y eso hace que tome de nuevo el ultimo valor eliminado
      return {
        // ...state.favorite,
        // favorite: [...state.favorite]
        favorite: likedProducts
      };

    default:
      return state;
  }
};
