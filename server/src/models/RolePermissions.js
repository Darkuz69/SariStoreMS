import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

import Role from "./Roles.js";
import Permission from "./Permissions.js";

const RolePermission = sequelize.define('RolePermission', {
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        }
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id'
        }
    }
}, {
    tableName: 'role_permissions',
    timestamps: false,
});

export default RolePermission;