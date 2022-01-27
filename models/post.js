const { DataTypes } = require("sequelize");
const configDB = require("../database/configDB");

const Post = configDB.define("Post", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
