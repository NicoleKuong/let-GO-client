import request from "superagent";
export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const databaseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

//create user
export const signUp = (userData, history) => dispatch => {
  // console.log("==========", userData);
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

function loginSuccess(
  token,

  user
) {
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
      // console.log("login response", response.body);
      const { jwt, user } = response.body;
      const action = loginSuccess(jwt, user);

      dispatch(action);
      history.push("/");
    })
    .catch(console.error);
};
