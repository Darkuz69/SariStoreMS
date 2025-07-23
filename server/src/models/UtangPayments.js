import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const UtangPayment = sequelize.define("UtangPayment", {
    utang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    processed_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount_paid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: "utang_payments",
    timestamps: true,
    underscored: true,
});

export default UtangPayment;