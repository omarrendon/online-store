const { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } = require("../types/types");

export const addToFavorite = (id) => ({
  type: ADD_TO_FAVORITE,
  payload: id
});

export const removeFromFavorite = (id) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: id
});