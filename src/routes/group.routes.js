import express from "express";
import {
    create,
    getAll,
    get,
    addMemberToGroup,
    getMembersOfGroup,
} from "../controllers/groups.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Group Routes
router.post("/", authMiddleware, create);
router.post("/:groupId/members", authMiddleware, addMemberToGroup);
router.get("/:groupId/members", authMiddleware, getMembersOfGroup);
router.get("/", getAll);
router.get("/:id", get);

export default router;
