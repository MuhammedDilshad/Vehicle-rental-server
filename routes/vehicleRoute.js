const express = require("express");
const { VehicleTypes } = require("../controllers/seedController.js");

const router = express.Router();

router.get("/vehicle-types", VehicleTypes);

module.exports = router;
