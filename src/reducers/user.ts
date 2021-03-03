import { Action } from "redux";

export type AuthenticatedUserName = string | null;

export type UserState = {
  authenticatedUserName: AuthenticatedUserName;
};

export interface UserLoginAction extends Action<"user.LOGIN"> {
  authenticatedUserName: AuthenticatedUserName;
}

export type UserLogoutAction = Action<"user.LOGOUT">;

const initialUserState: UserState = {
  authenticatedUserName: null
};

export const actions = {
  LOGIN: (authenticatedUserName: AuthenticatedUserName): UserLoginAction => ({
    type: "user.LOGIN",
    authenticatedUserName
  }),
  LOGOUT: (): UserLogoutAction => ({
    type: "user.LOGOUT"
  })
};

export default function user(
  state: UserState = initialUserState,
  action: UserLoginAction | UserLogoutAction
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
