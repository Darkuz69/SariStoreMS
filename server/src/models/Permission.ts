import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Permission = sequelize.define('Permission', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Permission;