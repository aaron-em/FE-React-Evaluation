import { fakeInterests as interests, fakeSkills as skills } from "./dummy-data";

import { Skill, Interest } from "./reducers/data";

export type DataResponse = {
  skills: Skill[];
  interests: Interest[];
};

const totallyRealApiResponseBody = {
  skills,
  interests
};

async function fakeGet(): Promise<DataResponse> {
  const apiUrl = "/"; // TODO abstract to config
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch fresh data (HTTP ${response.status} ${response.statusText})`
    );
  }

  // ordinarily we'd unwrap and JSON-parse, etc., and potentially
  // use runtypes to defend the boundaries of our type system by
  // validating that what we get back is of a shape we expect

  // ordinarily also this would actually *need* to be async, so
  // let's make it real, and a little slow too
  return new Promise(resolve => {
    setTimeout(() => resolve(totallyRealApiResponseBody), 150);
  });
}

export const apiClient = {
  fakeGet
};
