import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Address = sequelize.define('Address', {
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    barangay: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sitio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Address;