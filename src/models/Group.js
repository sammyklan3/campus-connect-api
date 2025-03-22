import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Group = sequelize.define("Group", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "Users", key: "id" },
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
});

export default Group;
