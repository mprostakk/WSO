import { Solution } from "./../../../../../db/Solution/index.types";
import { Id } from "../index.types";
import { EndpointMethod } from "../../../../../common";

export type Solutions<
  RAW_PATH extends string = string,
  METHOD extends EndpointMethod = EndpointMethod,
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = Id<
  `/solutions${RAW_PATH}`,
  METHOD,
  {} & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  {} & RES_LOCALS
>;

export namespace Solutions {
  export type Post = Solutions<
    "/",
    "POST",
    {},
    { code: string },
    {},
    { solution: Solution }
  >;
}
