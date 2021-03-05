import config from "../config.json";

export type Config = {
  rootPath: string;
  thingsApi: {
    url: string;
    cacheSeconds: number;
  };
};

function recursivelyFreeze(
  o: Record<string, unknown>
): Record<string, unknown> {
  const r = Object.entries(o)
    .map(([k, v]) =>
      typeof v === "object"
        ? { [k]: recursivelyFreeze(v as Record<string, unknown>) }
        : { [k]: v }
    )
    .reduce((a, i) => ({ ...a, ...i }), {});

  Object.freeze(r);

  return r;
}

export default recursivelyFreeze({
  ...config,
  rootPath: process.env.REACT_APP_DEPLOY_ROOT_PATH || config.rootPath,
}) as Config;
