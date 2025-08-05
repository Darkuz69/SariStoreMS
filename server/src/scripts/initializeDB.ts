import sequelize from "../config/database";
import { syncModels } from "../utils/modelSync";
import { nodeEnv } from "../config/env";
import { bootstrapAdmin } from "../utils/bootstrapAdmin";

const initializeDatabase = async() => {
    try {
        console.log("🔗 Testing database connection...");
        await sequelize.authenticate();
        console.log("✅ Database connection established...");
        
        if(nodeEnv === "development") {
            console.log("🔄️ Syncing database tables...");
            await sequelize.sync({ alter: true });
            console.log("✅ Database tables synchronized.");
        
            console.log("📋 Creating/updating models...");
            await syncModels();
            console.log("✅ Models synchronized.");

            await bootstrapAdmin("Admin_123");
        }
        
        console.log("🎉 Database initialization complete!!");
        process.exit(0);
    } catch(error) {
        console.error(`❌ Database initialization failed: ${error}`);
        process.exit(1);
    }
};

initializeDatabase();