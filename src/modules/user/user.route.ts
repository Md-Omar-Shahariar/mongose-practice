import express from "express";
import { createUser } from "./user.controller";

const router = express.Router();

router.get("/createUser", createUser);
export default router;
