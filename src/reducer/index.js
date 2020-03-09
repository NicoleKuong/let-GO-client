import { combineReducers } from "redux";
import user from "./user";
import items from "./item";
// import images from "./image";

export default combineReducers({ user, items });
