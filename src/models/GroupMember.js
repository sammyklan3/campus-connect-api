import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Group from "./Group.js";

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

GroupMember.belongsTo(User, { foreignKey: "userId", as: "user" });
GroupMember.belongsTo(Group, { foreignKey: "groupId", as: "group" });

export default GroupMember;
