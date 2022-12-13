import { Task } from "../../../../db/Task/index.types";
import { Tasks } from "../index.types";

export type Id<
  REQ_PARAMS extends {} = {},
  REQ_BODY extends {} = {},
  REQ_QUERY extends {} = {},
  RES_PAYLOAD extends {} = {},
  RES_LOCALS extends {} = {}
> = Tasks<
  { taskId: string } & REQ_PARAMS,
  {} & REQ_BODY,
  {} & REQ_QUERY,
  {} & RES_PAYLOAD,
  { task: Task } & RES_LOCALS
>;

export namespace Id {
  export type Get = Id<{}, {}, {}, { task: Task }>;
}
