const { VehicleBooking } = require("../models");

const formController = (req, res) => {
  VehicleBooking.sync()
    .then(() => {
      return VehicleBooking.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        wheels: req.body.wheels,
        vehicleType: req.body.vehicleType,
        specificModel: req.body.specificModel,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      });
    })
    .then((booking) => {
      res.status(200).json({
        message: "Data received and saved successfully",
        data: booking,
      });
    })
    .catch((err) => {
      console.error("Error creating booking:", err);
      res.status(500).json({ error: "Error creating booking" });
    });
};

module.exports = { formController };
