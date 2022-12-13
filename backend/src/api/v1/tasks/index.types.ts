import Express from "express";
import { Endpoint } from "../../../common";

export type GetTasksEndpoint = Endpoint<{}, {}, {}, { tasks: Array<any> }>;
