import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const GroupMessage = sequelize.define("GroupMessage", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    groupId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Groups", key: "id" },
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
    },
    content: { type: DataTypes.TEXT, allowNull: false },
});

GroupMessage.belongsTo(User, { foreignKey: "senderId", as: "user" });

export default GroupMessage;
