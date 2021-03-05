import config from "../config.json";

export type Config = {
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

export default recursivelyFreeze({ ...config }) as Config;
