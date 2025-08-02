import app from "./server";
import { nodeEnv, port } from "./config/env";
import { testConnection } from "./utils/databaseUtils";

app.listen(port, async() => {
    console.log(`Server running at http://localhost:${port}`);
    await testConnection();
});
