import express from "express";
import TaskModel from "../db/Task";
import errorHandler from "../middlewares/errorHandler";
import notFounder from "../middlewares/notFounder";
import v1Router from "./v1";

const apiRouter = express.Router({});

apiRouter.use("/v1", v1Router);

apiRouter.all("*", notFounder);

apiRouter.use(errorHandler);
/*
TaskModel.insertMany([
  {
    name: "Easy for loop",
    description: "Cool task",
    language: "python",
    unitTests: [
      {
        stdin: "5",
        stdout: "1 2 3 4 5",
      },
      {
        stdin: "7",
        stdout: "1 2 3 4 5 6 7",
      },
      {
        stdin: "10",
        stdout: "1 2 3 4 5 6 7 8 9 10",
      },
    ],
  },
]).then((x) => console.log(x));
*/
export default apiRouter;
