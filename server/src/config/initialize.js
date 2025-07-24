import Permission from "../models/Permissions.js";
import Role from "../models/Roles.js";
import RolePermission from "../models/RolePermissions.js";
import Account from "../models/Accounts.js";
import AccountRole from "../models/AccountRoles.js";

import { permissions } from "../lib/permissionsList.js";
import { roles } from "../lib/rolesList.js";

import sequelize from "./database.js";
import { env } from "./env.js";

const initializePermissions = async () => {
    try {
        console.log(`Initializing ${permissions.length} permissions...`);

        const permissionsMapped = permissions.map((permission) => {
            return new Permission({
                name: permission.trim()
            });
        });

        let successCount = 0;
        let skipCount = 0;
        const errors = [];

        for (const permission of permissionsMapped) {
            try {
                await permission.save();
                successCount++;
                console.log(`✓ Permission '${permission.name}' created successfully`);
            } catch (saveError) {
                // Handle specific database errors
                if (saveError.name === 'SequelizeUniqueConstraintError') {
                    console.log(`- Permission '${permission.name}' already exists, skipping`);
                    skipCount++;
                } else if (saveError.name === 'SequelizeValidationError') {
                    const validationErrors = saveError.errors.map(err => err.message).join(', ');
                    const errorMsg = `Validation failed for permission '${permission.name}': ${validationErrors}`;
                    console.error(`✗ ${errorMsg}`);
                    errors.push(errorMsg);
                } else if (saveError.name === 'SequelizeDatabaseError') {
                    const errorMsg = `Database error for permission '${permission.name}': ${saveError.message}`;
                    console.error(`✗ ${errorMsg}`);
                    errors.push(errorMsg);
                } else {
                    const errorMsg = `Unexpected error for permission '${permission.name}': ${saveError.message}`;
                    console.error(`✗ ${errorMsg}`);
                    errors.push(errorMsg);
                }
            }
        }

        // Summary logging
        console.log(`Permission initialization complete: ${successCount} created, ${skipCount} skipped, ${errors.length} errors`);
        
        if (errors.length > 0) {
            console.warn('Some permissions failed to initialize:', errors);
            // Optionally throw if you want to fail the entire operation on any error
            // throw new Error(`Failed to initialize ${errors.length} permissions`);
        }

        return {
            success: true,
            created: successCount,
            skipped: skipCount,
            errors: errors
        };

    } catch (error) {
        console.error('Fatal error during permission initialization:', error);
        
        // Enhanced error information
        const errorInfo = {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            function: 'initializePermissions'
        };

        // Log the error details
        console.error('Error details:', errorInfo);

        // Rethrow with additional context
        throw new Error(`Permission initialization failed: ${error.message}`);
    }
};

const initializeRoles = async () => {
    try {
        console.log(`Initializing ${roles.length} roles...`);

        const rolesMapped = roles.map((role) => {
            return new Role({
                name: role.trim()
            });
        });

        let successCount = 0;
        let skipCount = 0;
        const errors = [];

        for (const role of rolesMapped) {
            try {
                await role.save();
                successCount++;
                console.log(`✓ Role '${role.name}' created successfully`);
            } catch (saveError) {
                // Handle specific database errors
                if (saveError.name === 'SequelizeUniqueConstraintError') {
                    console.log(`- Role '${role.name}' already exists, skipping`);
                    skipCount++;
                } else if (saveError.name === 'SequelizeValidationError') {
                    const validationErrors = saveError.errors.map(err => err.message).join(', ');
                    const errorMsg = `Validation failed for role '${role.name}': ${validationErrors}`;
                    console.error(`✗ ${errorMsg}`);
                    errors.push(errorMsg);
                } else if (saveError.name === 'SequelizeDatabaseError') {
                    const errorMsg = `Database error for role '${role.name}': ${saveError.message}`;
                    console.error(`✗ ${errorMsg}`);
                    errors.push(errorMsg);
                } else {
                    const errorMsg = `Unexpected error for role '${role.name}': ${saveError.message}`;
                    console.error(`✗ ${errorMsg}`);
                    errors.push(errorMsg);
                }
            }
        }

        // Summary logging
        console.log(`Role initialization complete: ${successCount} created, ${skipCount} skipped, ${errors.length} errors`);
        
        if (errors.length > 0) {
            console.warn('Some roles failed to initialize:', errors);
            // Optionally throw if you want to fail the entire operation on any error
            // throw new Error(`Failed to initialize ${errors.length} roles`);
        }

        return {
            success: true,
            created: successCount,
            skipped: skipCount,
            errors: errors
        };

    } catch (error) {
        console.error('Fatal error during role initialization:', error);
        
        // Enhanced error information
        const errorInfo = {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            function: 'initializeRoles'
        };

        // Log the error details
        console.error('Error details:', errorInfo);

        // Rethrow with additional context
        throw new Error(`Role initialization failed: ${error.message}`);
    }
};

// Combined initialization function with transaction support
const initializePermissionsAndRoles = async () => {
    const transaction = await sequelize.transaction();
    
    try {
        console.log('Starting permissions and roles initialization...');
        
        const permissionResults = await initializePermissions();
        const roleResults = await initializeRoles();
        
        await transaction.commit();
        
        console.log('Initialization completed successfully');
        return {
            permissions: permissionResults,
            roles: roleResults
        };
        
    } catch (error) {
        await transaction.rollback();
        console.error('Initialization failed, transaction rolled back:', error);
        throw error;
    }
};

export {
    initializePermissions
};