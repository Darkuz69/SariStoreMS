import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Contact = sequelize.define('Contact', {
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    network: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Contact;