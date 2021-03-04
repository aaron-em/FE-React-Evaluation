import { combineReducers } from "redux";

import user, { UserState } from "./user";
import data, { DataState } from "./data";

export type State = {
  user: UserState;
  data: DataState;
};

export default combineReducers({ user, data });
