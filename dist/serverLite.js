"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memoryUsagePrinter_1 = __importDefault(require("./utils/memoryUsagePrinter"));
const app = express_1.default();
app.use("/hello", (req, res) => {
    res.send("hello");
});
app.get("/stress/ram", (req, res, next) => {
    let buffer = [];
    buffer.push(Buffer.alloc(1024 * 1024 * 50));
    res.send(`Do tego zadania uzyto ${memoryUsagePrinter_1.default()} ramu`);
    buffer = null;
    next();
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
//# sourceMappingURL=serverLite.js.map