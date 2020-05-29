import {
  LOGIN_SUCCESS,
  CLEAR_USER,
  UPDATE_USER_USERNAME
} from '../constants/ActionTypes';

const initialState = {
  currentUser: null,
  isAuthenticated: false
};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: payload.user,
        isAuthenticated: true
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: true
      };
    case UPDATE_USER_USERNAME:
      return {
        ...state,
        currentUser: { ...state.currentUser, displayName: payload.username }
      };
    default:
      return state;
  }
}