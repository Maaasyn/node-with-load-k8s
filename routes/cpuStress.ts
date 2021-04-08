import express from "express";
import fibonacci from "../utils/fibonacciRecursive";

const router = express.Router();
router.get("/", (req, res, next) => {
  const fibonacciResult = fibonacci(5);
  res.send(
    `Tutaj bede zwracal fibonaci sequence, domyslnie jest to 5! Wynik to: ${fibonacciResult}`
  );
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  const result = fibonacci(parseInt(id));
  res.send(`Ilosc iteracji: ${id}, Wynik: ${result}`);
});

export default router;
