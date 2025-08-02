import sequelize from "../config/database";
import { DataTypes } from "sequelize";
import { generateOperatorCode } from "../utils/operatorUtils";

const Operator = sequelize.define('Operator', {
    personID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    operatorCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => generateOperatorCode(),
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Operator;