import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Product = sequelize.define('Product', {
    productCategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unitType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    costPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    sellPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

export default Product;