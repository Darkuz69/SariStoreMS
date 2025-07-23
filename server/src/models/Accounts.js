import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Account = sequelize.define('Account', {
    profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    employee_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: 'accounts',
    timestamps: true,
    underscored: true,
});

export default Account;