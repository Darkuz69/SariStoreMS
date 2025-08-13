import { Request, Response } from "express";
import passport from "passport";

const AuthController = {
    login: (req: Request, res: Response, next: Function) => {
        if(req.isAuthenticated()) return res.status(200).json({ message: "✅ Already logged in." });

        passport.authenticate('local', (err: any, user: any, info: any) => {
            if(err) return next(err);
            if(!user) return res.status(401).json({ message: "❌ Invaild operator code or password." });
            req.logIn(user, (err: any) => {
                if(err) return next(err);
                return res.status(200).json({ message: "✅ Login successful." });
            });
        })(req, res, next);
    },

    logout: (req: Request, res: Response) => {
        req.session.destroy((err: any) => {
            if(err) {
                console.error("❌ Error destroying session:", err);
                return res.status(500).json({ message: "❌ Error logging out." });
            }
            res.clearCookie('sari.sid');
            return res.status(200).json({ message: "✅ Logout successful." });
            // res.redirect('/'); // Optionally redirect to home page
        });
    },
};

export default AuthController;