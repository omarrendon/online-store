import { ADD_TO_CART } from '../types/types';

const initialState = {
  id: 0,
  nameProduct: "Aun nada"
}

export const cartReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case action.ADD_TO_CART:
      return {
        ...state
      };

    default:
      return state;
  }
}