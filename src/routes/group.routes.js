import express from "express";
import { create, getAll, get } from "../controllers/groups.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Group Routes
router.post("/", authMiddleware, create);
router.get("/", getAll);
router.get("/:id", get);

export default router;
