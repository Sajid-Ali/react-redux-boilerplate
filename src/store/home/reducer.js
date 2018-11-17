import { CREATE_USER } from './constants';

export const initialState = { users: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      const payload = (state.users && state.users) || [];
      payload.push(action.user);
      return {
        ...state,
        users: payload,
      };
    }

    default:
      return state;
  }
};
