import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
// route is /auth/login

export default router;