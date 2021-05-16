import express from "express";
import helloRoutes from "./routes/hello";
import cpuStressRoutes from "./routes/cpuStress";
import ramStressRoutes from "./routes/ramStress";
import { v4 as uuidv4 } from "uuid";
import promBundle from "express-prom-bundle";
// const metricsMiddleware = promBundle({ includeMethod: true });
const app = express();

const port = process.env.PORT || 3001;

const uniqueIdentify = uuidv4();

//Prometeus
// app.use(metricsMiddleware);

//Routes
app.use("/hello", helloRoutes);
app.use("/stress/ram", ramStressRoutes);
app.use("/stress/cpu", cpuStressRoutes);

app.get("/", (req, res, next) => {
  res.send(`App ${uniqueIdentify} is listening on port ${port}! `);
});

app.listen(port, () => {
  console.log(`App ${uniqueIdentify} is listening on port ${port}! `);
});
