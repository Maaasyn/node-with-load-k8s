"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fibonacciRecursive_1 = __importDefault(require("../utils/fibonacciRecursive"));
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
    const fibonacciResult = fibonacciRecursive_1.default(5);
    res.send(`Tutaj bede zwracal fibonaci sequence, domyslnie jest to 5! Wynik to: ${fibonacciResult}`);
});
router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    const result = fibonacciRecursive_1.default(parseInt(id));
    res.send(`Ilosc iteracji: ${id}, Wynik: ${result}`);
});
exports.default = router;
//# sourceMappingURL=cpuStress.js.map