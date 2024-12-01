const { DataTypes } = require("sequelize");
const sequelize = require("../configg.js");

const VehicleBooking = (sequelize, DataTypes) => {
  const VehicleBookingModel = sequelize.define("VehicleBooking", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wheels: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specificModel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return VehicleBookingModel;
};

module.exports = VehicleBooking;
