import { body } from "express-validator";

const validateOperatorCode = body('operatorCode')
    .trim().escape()
    .notEmpty().withMessage("❌ Operator code is required.")
    .isLength({ min: 11, max: 11 }).withMessage("❌ Operator code must be exactly 11 characters long.")
    .matches(/^OP-[A-Z0-9]{8}$/).withMessage("❌ Operator code must start with 'OP-' followed by 8 alphanumeric characters.");

const validatePassword = body('password')
    .trim().escape()
    .notEmpty().withMessage("❌ Password is required.")
    .isLength({ min: 8, max: 16 }).withMessage("❌ Password must be between 8 and 16 characters long.")
    .matches(/[A-Z]/).withMessage("❌ Password must contain at least one uppercase letter.")
    .matches(/[a-z]/).withMessage("❌ Password must contain at least one lowercase letter.")
    .matches(/[0-9]/).withMessage("❌ Password must contain at least one number.")
    .matches(/[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]/).withMessage("❌ Password must contain at least one special character.");
    
const AuthMiddleware = {
    validateOperatorCode,
    validatePassword,
    validateLogin: [
        validateOperatorCode,
        validatePassword
    ]
}

export default AuthMiddleware;