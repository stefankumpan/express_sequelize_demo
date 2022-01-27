const sequelize = require("./configDB");
const User = require("../models/User");
const Post = require("../models/post");

const CREATE_DATABASE = (syncDatabase = () => {
  sequelize
    .sync({ force: true })
    .then((result) => {
      console.clear();
      console.log("DB CREATED");
    })
    .catch((err) => console.error(err));
});

CREATE_DATABASE();
