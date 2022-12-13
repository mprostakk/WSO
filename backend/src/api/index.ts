import express from "express";
import app from "../app";
import v1Router from "./v1";

const apiRouter = express.Router({});

apiRouter.use("/v1", v1Router);

export default apiRouter;
