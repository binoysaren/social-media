import express from "express";
import { login, register } from "../controllers/auth.js"; // ⬅️ add 'register'

const router = express.Router();

router.post("/login", login);
router.post("/register", register); // ⬅️ add this

export default router;
