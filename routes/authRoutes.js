import { Router } from "express";
import auth from "../controllers/authController.js";

const router = Router();

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

export default router;
