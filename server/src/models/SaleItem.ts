import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const SaleItem = sequelize.define('SaleItem', {
    saleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }
});

export default SaleItem;