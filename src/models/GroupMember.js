import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const GroupMember = sequelize.define("GroupMember", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    groupId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Groups", key: "id" },
        onDelete: "CASCADE",
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
        onDelete: "CASCADE",
    },
    role: { type: DataTypes.ENUM("admin", "member"), defaultValue: "member" }, // Admins can add/remove members
    joinedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
});

export default GroupMember;
