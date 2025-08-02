import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Sale = sequelize.define('Sale', {
    customerID: {
        type: DataTypes.INTEGER,
        comment: "not needed for cash-only purchases...",
    },
    operatorID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    cashPaid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    creditAmount: {
        type: DataTypes.DECIMAL(10, 2),
        comment: "not needed for cash-only purchases...",
    },
    dueDate: {
        type: DataTypes.DATE,
        comment: "not needed for cash-only purchases...",
    },
    isVoid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    timestamps: true,
    createdAt: "saleDate"
});

export default Sale;