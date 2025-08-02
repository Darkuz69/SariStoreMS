import { Sequelize } from "sequelize";
import { database } from "./env";

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

export default sequelize;