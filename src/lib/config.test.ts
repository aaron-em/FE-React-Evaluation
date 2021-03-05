import config from "./config";

describe("config", () => {
  it("should recursively freeze the config object", () => {
    try {
      config.thingsApi.url = "welp";
    } catch (e) {
      if (!(e instanceof TypeError && e.message.match(/read only/))) {
        throw e;
      }
    }
  });
});
