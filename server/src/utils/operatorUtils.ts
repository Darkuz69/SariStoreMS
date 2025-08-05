import crypto from "crypto";

export const generateOperatorCode = () => {
    const LENGTH = 4;

    return "OP-" + crypto.randomBytes(4).toString('hex').toUpperCase();
};

