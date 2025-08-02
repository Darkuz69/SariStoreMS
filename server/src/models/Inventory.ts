import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Inventory = sequelize.define('Sale', {
    productID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reorderLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    updatedAt: "lastRestockedDate"
});

export default Inventory;