import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    unit_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null
    }
}, {
    tableName: "products",
    timestamps: true,
    underscored: true,
});

export default Product;