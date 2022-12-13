import express from "express";
import SolutionsController from "./controller";
import validators from "./validators";

const solutionsRouter = express.Router({ mergeParams: true });

solutionsRouter.all("*", validators.all);

solutionsRouter.post("/", validators.post, SolutionsController.post);

export default solutionsRouter;
