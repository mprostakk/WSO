import express, { Express, Request, Response } from 'express';
import piston from "piston-client";

const app: Express = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {  
  const client = piston({ server: "piston:9000" });
  
  // const runtimes = await client.runtimes();
  // [{ language: 'python', version: '3.9.4', aliases: ['py'] }, ...]

  const result = await client.execute('python', 'print("Hello World!")');
  // { language: 'python', version: '3.9.4', run: {
  //     stdout: 'Hello World!\n',
  //     stderr: '',
  //     code: 0,
  //     signal: null,
  //     output: 'Hello World!\n'
  // }}
  
  res.send(result);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
