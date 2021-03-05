import { Action } from "redux";

// TODO: type-restrict AuthenticatedUserName so Home doesn't need string | null
export type AuthenticatedUserName = string | null;

export interface UserLoginAction extends Action<"user.LOGIN"> {
  authenticatedUserName: AuthenticatedUserName;
}

export type UserLogoutAction = Action<"user.LOGOUT">;

export const actions = {
  LOGIN: (authenticatedUserName: AuthenticatedUserName): UserLoginAction => ({
    type: "user.LOGIN",
    authenticatedUserName,
  }),
  LOGOUT: (): UserLogoutAction => ({
    type: "user.LOGOUT",
  }),
};

export type UserState = {
  authenticatedUserName: AuthenticatedUserName;
};

const initialUserState: UserState = {
  authenticatedUserName: null,
};

export default function user(
  state: UserState = initialUserState,
  action: UserLoginAction | UserLogoutAction
): UserState {
  switch (action.type) {
    case "user.LOGIN":
      return {
        ...state,
        authenticatedUserName: action.authenticatedUserName,
      };

    case "user.LOGOUT":
      return {
        ...state,
        authenticatedUserName: null,
      };

    default:
      return state;
  }
}
