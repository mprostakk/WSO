import express from "express";
import errorHandler from "../middlewares/errorHandler";
import notFounder from "../middlewares/notFounder";
import v1Router from "./v1";

const apiRouter = express.Router({});

apiRouter.use("/v1", v1Router);

apiRouter.all("*", notFounder);

apiRouter.use(errorHandler);

export default apiRouter;
