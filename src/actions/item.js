import request from "superagent";
import databaseUrl from "../constants";
export const ALL_ITEMS = "ALL_ITEMS";
export const NEW_ITEM = "NEW_ITEM";
export const FIND_BY_LOCATION = "FIND_BY_LOCATION";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

function allItems(payload) {
  return {
    type: ALL_ITEMS,
    payload
  };
}

export const getItems = () => (dispatch, getState) => {
  const state = getState();
  const { items } = state;
  if (items.length) return;

  request(`${databaseUrl}/items`)
    .then(response => {
      // console.log("response test item!!!!", response.body);
      const action = allItems(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function newItem(payload) {
  return {
    type: NEW_ITEM,
    payload
  };
}

export const createItem = itemData => (dispatch, getState) => {
  // console.log("itemData", itemData);
  // console.log("getState in item", getState());
  const token = getState().user.token;
  const userId = getState().user.user.id;
  const data = { ...itemData, userId };
  request
    .post(`${databaseUrl}/items`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      const action = newItem(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function findByLocation(payload) {
  return {
    type: FIND_BY_LOCATION,
    payload
  };
}

export const searchByLocation = keyword => dispatch => {
  if (keyword)
    request(`${databaseUrl}/items/find/${keyword}`)
      .then(response => {
        console.log("find by location", response.body);
        dispatch(findByLocation(response.body));
      })
      .catch(console.error);
};

function clearSearch() {
  // console.log("this is clear search");
  return {
    type: CLEAR_SEARCH
  };
}

export const searchAll = () => (dispatch, getState) => {
  // console.log("is it here??");
  dispatch(clearSearch());
};
