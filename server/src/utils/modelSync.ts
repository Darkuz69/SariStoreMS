import Address from "../models/Address";
import Contact from "../models/Contact";
import Customer from "../models/Customer";
import Inventory from "../models/Inventory";
import Operator from "../models/Operator";
import OperatorRole from "../models/OperatorRole";
import Permission from "../models/Permission";
import Person from "../models/Person";
import PersonAddress from "../models/PersonAddress";
import PersonContact from "../models/PersonContact";
import Product from "../models/Product";
import ProductCategory from "../models/ProductCategory";
import Role from "../models/Role";
import RolePermission from "../models/RolePermission";
import Sale from "../models/Sale";
import SaleItem from "../models/SaleItem";

export const syncModels = async() => {
    const models = [
        Address, Contact, Customer, Inventory, Operator, OperatorRole, Permission, Person,
        PersonAddress, PersonContact, Product, ProductCategory, Role, RolePermission, Sale, SaleItem
    ];

    try {
        for(const model of models) {
            await model.sync({ alter: true });
        }
    } catch(error) {
        console.error(`Unable to sync models: ${error}`);
        process.exit(1);
    }
}