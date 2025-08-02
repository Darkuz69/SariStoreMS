import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const RolePermission = sequelize.define('RolePermission', {
    roleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    permissionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default RolePermission;