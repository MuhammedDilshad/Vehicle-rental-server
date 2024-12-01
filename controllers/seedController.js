const { Vehicle } = require("../models");

const VehicleTypes = async (req, res) => {
  try {
    console.log(123);
    const vehicles = await Vehicle.findAll();
    console.log(12345, vehicles, "vehicles");

    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { VehicleTypes };
