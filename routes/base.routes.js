const express = require("express");

const routes = express.Router();

const { welcome } = require("../controllers/home.controller");

routes.get("/", welcome);

module.exports = routes;
