import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Costumer = sequelize.define('Customer', {
    profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    utang_limit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    total_utang: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    current_balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        comment: 'Current balance of the customer (after utang payments)',
    },
    deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: 'customers',
    timestamps: true,
    underscored: true,
});

export default Costumer;