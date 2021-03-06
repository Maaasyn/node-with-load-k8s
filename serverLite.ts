import express from "express";
import memoryUsage from "./utils/memoryUsagePrinter";
const app = express();

app.use("/hello", (req, res) => {
  res.send("hello");
});

app.get("/stress/ram", (req, res, next) => {
  let buffer = [];

  buffer.push(Buffer.alloc(1024 * 1024 * 50));

  res.send(`This task consumed ${memoryUsage()} ram`);
  buffer = null;
  next();
});

app.listen(3000, function () {
  console.log("App available on port 3000!");
});
