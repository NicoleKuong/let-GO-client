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

// import { ALL_ITEMS, NEW_ITEM, FIND_BY_LOCATION } from "../actions/item";
// const initialState = { all: [], searched: [] };
// export default (state = initialState, action = {}) => {
//   switch (action.type) {
//     case ALL_ITEMS: {
//       return { ...state, all: action.payload };
//     }
//     case NEW_ITEM: {
//       const newItems = [...state.all, action.payload];
//       return { ...state, all: newItems };
//     }
//     case FIND_BY_LOCATION: {
//       return { ...state, searched: action.payload };
//     }
//     default:
//       return state;
//   }
// };
