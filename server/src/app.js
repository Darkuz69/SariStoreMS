// Application setup
import express from 'express';
const app = express();

import { env } from './config/env.js';
import sequelize from './config/database.js';
import { syncModel } from './config/modelSync.js';
import { setupAssociations } from './config/modelAssoc.js';

// Setup associations before syncing models
setupAssociations();

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        //setupAssociations();
        await syncModel();

        console.log('All models synchronized successfully.');
    } catch(error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

const startServer = async () => {
    await syncDatabase();

    app.listen(env.port, () => {
        console.log(`Server is running on http://localhost:${env.port}`);
    });
};

startServer().catch(error => {
    console.error('Error starting the server:', error);
    process.exit(1); // Exit the process if the server fails to start
});