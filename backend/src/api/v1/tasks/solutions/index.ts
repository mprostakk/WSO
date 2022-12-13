import express from "express";

const solutionsRouter = express.Router({ mergeParams: true });

solutionsRouter.post("/");

export default solutionsRouter;
