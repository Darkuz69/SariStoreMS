import crypto from "crypto";

export const generateOperatorCode = () => {
    const LENGTH = 8;

    return crypto.randomBytes(8).toString('hex').toUpperCase();
};

