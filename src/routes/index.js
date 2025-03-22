import { Router } from "express";
import authRoutes from "./auth.routes.js";
import groupRoutes from "./group.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/groups", groupRoutes);

export default router;
