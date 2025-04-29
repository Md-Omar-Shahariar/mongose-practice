import express from "express";
import { createUser, getUser, getUserById } from "./user.controller";

const router = express.Router();

router.get("/createUser", createUser);
router.get("/", getUser);
router.get("/:id", getUserById);
export default router;
