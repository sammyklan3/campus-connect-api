import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { register, login, me } from "../controllers/auth.controller.js";

const router = express.Router();

// Authentication Routes
router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, me);

export default router;
