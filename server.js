import app from "./src/app.js";
import { createServer } from "http";
import { setupWebsocket } from "./src/config/websocket.js";
import { connectDB } from "./src/config/database.js";
import syncModels from "./src/models/index.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

const server = createServer(app);
setupWebsocket(server);

connectDB()
    .then(() => syncModels())
    .then(() => {
        server.listen(PORT, () =>
            console.log(`🚀 Server running on port ${PORT}`)
        );
    });
