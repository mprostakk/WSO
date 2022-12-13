import { Endpoint } from "../../../common";
import { Task } from "../../../db/Task/index.types";
import { V1 } from "../index.types";

export type Tasks<
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = V1<
  {} & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  {} & RES_LOCALS
>;

export namespace Tasks {
  export type Get = Tasks<{}, {}, {}, { tasks: Array<Task> }>;
}
