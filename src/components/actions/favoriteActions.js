const { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } = require("../types/types");

export const addToFavorite = (item) => ({
  type: ADD_TO_FAVORITE,
  payload: item
});

export const removeFromFavorite = (id) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: id
});