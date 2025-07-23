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

export const setupAssociations = () => {
    // Account ↔ Profile (1:1)
    Account.belongsTo(Profile, {
        foreignKey: 'profile_id',
        as: 'profile',
    });
    Profile.hasOne(Account, {
        foreignKey: 'profile_id',
        as: 'account',
    });

    // Account ↔ Sales (1:many)
    Account.hasMany(Sale, {
        foreignKey: 'processed_by',
        as: 'sales',
    });
    Sale.belongsTo(Account, {
        foreignKey: 'processed_by',
        as: 'processor',
    });

    // Customer ↔ Profile (1:1)
    Customer.belongsTo(Profile, {
        foreignKey: 'profile_id',
        as: 'profile',
    });
    Profile.hasOne(Customer, {
        foreignKey: 'profile_id',
        as: 'customer',
    });

    // Account ↔ Roles (many:many)
    Account.belongsToMany(Role, {
        through: AccountRole,
        foreignKey: 'account_id',
        otherKey: 'role_id',
        as: 'roles',
    });
    Role.belongsToMany(Account, {
        through: AccountRole,
        foreignKey: 'role_id',
        otherKey: 'account_id',
        as: 'accounts',
    });

    // Roles ↔ Permissions (many:many)
    Role.belongsToMany(Permission, {
        through: RolePermission,
        foreignKey: 'role_id',
        otherKey: 'permission_id',
        as: 'permissions',
    });
    Permission.belongsToMany(Role, {
        through: RolePermission,
        foreignKey: 'permission_id',
        otherKey: 'role_id',
        as: 'roles',
    });

    // Customer ↔ Utang (1:many)
    Customer.hasMany(Utang, {
        foreignKey: 'customer_id',
        as: 'utangs',
    });
    Utang.belongsTo(Customer, {
        foreignKey: 'customer_id',
        as: 'customer',
    });

    // Sales ↔ Utang (1:1)
    Sale.hasOne(Utang, {
        foreignKey: 'sale_id',
        as: 'utang',
    });
    Utang.belongsTo(Sale, {
        foreignKey: 'sale_id',
        as: 'sale',
    });

    // Product ↔ ProductCategory (many:1)
    Product.belongsTo(ProductCategory, {
        foreignKey: 'category_id',
        as: 'category',
    });
    ProductCategory.hasMany(Product, {
        foreignKey: 'category_id',
        as: 'products',
    });

    // Product ↔ Inventory (1:1)
    Inventory.belongsTo(Product, {
        foreignKey: 'product_id',
        as: 'product',
    });
    Product.hasOne(Inventory, {
        foreignKey: 'product_id',
        as: 'inventory',
    });

    // Inventory ↔ Account (many:1)
    Inventory.belongsTo(Account, {
        foreignKey: 'updated_by',
        as: 'updater',
    });
    Account.hasMany(Inventory, {
        foreignKey: 'updated_by',
        as: 'inventories',
    });

    // SaleItem ↔ Sale (many:1)
    SaleItem.belongsTo(Sale, {
        foreignKey: 'sale_id',
        as: 'sale',
    });
    Sale.hasMany(SaleItem, {
        foreignKey: 'sale_id',
        as: 'items',
    });

    // SaleItem ↔ Product (many:1)
    SaleItem.belongsTo(Product, {
        foreignKey: 'product_id',
        as: 'product',
    });
    Product.hasMany(SaleItem, {
        foreignKey: 'product_id',
        as: 'saleItems',
    });

    // Utang ↔ UtangPayment (1:many)
    Utang.hasMany(UtangPayment, {
        foreignKey: 'utang_id',
        as: 'payments',
    });
    UtangPayment.belongsTo(Utang, {
        foreignKey: 'utang_id',
        as: 'utang',
    });

    // UtangPayment ↔ Account (many:1)
    UtangPayment.belongsTo(Account, {
        foreignKey: 'processed_by',
        as: 'processor'
    });
    Account.hasMany(UtangPayment, {
        foreignKey: 'processed_by',
        as: 'payments'
    })
};