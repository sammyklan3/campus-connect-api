import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Message = sequelize.define("Message", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
    },
    receiverId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
    },
    content: { type: DataTypes.TEXT, allowNull: false },
    seen: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Message;
