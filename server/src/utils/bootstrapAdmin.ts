import sequelize from "../config/database";
import Operator from "../models/Operator";
import { generateHash } from "./passwordUtils";

export const bootstrapAdmin = async(defaultAdminPassword: string) => {
    const { passwordHash, salt } = generateHash(defaultAdminPassword);
    const adminAccount = Operator.build({
        personID: 1,
        passwordHash: passwordHash,
        salt: salt
    });

    const transaction = await sequelize.transaction();

    try {
        console.log("🔄 Creating admin account...");
        await adminAccount.save({ transaction: transaction });
        console.log("✅ Admin account created.");

        await transaction.commit();
    } catch(error) {
        await transaction.rollback();
        console.error(`❌ Database initialization failed: ${error}`);
    }
}