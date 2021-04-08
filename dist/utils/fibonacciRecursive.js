"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacci = (num) => {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};
exports.default = fibonacci;
//# sourceMappingURL=fibonacciRecursive.js.map