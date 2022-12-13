import Express from "express";

const notFounder = async (
  err: any,
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  next(new Error(`Not found`));
};

export default notFounder;
