import { Sequelize, Error } from "sequelize";
import { database, nodeEnv } from "./env";

const sequelize = new Sequelize({
    dialect: "postgres",
    host: database.host,
    port: database.port,
    username: database.username,
    password: database.password,
    database: database.name,
    pool: {
        min: 5,
        max: 10,
    }
});

export const testConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        if(nodeEnv === "development") {
            await sequelize.sync({ alter: true });
            console.log("Database tables have been synchronized successfully.");
        }
    } catch(error) {
        console.error(`Unable to connect to the database: ${error}`);
        process.exit(1);
    }
};