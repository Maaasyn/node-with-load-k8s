"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello_1 = __importDefault(require("./routes/hello"));
const cpuStress_1 = __importDefault(require("./routes/cpuStress"));
const ramStress_1 = __importDefault(require("./routes/ramStress"));
const express_prom_bundle_1 = __importDefault(require("express-prom-bundle"));
const metricsMiddleware = express_prom_bundle_1.default({ includeMethod: true });
const app = express_1.default();
//Prometeus
app.use(metricsMiddleware);
//Routes
app.use("/hello", hello_1.default);
app.use("/stress/ram", ramStress_1.default);
app.use("/stress/cpu", cpuStress_1.default);
app.get("/", (req, res, next) => {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
//# sourceMappingURL=server.js.map