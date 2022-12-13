import express, { Express, Request, Response } from "express";
import apiRouter from "./api";

const app: Express = express();
const port = 3000;

app.use("/api", apiRouter);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ status: "success" });
});

apiRouter.get("/healthcheck", (req, res, next) => {
  res.status(200).json({ status: "success", payload: {} });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
