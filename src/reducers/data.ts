import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import config from "../lib/config";
import apiClient, { DataResponse } from "../lib/fake-api-client";

export type FetchDataAction = Action<"data.FETCH">;

interface ReceiveDataAction extends Action<"data.RECEIVE"> {
  response?: DataResponse;
}

interface ErrorDataAction extends Action<"data.ERROR"> {
  error: string;
}

function receiveAction(response?: DataResponse): ReceiveDataAction {
  return {
    type: "data.RECEIVE",
    response
  };
}

function errorAction(error: string): ErrorDataAction {
  return {
    type: "data.ERROR",
    error
  };
}

const fetchData = (): ThunkAction<
  void,
  DataState,
  unknown,
  ReceiveDataAction | ErrorDataAction
> => async (dispatch, getState): Promise<void> => {
  const state = getState();
  const now = Math.floor(new Date().getTime() / 1000);
  const lastFetch = state.lastFetch;

  if (!state.lastError && now - lastFetch < config.thingsApi.cacheSeconds) {
    dispatch(receiveAction());
    return;
  }

  try {
    const response = await apiClient.fakeGet();
    dispatch(receiveAction(response));
  } catch (e) {
    // presumably warn the user and maybe annotate an APM trace or similar
    // also: retry with some kind of backoff, depending on error type, maybe
    // but for now:
    console.error(e.message);
    dispatch(errorAction(e.message));
  }
};

export const actions = {
  FETCH: fetchData
};

// Type aliases are optional, but useful in that they help us
// better reason about and control the flow of data through our
// application. They also simplify later refactoring if we
// e.g. switch from numeric IDs to UUIDs - the alias only has to be
// changed once.

export type ID = number;

export function isID(v: string | number): v is ID {
  return typeof v === "number" || !!v.match(/^[0-9]+$/);
}

export function toID(s: string): ID | false {
  return isID(s) && parseInt(s, 10);
}

export type Timestamp = number;

export type TimeISO8601 = string;

// We could use "SkillType" and "InterestType" enums, but that
// would require frontend changes to handle new types in data
// coming from the backend. Since nothing else currently requires
// that, we may as well keep them as strings

export type Skill = {
  id: ID;
  name: string;
  type: string;
  DateLearned: TimeISO8601;
  detail: string;
};

export type Interest = {
  id: ID;
  name: string;
  type: string;
  current: boolean;
  detail: string;
};

export type Item = Skill | Interest;

export type DataState = {
  lastFetch: Timestamp;
  lastError: string | null;
  skills: Skill[];
  interests: Interest[];
};

const initialDataState: DataState = {
  lastFetch: 0,
  lastError: null,
  skills: [],
  interests: []
};

export default function data(
  state: DataState = initialDataState,
  action: FetchDataAction | ReceiveDataAction | ErrorDataAction
): DataState {
  const now = new Date().getTime();

  switch (action.type) {
    case "data.RECEIVE":
      if (action.response) {
        state = {
          ...state,
          lastFetch: now,
          lastError: null,
          ...action.response
        };
      }
      return state;

    case "data.ERROR":
      return {
        ...state,
        lastFetch: now,
        lastError: action.error
      };

    default:
      return state;
  }
}
