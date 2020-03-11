import { USER_CREATED, LOGIN_SUCCESS } from "../actions/user";

const initialState = {
  userId: null,
  token: null,
  userCreated: false,
  username: null,
  firstName: null,
  lastName: null,
  streetName: null,
  houseNumber: null,
  city: null,
  latitude: null,
  longitude: null
};

export default (state = initialState, action = {}) => {
  // console.log("ACTION:??, guessing sucks", action);
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };

    case LOGIN_SUCCESS:
      console.log("What is the user action.payload", action.payload);
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        streetName: action.payload.streetName,
        houseNumber: action.payload.houseNumber,
        city: action.payload.city,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    default:
      return state;
  }
};
