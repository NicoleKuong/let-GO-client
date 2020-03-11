import { ALL_ITEMS, NEW_ITEM, FIND_BY_LOCATION } from "../actions/item";
const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_ITEMS: {
      return action.payload;
    }
    case NEW_ITEM: {
      return [action.payload, ...state];
    }
    case FIND_BY_LOCATION: {
      return action.payload;
    }
    default:
      return state;
  }
};
