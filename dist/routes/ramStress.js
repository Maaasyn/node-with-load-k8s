"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ramStressController_1 = __importDefault(require("../controllers/ramStressController"));
const router = express_1.default.Router();
router.get("/", ramStressController_1.default.get);
router.get("/:id", ramStressController_1.default.getId);
exports.default = router;
//# sourceMappingURL=ramStress.js.map