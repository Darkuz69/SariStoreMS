import { Sequelize } from "sequelize";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { env } from "./env.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let options;

if(env.database.option === "SQLITE") {
    options = {
        dialect: "sqlite",
        storage: join(__dirname, "..", "database", "sariStore.db"),
        define: {
            timestamps: true,
            underscored: true
        }
    }
} else if(env.database.option === "POSTGRESQL") {
    options = {
        dialect: "postgres",
        host: env.database.host,
        port: env.database.port,
        username: env.database.user,
        password: env.database.password,
        database: env.database.name    
    }
} else {
    console.error(`Invalid database option: ${env.database.option}. Valid options are "SQLITE" or "POSTGRESQL"`);
    process.exit(1);
}

const sequelize = new Sequelize(options);

export default sequelize;