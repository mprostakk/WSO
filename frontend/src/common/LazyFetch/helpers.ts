import qs from "qs";

export function mapToArray<
  T extends Record<string, any> = Record<string, any>,
  WK extends boolean = false,
  F extends boolean = false
>(
  object: T,
  withKeys?: WK,
  isFlat?: F
): WK extends true
  ? F extends true
    ? Array<{ key: keyof T } & T[keyof T]>
    : Array<{ key: keyof T; value: T[keyof T] }>
  : Array<T[keyof T]>;

export function mapToArray<
  T extends Record<string, any> = Record<string, any>,
  WK extends boolean = false,
  F extends boolean = false
>(
  object: T,
  withKeys?: WK,
  isFlat?: F
):
  | Array<{ key: keyof T; value: T[keyof T] }>
  | Array<T[keyof T]>
  | Array<{ key: keyof T } & T[keyof T]> {
  const keys = <Array<keyof T>>Object.keys(object);

  return withKeys
    ? isFlat
      ? keys.map((key) => ({ key, ...object[key] }))
      : keys.map((key) => ({ key, value: object[key] }))
    : keys.map((key) => object[key]);
}

export const createPath = (rawPath: string, params: {} | undefined): string => {
  if (!params) return rawPath;
  let urlPathWithParams = rawPath;
  mapToArray(params, true).forEach(
    (param) =>
      (urlPathWithParams = urlPathWithParams.replace(
        `:${param.key}`,
        `${param.value}`
      ))
  );
  return urlPathWithParams;
};

export const createQuery = (queryObj: {} | undefined): string | undefined => {
  if (!queryObj) return undefined;
  return `?${qs.stringify(queryObj)}`;
};
