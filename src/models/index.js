import sequelize from "../config/database.js";
import User from "./User.js";

async function syncModels() {
    try {
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to synchronize the models:", error);
    }
}

export default syncModels;
