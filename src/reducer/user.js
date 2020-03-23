import { USER_CREATED, LOGIN_SUCCESS } from "../actions/user";

const initialState = {};
export default (state = initialState, action = {}) => {
  // console.log("ACTION:??", action);
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };

    case LOGIN_SUCCESS:
      console.log("What is the user action.payload", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
