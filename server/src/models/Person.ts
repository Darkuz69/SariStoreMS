import sequelize from "../config/database";
import { DataTypes } from "sequelize";

export interface PersonAttributes {
    id?: number,
    firstName: string,
    lastName: string,
    middleName?: string,
    suffix?: string,
    birthDate: Date,
    createdAt?: Date,
    updatedAt?: Date,
};

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
        type: DataTypes.DATE,
        allowNull: false,
    },
});

export default Person;