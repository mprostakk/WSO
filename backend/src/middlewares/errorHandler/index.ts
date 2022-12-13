import Express from "express";

const errorHandler = async (
  err: any,
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  console.log("[ERR]", err, err?.details, err?.details?.params);
  const error = err.message || "Unknown Error";
  return res.status(500).json({ status: "error", error: error.message });
};

export default errorHandler;
