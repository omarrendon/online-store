import { ADD_USER } from '../types/types';

const initialState = {
  id: null,
  name: '',
  age: null,
  email: '',
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload
  
    default:
      return state;
  }
};