import express from "express";
import IdController from "./controller";
import middlewares from "./middlewares";
import solutionsRouter from "./solutions";
import validators from "./validators";

const idRouter = express.Router({ mergeParams: true });

idRouter.all("*", validators.all);

idRouter.use(middlewares.withTask);

idRouter.use("/solutions", solutionsRouter);

idRouter.get("/", validators.get, IdController.get);

export default idRouter;
