const { Sequelize } = require("sequelize");

const Config = new Sequelize({
  dialect: "sqlite",
  storage: "./database/dev.db",
});

module.exports = Config;
