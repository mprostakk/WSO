import { validate } from "express-validation";
import Joi from "joi";
import Express from "express";

type Impossible<K extends keyof any> = {
  [P in K]: never;
};

export type Entity<T> = T & { id: string };

export type ResBody<P extends {} = {}> = {
  status: "success" | "error";
  payload?: P;
  error?: any;
};

export type EndpointMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type Endpoint<
  RAW_PATH extends string = string,
  METHOD extends EndpointMethod = EndpointMethod,
  REQ_PARAMS extends {} = any,
  REQ_BODY extends {} = any,
  REQ_QUERY extends {} = any,
  RES_PAYLOAD extends {} = any,
  RES_LOCALS extends {} = any
> = {
  rawPath: RAW_PATH;
  method: METHOD;
  request: Express.Request<
    REQ_PARAMS,
    ResBody<RES_PAYLOAD>,
    REQ_BODY,
    REQ_QUERY
  >;
  response: Express.Response<ResBody<RES_PAYLOAD>, RES_LOCALS> & {
    body: ResBody<RES_PAYLOAD>;
  };
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

export const createValidator = <E extends Endpoint>(
  inputSchema: ValidatorInputSchema<
    E["request"]["params"],
    E["request"]["body"],
    E["request"]["query"]
  >
) => {
  const { params, headers, query, cookies, signedCookies, body } = inputSchema;
  return validate({
    params: Joi.object(params),
    headers: Joi.object(headers).unknown(),
    query: Joi.object(query),
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
  //@ts-ignore
  descriptor.value = async (...args: any[]) => {
    try {
      //@ts-ignore
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
