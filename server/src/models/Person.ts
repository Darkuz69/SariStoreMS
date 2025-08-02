import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Person = sequelize.define('Person', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING,
    },
    suffix: {
        type: DataTypes.STRING,
    },
    birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Person;