import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Inventory = sequelize.define("Inventory", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cost_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    minimum_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: "inventories",
    timestamps: true,
    underscored: true,
});

export default Inventory;