import { Action } from "redux";

export type AuthenticatedUserName = string | null;

export type UserState = {
  authenticatedUserName: AuthenticatedUserName;
};

interface UserAction<T = unknown> extends Action {
  type: T;
  authenticatedUserName: AuthenticatedUserName;
}

const initialUserState: UserState = {
  authenticatedUserName: null
};

export const actions = [
  {
    type: "user.LOGIN"
  },
  {
    type: "user.LOGOUT"
  }
];

export default function user(
  state: UserState = initialUserState,
  action: UserAction<string>
): UserState {
  switch (action.type) {
    case "user.LOGIN":
      return {
        ...state,
        authenticatedUserName: action.authenticatedUserName
      };
    case "user.LOGOUT":
      return {
        ...state,
        authenticatedUserName: null
      };
    default:
      return state;
  }
}
