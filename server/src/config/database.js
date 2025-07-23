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
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
} else if(env.database.option === "POSTGRESQL") {
    options = {
        dialect: "postgres",
        host: env.database.host,
        port: env.database.port,
        username: env.database.user,
        password: env.database.password,
        database: env.database.name,
        pool: {
            max: 20,
            min: 0,
            acquire: 60000,
            idle: 10000
        }
    }
} else {
    console.error(`Invalid database option: ${env.database.option}. Valid options are "SQLITE" or "POSTGRESQL"`);
    process.exit(1);
}

const sequelize = new Sequelize({
    ...options,
    define: {
        timestamps: true,
        underscored: true
    },
    logging: env.NODE_ENV === 'development' ? console.log : false,
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log(`✅ Database connection established successfully (${env.database.option})`);
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
        
        // More specific error handling
        if (error.name === 'SequelizeConnectionError') {
            console.error('Connection failed. Check your database credentials and network.');
        } else if (error.name === 'SequelizeAccessDeniedError') {
            console.error('Access denied. Check your username and password.');
        }
        
        process.exit(1);
    }
};

// Only test connection if not in test environment
if (env.NODE_ENV !== 'test') {
    testConnection();
}

export default sequelize;