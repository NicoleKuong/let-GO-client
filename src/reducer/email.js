import { NEW_EMAIL } from "../actions/email";
const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_ITEM: {
      return action.payload;
    }
    default:
      return state;
  }
};
