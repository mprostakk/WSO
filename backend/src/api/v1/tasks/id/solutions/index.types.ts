import { Solution } from "./../../../../../db/Solution/index.types";
import { Id } from "../index.types";

export type Solutions<
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = Id<
  {} & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  {} & RES_LOCALS
>;

export namespace Solutions {
  export type Post = Solutions<
    {},
    { code: string },
    {},
    { solution: Solution }
  >;
}
