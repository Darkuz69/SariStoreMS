import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Profile = sequelize.define('Profile', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    suffix: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'profiles',
    timestamps: true,
    underscored: true,
});

export default Profile;