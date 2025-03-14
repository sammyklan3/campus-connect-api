require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRoutes);

async function testConnection() {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Graceful Shutdown
const shutdown = async () => {
    console.log("\n🛑 Shutting down gracefully...");

    try {
        // Stop accepting new connections
        server.close(async (err) => {
            if (err) {
                console.error("❌ Error closing server:", err);
                process.exit(1);
            }

            console.log("✅ HTTP server closed.");

            // Close database connection
            try {
                await db.sequelize.close();
                console.log("✅ Database connection closed.");
            } catch (dbErr) {
                console.error("❌ Error closing database connection:", dbErr);
            }

            process.exit(0);
        });
    } catch (error) {
        console.error("❌ Error during shutdown:", error);
        process.exit(1);
    }
};

// Listen for termination signals
process.on("SIGINT", shutdown);  // Ctrl + C
process.on("SIGTERM", shutdown); // Docker, Kubernetes, or system shutdown