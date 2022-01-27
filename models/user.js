const { DataTypes } = require("sequelize");
const configDB = require("../database/configDB");
const Link = require("./link");
const Post = require("./post");

const User = configDB.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Post);
User.hasMany(Link);

module.exports = User;
