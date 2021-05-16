import express from "express";
import helloRoutes from "./routes/hello";
import cpuStressRoutes from "./routes/cpuStress";
import ramStressRoutes from "./routes/ramStress";
import { v4 as uuidv4 } from "uuid";

const uniqueIdentify = uuidv4();
const port = process.env.PORT || 3001;

const app = express();

//Routes
app.use("/stress/ram", ramStressRoutes);
app.use("/stress/cpu", cpuStressRoutes);

app.get("/", (req, res, next) => {
  res.send(`App ${uniqueIdentify} is listening on port ${port}! `);
});

app.listen(port, () => {
  console.log(`App ${uniqueIdentify} is listening on port ${port}! `);
});
