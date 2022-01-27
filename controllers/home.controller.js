exports.welcome = (req, res, next) => {
  res.status(200).json({ msg: "Message from Controller" });
};
