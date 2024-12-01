const express = require("express");
const { formController } = require("../controllers/formController.js");

const route = express.Router();

route.post("/form-data", formController);

module.exports = route;
