import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: User, key: "id" },
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    attachment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Post;