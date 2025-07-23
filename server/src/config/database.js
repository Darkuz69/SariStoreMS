import { Sequelize } from "sequelize";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: join(__dirname, "..", "database", "sariStore.db"),
    define: {
        timestamps: true,
        underscored: true
    }
});

export default sequelize;