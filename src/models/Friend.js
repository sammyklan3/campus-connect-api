import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

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
        onDelete: "CASCADE",
    },
    status: {
        type: DataTypes.ENUM("pending", "accepted", "rejected"),
        defaultValue: "pending",
    },
});

User.belongsToMany(User, {
    through: Friend,
    as: "friends",
    foreignKey: "userId",
    otherKey: "friendId",
});

export default Friend;
