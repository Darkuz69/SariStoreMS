import { validationResult } from "express-validator";
import { Request, Response } from "express";

export const handleValidationErrors = (req: Request, res: Response, next: Function) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: errors.array().map(err => err.msg)[0],
            errors: errors.array().map(err => err.msg)
        });
    }
    next();
}