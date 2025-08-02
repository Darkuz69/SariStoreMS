import sequelize from "../config/database";

export const testConnection = async() => {
    try {
        console.log("🔗 Testing database connection...");
        await sequelize.authenticate();
        console.log("✅ Database connection established...");
    } catch(error) {
        console.error(`❌ Database initialization failed: ${error}`);
        process.exit(1);
    }
};