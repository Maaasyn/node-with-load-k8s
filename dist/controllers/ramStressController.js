"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoryUsagePrinter_1 = __importDefault(require("../utils/memoryUsagePrinter"));
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let buffer = [];
    buffer.push(Buffer.alloc(1024 * 1024 * 50));
    res.send(`Do tego zadania uzyto ${memoryUsagePrinter_1.default()} ramu`);
    buffer = null;
    next();
});
const getId = (req, res, next) => {
    let buffer = [];
    const { id } = req.params;
    buffer.push(Buffer.alloc(1024 * 1024 * id));
    res.send(`Do tego zadania uzyto ${memoryUsagePrinter_1.default()} ramu`);
    buffer = null;
    next();
};
exports.default = {
    get,
    getId,
};
//# sourceMappingURL=ramStressController.js.map