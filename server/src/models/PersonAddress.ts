import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const PersonAddress = sequelize.define('PersonAddress', {
    personID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    addressID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isPrimary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

export default PersonAddress;