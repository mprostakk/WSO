import Express from "express";

const withAccount = async (
  req: Express.Request,
  res: Express.Response<{}, { account: { id: string } }>,
  next: Express.NextFunction
) => {
  try {
    const { query, params, headers } = req;
    const { authorization } = headers;
    const {} = params;
    const {} = query;
    if (!authorization) throw new Error(`Authorization failed`);
    const account = { id: authorization };
    res.locals = { ...res.locals, account };
    next();
  } catch (error) {
    next(error);
  }
};

export default withAccount;
