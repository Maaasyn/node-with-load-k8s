import type { NextFunction, Response, Request } from "express";
import fibonacci from "../utils/fibonacciRecursive";

const get = async (_req: Request, res: Response, _next: NextFunction) => {
  const fibonacciResult = fibonacci(5);
  res.send(
    `Tutaj bede zwracal wynik obliczenia sekwencji fibonaciego, domyślnia wartość funkcji to 5. Wynik to: ${fibonacciResult}`
  );
};

interface reqProps {
  id: string;
}

const getId = async (
  req: Request<reqProps, {}, reqProps>,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;
  const result = fibonacci(parseInt(id));
  res.send(`Argument funkcji: ${id}, Wynik: ${result}`);
};

export default {
  get,
  getId,
};
