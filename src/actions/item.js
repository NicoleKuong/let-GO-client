import request from "superagent";

export const ALL_ITEMS = "ALL_ITEMS";
export const NEW_ITEM = "NEW_ITEM";

const databaseUrl = "http://localhost:4000";

function allItems(payload) {
  return {
    type: ALL_ITEMS,
    payload
  };
}

export const getItems = () => (dispatch, getState) => {
  const state = getState();
  const { items } = state;
  // console.log("state action", getState());
  if (!items.length) {
    request(`${databaseUrl}/items`)
      .then(response => {
        // console.log("response test", response);
        const action = allItems(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function newItem(payload) {
  return {
    type: NEW_ITEM,
    payload
  };
}

export const createItem = (title, description, price, availableDate) => (
  dispatch,
  getState
) => {
  console.log("getstate in item", getState());
  const token = getState().user.token;
  const userId = getState().user.userId;
  request
    .post(`${databaseUrl}/items`)
    .set("Authorization", `Bearer ${token}`)
    .send({ title, description, price, availableDate, userId })
    .then(response => {
      const action = newItem(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// export const createEvent = (
//   name,
//   description,
//   imageUrl,
//   startDate,
//   endDate
// ) => {
//   return async function(dispatch, getState) {
//     const token = getState().user.token;

//     const response = await axios({
//       method: "POST",
//       url: `${databaseUrl}/events`,
//       headers: {
//         authorization: `Bearer ${token}`
//       },
//       data: {
//         name,
//         description,
//         imageUrl,
//         startDate,
//         endDate
//       }
//     });
//     dispatch(newEvent(response.data));
//   };
// };

// export const getEvents = () => {
//   return async function(dispatch, getState) {
//     const response = await axios
//       .get(`${databaseUrl}/events`)
//       .then(response => {
//         console.log("event action", response.body);
//         dispatch(allEvents(response.body));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };
