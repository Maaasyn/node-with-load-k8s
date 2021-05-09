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
const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
function sleepv2(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let buffer = [];
    buffer.push(Buffer.alloc(1024 * 1024 * 50, 1));
    yield sleepv2(500);
    buffer = null;
    res.send(`Do tego zadania uzyto ${memoryUsagePrinter_1.default()} ramu`);
    console.log(memoryUsagePrinter_1.default());
    next();
    return;
});
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // buffer.push(Buffer.alloc(1024 * 1024 * id, 1));
    let bufferFromAlloc = Buffer.alloc(1024 * 1024 * id, 1);
    yield sleepv2(500);
    bufferFromAlloc.fill(0);
    bufferFromAlloc = null;
    res.send(`Do tego zadania uzyto ${memoryUsagePrinter_1.default()} ramu`);
    console.log(memoryUsagePrinter_1.default());
    next();
    return;
});
exports.default = {
    get,
    getId,
};
//# sourceMappingURL=ramStressController.js.map