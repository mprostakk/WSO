import { AxiosError } from "axios";
import Express from "express";

const errorHandler = async (
  err: any,
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const error = err.message || "Unknown Error";
  console.log("@", error as AxiosError);
  return res.status(500).json({ status: "error", error });
};

export default errorHandler;
