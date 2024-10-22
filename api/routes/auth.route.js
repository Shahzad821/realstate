import express from "express";
import { signin, signOut, signup } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signOut);
export default router;
