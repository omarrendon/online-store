const { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } = require("../types/types");

const initialSate = {
  favorite: []
};

export const favoriteReducer = ( state = initialSate, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return{
        ...state,
        favorite: [...state.favorite, action.payload]
      }
    
    case REMOVE_FROM_FAVORITE:
      return{
        ...state,
        favorite: state.favorite.filter( product => product.id !== action.payload)
      }


    default:
      return state;
  }
};