import { config } from "dotenv";

config();

export const env ={
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
    }
};