const Link = require("../models/link");
const User = require("../models/User");

const sign_up = async (req, res, next) => {
  console.log(req.body);
  const newUser = await User.create(req.body);
  newUser.createLink({
    name: "hello",
    url: "hello",
  });

  res.json(newUser);
};

const sign_in = async (req, res, next) => {
  const Data = await User.findOne({
    where: { username: req.body.username },
    include: [Link],
  });
  res.json({ user: Data });
};
module.exports = {
  sign_up,
  sign_in,
};
