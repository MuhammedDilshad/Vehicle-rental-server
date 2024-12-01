const { Vehicle } = require("../models");

const VehicleTypes = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();

    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { VehicleTypes };
