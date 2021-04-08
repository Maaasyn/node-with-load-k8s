"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toMb_1 = __importDefault(require("./toMb"));
const memoryUsage = () => {
    const mem = process.memoryUsage();
    return toMb_1.default(mem.rss) + "\t" + toMb_1.default(mem.heapTotal) + "\t" + toMb_1.default(mem.external);
};
exports.default = memoryUsage;
//# sourceMappingURL=memoryUsagePrinter.js.map