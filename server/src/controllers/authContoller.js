/**
 * TODO: Authentication Module Implementation
 * 
 * @priority HIGH
 * @assignee [Darkuz_69]
 * @created 2025-01-06
 * @due-date 2025-01-20
 * 
 * Tasks:
 * [ ] OTP verification system
 * [ ] User registration flow
 * [ ] Login authentication
 * [ ] Password reset functionality
 * [ ] Session management (JWT)
 * [ ] Role-based permissions
 * 
 * Notes:
 * - Requires backend API completion
 * - Security review needed before production
 */

import { OTP_SECRET } from "../config/env.js";
import { sendMail } from "../config/mailer.js";
import { OTPEmailTemplate } from "../lib/emailTemplate.js";
import OTP from "../models/OTP.js";

import { totp } from "otplib";

const AuthController = {
    createOTP: async(req, res) => {
        const { email } = req.body;

        const token = totp.generate(OTP_SECRET);
        
        const otp = new OTP({
            email,
            otp: token
        });

        try {
            await otp.save();
            
            await sendMail({
                to: email,
                subject: "ByteBudget - Verify Your Account",
                html: OTPEmailTemplate(token)
            });

            res.status(200).json({
                email: email,
                message: "OTP sent successfully"
            });
        } catch (error) {
            console.error("Error creating OTP:", error);
            res.status(500).json({
                errors: { 
                    general: "Failed to create OTP" 
                }
            });
        }
    },
    verifyOTP: async(req, res) => {
        const { requestType, email, otp } = req.body;

        console.log("Verifying OTP for:", email, "with OTP:", otp);

        try {
            const otpRecord = await OTP.findOne({ email, otp });

            if(!otpRecord) return res.status(400).json({
                errors: {
                    otp: "The verification code is invalid or has expired. Please check your email for the correct 6-digit code or request a new one."
                }
            });

            res.status(200).json({
                message: "OTP verified successfully",
                requestType: requestType,
                email: email
            });        
        } catch(error) {
            console.error("Error verifying OTP:", error);
            res.status(500).json({
                errors: {
                    general: "Failed to verify OTP"
                }
            });
        }

    }
};

export default AuthController;