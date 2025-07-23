import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

import Sale from "./Sales.js";
import Product from "./Products.js";

const SaleItem = sequelize.define('SaleItem', {
    sale_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'sale_items',
    timestamps: true,
    underscored: true,
});

export default SaleItem;