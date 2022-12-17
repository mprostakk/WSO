import axios from "axios";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import apiRouter from "./api";
import db from "./db";
import cors from "cors";

require("custom-env").env(true);

const app: Express = express();
const port = 8000;

db.run();

app.use(helmet());
app.use(express.json());
app.use(cors({ credentials: true, allowedHeaders: "*", origin: "*" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.get("/healthcheck", (req, res, next) => {
  res.status(200).json({ status: "success", payload: {} });
});

app.get("/run", async (req: Request, res: Response) => {
  const data = {
    language: "python",
    version: "3.9.4",
    files: [
      {
        name: "run.py",
        content: 'print("Hello world")',
      },
    ],
    stdin: "",
    args: [],
    compile_timeout: 3000,
    run_timeout: 3000,
    compile_memory_limit: 100,
    run_memory_limit: 100,
  };
  const response = await axios.post(
    `${process.env.PISTON_URI}/api/v2/execute`,
    data
  );

  res.status(200).json({ status: "success", pistonResponse: response.data });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
