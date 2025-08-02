import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Customer = sequelize.define('Customer', {
    personID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

export default Customer;