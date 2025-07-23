import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

import Account from "./Accounts.js";
import Role from "./Roles.js";

const AccountRole = sequelize.define('AccountRole', {
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Account,
            key: 'id',
        },
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id',
        },
    },
}, {
    tableName: 'account_roles',
    timestamps: false,
});

export default AccountRole;