import express, { Request, Response } from "express";
import cookieParser from "cookie-parser"
import session from 'express-session';
import connect from 'connect-pg-simple';
import { Pool } from "pg";
import cors from "cors";
import passport from "passport";

import { nodeEnv, port, sessionSecret } from "./config/env";
import { testConnection } from "./utils/databaseUtils";
import { database } from "./config/env";
import "./config/passport";

import indexRoute from "./routers/index";

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Limit the size of JSON payloads to 10mb
app.use(express.json({ limit: "10mb" }));

// Only allow requests from browser, from our frontend server
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

const pgSession = connect(session);
const pgPool = new Pool({
    host: database.host,
    port: database.port,
    user: database.username,
    password: database.password,
    database: database.name,
    min: 1,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
const sessionStore = new pgSession({
    pool: pgPool,
    tableName: 'Sessions',
    createTableIfMissing: true,
});

app.use(session({
    store: sessionStore,
    secret: sessionSecret as string,
    name: 'sari.sid',
    resave: false,
    saveUninitialized: false,
    rolling: true,  // Reset session cookie on every request
    cookie: {
        httpOnly: true,
        path: '/',
        maxAge: 8 * 60 * 60 * 1000,
        secure: nodeEnv === 'production',
        sameSite: 'lax',
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', indexRoute);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello!! from Typescript...." });
});

export const startServer = async() => {
    await testConnection();

    app.listen(port, () => {
        console.log(`🛜  Server started at http://localhost:${port}`);
    });
}

export default app;