import request from "superagent";
export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const databaseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

//create user
export const signUp = (
  // username,
  // email,
  // password,
  // firstName,
  // lastName,
  // streetName,
  // houseNumber,
  // city,
  // telephoneNumber,
  // latitude,
  // longitude,
  userData,
  history
) => dispatch => {
  console.log("==========", userData);
  request
    .post(`${databaseUrl}/user`)
    .send(
      // username,
      // email,
      // password,
      // firstName,
      // lastName,
      // streetName,
      // houseNumber,
      // city,
      // telephoneNumber,
      // latitude,
      // longitude
      userData
    )

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
  // userId,
  // username,
  // firstName,
  // lastName,
  // streetName,
  // houseNumber,
  // city,
  // latitude,
  // longitude
  user
) {
  console.log("is this an id? 2", token, user);
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token,
      // userId: userId,
      // username: username,
      // firstName: firstName,
      // lastName: lastName,
      // streetName: streetName,
      // houseNumber: houseNumber,
      // city: city,
      // latitude: latitude,
      // longitude: longitude
      user: user
    }
  };
}

//login
export const login = (email, password, history) => dispatch => {
  request
    .post(`${databaseUrl}/login`)
    .send({ email, password })
    .then(response => {
      // console.log("login response", response.body);
      const {
        jwt,
        // userId,
        // username,
        // firstName,
        // lastName,
        // streetName,
        // houseNumber,
        // city,
        // latitude,
        // longitude
        user
      } = response.body;
      const action = loginSuccess(
        jwt,
        // userId,
        // username,
        // firstName,
        // lastName,
        // streetName,
        // houseNumber,
        // city,
        // latitude,
        // longitude
        user
      );

      dispatch(action);
      history.push("/");
    })
    .catch(console.error);
};
