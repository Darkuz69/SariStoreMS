import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import Operator, { OperatorAttributes } from "../models/Operator";
import { verifyPassword } from "../utils/passwordUtils";

const localOpts = {
    usernameField: 'operatorCode',
    passwordField: 'password',
};

const mainStrategy = async(operatorCode: string, password: string, done: Function) => {
    try {
        const user = await Operator.findOne({
            where: { operatorCode: operatorCode }
        }) as OperatorAttributes | any;

        if(!user) return done(null, false);

        if(!verifyPassword(password, user.passwordHash, user.salt)) return done(null, false);

        return done(null, user);
    } catch(error) {
        return done(error, false);
    }
}

const strategy = new LocalStrategy(localOpts, mainStrategy);

passport.use(strategy);

passport.serializeUser((user: any, done: Function) => {
    done(null, user.operatorCode);
});

passport.deserializeUser(async (operatorCode: string, done: Function) => {
    try {
        const user = await Operator.findOne({
            where: { operatorCode: operatorCode },
            attributes: { exclude: ['passwordHash', 'salt'] }
        }) as OperatorAttributes | any;

        if(!user) return done(null, false);

        return done(null, user);
    } catch(error) {
        return done(error, false);
    }
});