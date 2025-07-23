import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Permission = sequelize.define('Permission', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    tableName: 'permissions',
    timestamps: false,
});

export default Permission;