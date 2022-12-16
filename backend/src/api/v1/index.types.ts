import { Endpoint, EndpointMethod } from "../../common";

export type V1<
  RAW_PATH extends string = string,
  METHOD extends EndpointMethod = EndpointMethod,
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = Endpoint<
  `/v1${RAW_PATH}`,
  METHOD,
  {} & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  { account: { id: string } } & RES_LOCALS
>;

export namespace V1 {}
