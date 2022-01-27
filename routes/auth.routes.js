const express = require("express");
const AuthController = require("../controllers/auth.controller");

const routes = express.Router();

routes.post("/sign-up", AuthController.sign_up);
routes.post("/sign-in", AuthController.sign_in);

module.exports = routes;
