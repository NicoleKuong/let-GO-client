import { combineReducers } from "redux";
import user from "./user";
import items from "./item";

export default combineReducers({ user, items });
