import express, { Request, Response } from "express";
import { port } from "./config/env";
import { testConnection } from "./utils/databaseUtils";

const app = express();

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