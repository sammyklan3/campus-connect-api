import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

// User Routes
router.put("/users", authMiddleware, updateUser);
router.delete("/users", authMiddleware, deleteUser);

export default router;