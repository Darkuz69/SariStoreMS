import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const PersonContact = sequelize.define('PersonContact', {
    personID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contactID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isPrimary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

export default PersonContact;