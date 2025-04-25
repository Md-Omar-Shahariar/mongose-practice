import express from "express";
import { createUser, getUser } from "./user.controller";

const router = express.Router();

router.get("/createUser", createUser);
router.get("/", getUser);
export default router;
