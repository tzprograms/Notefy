import { Router } from "express";
import { googleLogin, me } from "../controllers/authController.js";
import auth from "../middleware/auth.js";

const router = Router();
router.post("/google", googleLogin);
router.get("/me", auth, me);

export default router;
