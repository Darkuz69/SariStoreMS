import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const ProductCategory = sequelize.define('ProductCategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default ProductCategory;