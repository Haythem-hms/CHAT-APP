import express from "express";
import { signUp, login, logOut } from "../controllers/auth.controlers.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logOut);
router.post("/signup", signUp);

export default router;
