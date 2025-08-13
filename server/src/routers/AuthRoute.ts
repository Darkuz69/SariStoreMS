import { Router, Response } from "express";

import AuthController from "../controllers/AuthContoller";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import { handleValidationErrors } from "../middlewares/index";

const router = Router();

router.post('/validate/operatorCode', AuthMiddleware.validateOperatorCode, handleValidationErrors, (_, res: Response) => {
    return res.status(200).json({ message: "✅ Operator code is valid." });
});

router.post('/validate/password', AuthMiddleware.validatePassword, handleValidationErrors, (_, res: Response) => {
    return res.status(200).json({ message: "✅ Password is valid." });
});

router.post('/login', AuthMiddleware.validateLogin, handleValidationErrors, AuthController.login);
router.post('/logout', AuthController.logout);

export default router;