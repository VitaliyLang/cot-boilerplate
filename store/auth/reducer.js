import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  user: null,
  isLoggedIn: false,
  accessToken: null
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_COMPLETED: {
      return Immutable.merge(state, {
        user: action.user,
        accessToken: action.token,
        isLoggedIn: true
      });
    }

    case types.LOGOUT: {
      return Immutable.merge(state, {
        user: null,
        isLoggedIn: false
      });
    }

    default:
      break;
  }
  return state;
}

/* Selectors */
