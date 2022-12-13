import { Endpoint } from "../../common";

export type V1<
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = Endpoint<
  {} & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  { account: { id: string } } & RES_LOCALS
>;

export namespace V1 {}
