import sequelize from "../config/database.js";
import { DataTypes } from 'sequelize';

const Sale = sequelize.define('Sale', {
    processed_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    payment_method: {
        type: DataTypes.ENUM('cash', 'utang'),
        allowNull: false,
    },
    deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: 'sales',
    timestamps: true,
    underscored: true,
});

export default Sale;