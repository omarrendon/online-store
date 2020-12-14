import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../types/types";
import { products } from "../data";

const initialSate = {
  favorite: [],
};

export const favoriteReducer = (state = initialSate, action) => {
  let likedProducts = [];
  let dislikeProducts = [];

  switch (action.type) {
    case ADD_TO_FAVORITE:
      console.log(action.payload);

      const listProducts = products.forEach((element) => {
        if (element.id === action.payload) {
          element = { ...element, favorite: (element.favorite = true) };
        }
        if (element.favorite === true) {
          likedProducts = [element, ...likedProducts];
        }
      });

      return {
        ...state,
        favorite: likedProducts,
      };

    case REMOVE_FROM_FAVORITE:
      dislikeProducts = [...state.favorite];

      dislikeProducts.forEach((product) => {
        if (product.id === action.payload) {
          product = { ...product, favorite: (product.favorite = false) };
        }

        console.log(product);
      });

      console.log(dislikeProducts);

      return {
        ...state,
        favorite: dislikeProducts.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
