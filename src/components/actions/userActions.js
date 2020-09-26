
import { ADD_USER } from '../types/types';

export const addUser = (id, name, age, email) => ({
  type: ADD_USER,
  payload: {
    id,
    name,
    age,
    email
  }
});