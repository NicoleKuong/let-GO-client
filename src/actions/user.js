import request from "superagent";
import databaseUrl from "../constants";
export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";

function signUpSuccess() {
  return { type: USER_CREATED };
}

//create user
export const signUp = (userData, history) => dispatch => {
  console.log("==========", databaseUrl);
  request
    .post(`${databaseUrl}/user`)
    .send(userData)

    .then(response => {
      // console.log("response test", response);
      const action = signUpSuccess(response.body);
      dispatch(action);
      history.push("/login");
    })
    .catch(console.error);
};

function loginSuccess(token, user) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token,
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
      console.log("login response", response.body);
      const { jwt, user } = response.body;
      const action = loginSuccess(jwt, user);

      dispatch(action);
      history.push("/");
    })
    .catch(console.error);
};

//logout
export function logout() {
  return {
    type: LOGOUT_USER
  };
}
