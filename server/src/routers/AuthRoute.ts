import { Router } from "express";

import AuthController from "../controllers/AuthContoller";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import { handleValidationErrors } from "../middlewares/index";

const router = Router();

router.post('/login', AuthMiddleware.validateLogin, handleValidationErrors, AuthController.login);
router.post('/logout', AuthController.logout);

export default router;