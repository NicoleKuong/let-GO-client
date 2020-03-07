import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";

const databaseUrl = "http://localhost:4000";

//create image
function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

export const createImage = (imageUrl, itemId) => (dispatch, getState) => {
  // console.log("getstate in image", getState());
  const token = getState().user.token;

  request
    .post(`${databaseUrl}/items/${itemId}/images`)
    .set("Authorization", `Bearer ${token}`)
    .send({ imageUrl, itemId })
    .then(response => {
      console.log("createImage", response);
      const action = newImage(response.body);
      dispatch(action);
      // history.push(`/events/${eventId}`);
    })
    .catch(console.error);
};

//get tickets of one event
function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

//get images for a particular item
export const getImages = itemId => dispatch => {
  // console.log("state action in ticket", getState());
  request(`${databaseUrl}/items/${itemId}/images`)
    .then(response => {
      console.log("response test", response);
      const action = allImages(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
