import { EndpointMethod } from "../../../../common";
import { Task } from "../../../../db/Task/index.types";
import { Tasks } from "../index.types";

export type Id<
  RAW_PATH extends string = string,
  METHOD extends EndpointMethod = EndpointMethod,
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = Tasks<
  `/id/:taskId${RAW_PATH}`,
  METHOD,
  { taskId: string } & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  { taskDocument: Task.Document } & RES_LOCALS
>;

export namespace Id {
  export type Get = Id<"/", "GET", {}, {}, {}, { task: Task }>;
}
