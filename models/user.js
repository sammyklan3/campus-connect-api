const { DataTypes } = require("sequelize");
const db = require("../models/index");

const User = db.sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  campus: DataTypes.STRING,
  course: DataTypes.STRING,
  yearOfStudy: DataTypes.INTEGER,
});

module.exports = User;
