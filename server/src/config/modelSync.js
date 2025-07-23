import Profile from "../models/Profiles.js";
import Account from "../models/Accounts.js";
import Sale from "../models/Sales.js";
import Role from "../models/Roles.js";
import AccountRole from "../models/AccountRoles.js";
import Permission from "../models/Permissions.js";
import RolePermission from "../models/RolePermissions.js";
import Customer from "../models/Customers.js";
import Utang from "../models/Utangs.js";
import Product from "../models/Products.js";
import ProductCategory from "../models/ProductCategories.js";
import Inventory from "../models/Inventories.js";
import SaleItem from "../models/SaleItems.js";
import UtangPayment from "../models/UtangPayments.js";

import { env } from "./env.js";

export const syncModel = async () => {
    const isDev = env.environment === 'development';

    try {
        await Profile.sync(isDev ? { alter: true } : {});
        await Account.sync(isDev ? { alter: true } : {});
        await Sale.sync(isDev ? { alter: true } : {});
        await Role.sync(isDev ? { alter: true } : {});
        await AccountRole.sync(isDev ? { alter: true } : {});
        await Permission.sync(isDev ? { alter: true } : {});
        await RolePermission.sync(isDev ? { alter: true } : {});
        await Customer.sync(isDev ? { alter: true } : {});
        await Utang.sync(isDev ? { alter: true } : {});
        await Product.sync(isDev ? { alter: true } : {});
        await ProductCategory.sync(isDev ? { alter: true } : {});
        await Inventory.sync(isDev ? { alter: true } : {});
        await SaleItem.sync(isDev ? { alter: true } : {});
        await UtangPayment.sync(isDev ? { alter: true } : {});

        console.log(`Models synced successfully (${isDev ? 'with alter' : 'create only'}).`);
    } catch(error) {
        console.error('Error syncing models:', error);
    }
}