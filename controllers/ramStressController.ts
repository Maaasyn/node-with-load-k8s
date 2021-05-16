import { NextFunction, Response, Request } from "express";
import memoryUsage from "../utils/memoryUsagePrinter";

const sleepv2 = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const get = async (_req: Request, res: Response, _next: NextFunction) => {
  let buffer = [];

  buffer.push(Buffer.alloc(1024 * 1024 * 50, 1));
  await sleepv2(100);
  buffer = null;
  res.send(`Do tego zadania uzyto ${memoryUsage()} ramu`);
  console.log(memoryUsage());
};

interface reqProps {
  id: number;
}

const getId = async (
  req: Request<reqProps, {}, reqProps>,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;

  // buffer.push(Buffer.alloc(1024 * 1024 * id, 1));
  let bufferFromAlloc = Buffer.alloc(1024 * 1024 * id, 1);
  await sleepv2(100);
  bufferFromAlloc.fill(0);

  bufferFromAlloc = null;
  res.send(`Do tego zadania uzyto ${memoryUsage()} ramu`);
  console.log(memoryUsage());
};

export default {
  get,
  getId,
};
