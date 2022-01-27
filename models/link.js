const { DataTypes } = require("sequelize");
const configDB = require("../database/configDB");

const Link = configDB.define("Link", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Link;
