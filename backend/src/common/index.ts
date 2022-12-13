import { validate } from "express-validation";
import Joi from "joi";
import Express from "express";

type Impossible<K extends keyof any> = {
  [P in K]: never;
};

export type ResBody<RP extends {} = {}> = {
  status: "success" | "error";
  payload: RP;
};

export type Endpoint<
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {}
> = {
  request: Express.Request<
    REQ_PARAMS,
    REQ_BODY,
    ResBody<RES_PAYLOAD>,
    REQ_QUERY
  >;
  response: Express.Response<ResBody<RES_PAYLOAD>>;
};

export type NoExtraProperties<T, U extends T = T> = U &
  Impossible<Exclude<keyof U, keyof T>>;

export type Schema<T> = T extends boolean
  ? Joi.BooleanSchema
  : T extends number
  ? Joi.NumberSchema
  : T extends string
  ? Joi.StringSchema
  : T extends Array<any>
  ? Joi.ArraySchema
  : T extends object
  ? Joi.ObjectSchema<T>
  : Joi.AnySchema;

export type SchemaMap<T, O = NoExtraProperties<Required<T>>> = {
  [K in keyof O]: Schema<O[K]>;
};

export type ValidatorInputSchema<P extends {}, B extends {}, Q extends {}> = {
  params: SchemaMap<P>;
  headers?: object;
  query: object;
  cookies?: object;
  signedCookies?: object;
  body: SchemaMap<B>;
};

export const createValidator = <R extends Express.Request>(
  inputSchema: ValidatorInputSchema<R["params"], R["body"], R["query"]>
) => {
  const { params, headers, query, cookies, signedCookies, body } = inputSchema;
  return validate({
    params: Joi.object(params),
    headers: Joi.object(headers).unknown(),
    query: Joi.object({}),
    cookies: Joi.object(cookies),
    signedCookies: Joi.object(signedCookies),
    body: body ? Joi.object(body) : Joi.any(),
  });
};

export function Controller(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod: any = descriptor.value;
  descriptor.value = async (...args: any[]) => {
    try {
      await originalMethod.apply(this, args);
    } catch (error) {
      const [req, res, next] = args;
      console.error(error);
      next(error);
    }
  };
}

export const success = <P extends {}>(payload: P): ResBody<P> => {
  return { status: "success", payload };
};
