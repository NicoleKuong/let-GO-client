import { ALL_ITEMS, NEW_ITEM } from "../actions/item";
const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_ITEMS: {
      return action.payload;
    }
    case NEW_ITEM: {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
};
