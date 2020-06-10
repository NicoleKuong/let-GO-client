import request from "superagent";
import databaseUrl from "../constants";
export const NEW_EMAIL = "NEW_EMAIL";

// const databaseUrl = "http://localhost:4000";

function newEmail(payload) {
  return {
    type: NEW_EMAIL,
    payload,
  };
}

export const createEmail = (emailData, ownerEmail) => (dispatch, getState) => {
  // console.log("*****", emailData, ownerEmail);
  // console.log("email getState", getState().user);

  console.log("dataURl!!!!!!!!", databaseUrl);
  const token = getState().user.token;
  const data = { ...emailData, ownerEmail };

  request
    .post(`${databaseUrl}/sendMail`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then((response) => {
      const action = newEmail(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
