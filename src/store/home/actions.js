import { CREATE_USER, UPDATE_USER } from './constants';

export function create(user) {
  return {
    type: CREATE_USER,
    user,
  };
}

export function update(values) {
  return {
    type: UPDATE_USER,
    values,
  };
}
