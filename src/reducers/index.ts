import { combineReducers } from "redux";
import user, { UserState } from "./user";

export type State = {
  user: UserState;
};

export default combineReducers({ user });
