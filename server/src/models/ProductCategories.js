import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const ProductCategory = sequelize.define("ProductCategory", {
    category_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "product_categories",
    timestamps: false,
});

export default ProductCategory;