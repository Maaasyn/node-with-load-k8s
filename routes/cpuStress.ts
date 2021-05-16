import express from "express";
import cpuController from "../controllers/cpuStressController";

const router = express.Router();

router.get("/", cpuController.get);

router.get("/:id", cpuController.getId);

export default router;
