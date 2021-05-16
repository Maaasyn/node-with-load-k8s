import express from "express";
import ramStressController from "../controllers/ramStressController";

const router = express.Router();

router.get("/", ramStressController.get);

router.get("/:id", ramStressController.getId);

export default router;
