import sequelize from "../config/database.js";
import { DataTypes } from 'sequelize';

const Role = sequelize.define('Role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'roles',
    timestamps: false,
});

export default Role;