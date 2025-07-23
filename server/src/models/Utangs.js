import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Utang = sequelize.define('Utang', {
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sale_id: {
        type: DataTypes.INTEGER,
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    remaining_balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    payment_status: {
        type: DataTypes.ENUM('unpaid', 'partial', 'paid'),
        allowNull: false,
        defaultValue: 'unpaid',
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: 'utangs',
    timestamps: true,
    underscored: true,
});

export default Utang;
