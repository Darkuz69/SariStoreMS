import dotenv from "dotenv";

dotenv.config();

export const sessionSecret = process.env.SESSION_SECRET;
export const nodeEnv = process.env.NODE_ENV; 
export const port = process.env.SERVER_PORT;
export const database = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME
}