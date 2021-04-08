import express, { Request } from "express";
import memoryUsage from "../utils/memoryUsagePrinter";
import ramStressController from "../controllers/ramStressController";

const router = express.Router();

router.get("/", ramStressController.get);

router.get("/:id", ramStressController.getId);

export default router;
