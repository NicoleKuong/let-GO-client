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

//create user
// export function signUp(username, email, password, history) {
//   return async function(dispatch, getState) {
//     const response = await axios.post(`${databaseUrl}/user`, {
//       username: username,
//       email: email,
//       password: password
//     });

//     if (response.status === 201) {
//       dispatch(signUpSuccess());
//       history.push("/login");
//     }
//   };
// }

function loginSuccess(token, userId, username) {
  // console.log("is this an id? 2", userId);
  return {
    type: LOGIN_SUCCESS,
    payload: { token: token, userId: userId, username: username }
  };
}

//login
export const login = (email, password, history) => dispatch => {
  request
    .post(`${databaseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = loginSuccess(
        response.data.jwt,
        response.data.userId,
        response.data.username
      );
      dispatch(action);
      history.push("/");
    })
    .catch(console.error);
};

// export function login(email, password, history) {
//   return async function(dispatch, getState) {
//     // console.log(email, password);
//     const response = await axios.post(`${databaseUrl}/login`, {
//       email,
//       password
//     });
//     console.log("this should contain an id", response);
//     dispatch(
//       loginSuccess(
//         response.data.jwt,
//         response.data.userId,
//         response.data.username
//       )
//     );
//     history.push("/");
//   };
// }

// function updateUserSuccessful(object) {
//   return {
//     type: "UPDATE_USER",
//     payload: object
//   };
// }
// export function updateUser(object) {
//   return async function(dispatch, getState) {
//     dispatch(updateUserSuccessful(object));
//   };
// }
