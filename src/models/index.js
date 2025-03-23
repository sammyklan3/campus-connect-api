import sequelize from "../config/database.js";
import User from "./User.js";
import Post from "./Post.js";
import Friend from "./Friend.js";
import GroupMember from "./GroupMember.js";
import GroupMessage from "./GroupMessage.js";
import Group from "./Group.js";
import Message from "./Message.js";

async function syncModels() {
    try {
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to synchronize the models:", error);
    }
}

export default syncModels;
