import { NextFunction, Response, Request } from "express";
import memoryUsage from "../utils/memoryUsagePrinter";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function sleepv2(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const get = async (req: Request, res: Response, next: NextFunction) => {
  let buffer = [];

  buffer.push(Buffer.alloc(1024 * 1024 * 50, 1));
  await sleepv2(500);
  buffer = null;
  res.send(`Do tego zadania uzyto ${memoryUsage()} ramu`);
  console.log(memoryUsage());
  next();
  return;
};

interface reqProps {
  id: number;
}

const getId = async (
  req: Request<reqProps, {}, reqProps>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  // buffer.push(Buffer.alloc(1024 * 1024 * id, 1));
  let bufferFromAlloc = Buffer.alloc(1024 * 1024 * id, 1);
  await sleepv2(500);
  bufferFromAlloc.fill(0);
  bufferFromAlloc = null;
  res.send(`Do tego zadania uzyto ${memoryUsage()} ramu`);
  console.log(memoryUsage());
  next();
  return;
};

export default {
  get,
  getId,
};
