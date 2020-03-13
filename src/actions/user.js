import request from "superagent";
export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const databaseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

//create user
export const signUp = (
  username,
  email,
  password,
  firstName,
  lastName,
  streetName,
  houseNumber,
  city,
  telephoneNumber,
  latitude,
  longitude,
  history
) => dispatch => {
  // console.log("==========", username, email, password);
  request
    .post(`${databaseUrl}/user`)
    .send({
      username,
      email,
      password,
      firstName,
      lastName,
      streetName,
      houseNumber,
      city,
      telephoneNumber,
      latitude,
      longitude
    })

    .then(response => {
      // console.log("response test", response);
      const action = signUpSuccess(response.body);
      dispatch(action);
      history.push("/login");
    })
    .catch(console.error);
};

function loginSuccess(
  token,
  userId,
  username,
  firstName,
  lastName,
  streetName,
  houseNumber,
  city,
  latitude,
  longitude
) {
  // console.log("is this an id? 2", userId);
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token,
      userId: userId,
      username: username,
      firstName: firstName,
      lastName: lastName,
      streetName: streetName,
      houseNumber: houseNumber,
      city: city,
      latitude: latitude,
      longitude: longitude
    }
  };
}

//login
export const login = (email, password, history) => dispatch => {
  // console.log("login", request.body);
  request
    .post(`${databaseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log("login response", response);
      const {
        jwt,
        userId,
        username,
        firstName,
        lastName,
        streetName,
        houseNumber,
        city,
        latitude,
        longitude
      } = response.body;
      const action = loginSuccess(
        jwt,
        userId,
        username,
        firstName,
        lastName,
        streetName,
        houseNumber,
        city,
        latitude,
        longitude
      );

      dispatch(action);
      history.push("/");
    })
    .catch(console.error);
};
