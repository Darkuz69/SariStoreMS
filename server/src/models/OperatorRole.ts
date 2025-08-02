import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const OperatorRole = sequelize.define('OperatorRole', {
    operatorID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default OperatorRole;