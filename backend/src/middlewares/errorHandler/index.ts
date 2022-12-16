import Express from "express";

const errorHandler = async (
  err: any,
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const error = err.message || "Unknown Error";
  return res.status(500).json({ status: "error", error });
};

export default errorHandler;
