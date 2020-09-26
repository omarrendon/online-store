import { ADD_USER } from '../types/types';

const initialState = {
  id: null,
  name: '',
  age: null,
  email: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return{
        user: state = action.payload
      };
  
    default:
      return state;
  }
};