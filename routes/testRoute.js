const express = require("express");
const { testController } = require("../controllers/testController.js");

const route = express.Router();

route.post("/test", testController);

module.exports = route;
