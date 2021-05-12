import express from "express";
import helloRoutes from "./routes/hello";
import cpuStressRoutes from "./routes/cpuStress";
import ramStressRoutes from "./routes/ramStress";
import promBundle from "express-prom-bundle";
const metricsMiddleware = promBundle({ includeMethod: true });
const app = express();

//Prometeus
app.use(metricsMiddleware);

//Routes
app.use("/hello", helloRoutes);
app.use("/stress/ram", ramStressRoutes);
app.use("/stress/cpu", cpuStressRoutes);

app.get("/", (req, res, next) => {
  res.send("Example app listening on port 3000!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
