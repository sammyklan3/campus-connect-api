import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Friend = sequelize.define("Friend", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
    },
    friendId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
    },
    status: {
        type: DataTypes.ENUM("pending", "accepted", "rejected"),
        defaultValue: "pending",
    },
});

export default Friend;
