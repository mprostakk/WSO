import Express from "express";

const withAccount = async (
  err: any,
  req: Express.Request,
  res: Express.Response<{}, { account: { id: string } }>,
  next: Express.NextFunction
) => {
  try {
    const { query, params, body, headers } = req;
    const { authorization } = headers;
    const {} = params;
    const {} = body;
    const {} = query;
    if (!authorization) throw new Error(`Authorization failed`);
    const account = { id: authorization };
    res.locals = { ...res.locals, account };
  } catch (error) {
    next(error);
  }
};

export default withAccount;
