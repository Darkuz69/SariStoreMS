import crypto from "crypto";

const generateHash = (password: string) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = crypto.scryptSync(password, salt, 64).toString('hex');

    return {
        passwordHash,
        salt,
    }
}

const verifyPassword = (password: string, passwordHash: string, salt: string) => {
    const hashed = crypto.scryptSync(password, salt, 64).toString('hex');
    return passwordHash === hashed;
}

export {
    generateHash,
    verifyPassword
}