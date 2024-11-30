"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const vehicles = [
      { wheelType: 2, category: "Cruiser", model: "Royal Enfield" },
      { wheelType: 2, category: "Cruiser", model: "Brixton Motorcycles" },
      { wheelType: 2, category: "Cruiser", model: "TVS Ronin" },
      { wheelType: 2, category: "Cruiser", model: "Harley-Davidson" },
      { wheelType: 2, category: "Sports", model: "Yamaha" },
      { wheelType: 2, category: "Sports", model: "TVS Apache" },
      { wheelType: 2, category: "Sports", model: "Bajaj Pulsar" },
      { wheelType: 2, category: "Sports", model: "Kawasaki" },
      { wheelType: 2, category: "E-road bikes", model: "Motovolt URBN E" },
      { wheelType: 2, category: "E-road bikes", model: "Geekay ETX" },
      { wheelType: 2, category: "E-road bikes", model: "Voltebyk" },
      { wheelType: 2, category: "E-road bikes", model: "Zeeta" },
      { wheelType: 4, category: "Hatchback", model: "Renault Kwid" },
      { wheelType: 4, category: "Hatchback", model: "Hyundai i20" },
      { wheelType: 4, category: "Hatchback", model: "Maruti Baleno" },
      { wheelType: 4, category: "Hatchback", model: "Maruti Celerioi" },
      { wheelType: 4, category: "SUV", model: "Audi Q7" },
      { wheelType: 4, category: "SUV", model: "Mahindra XEV 9e" },
      { wheelType: 4, category: "SUV", model: "Tata Curvv" },
      { wheelType: 4, category: "SUV", model: "Land Rover Defender" },
      { wheelType: 4, category: "Sedan", model: "Ciaz" },
      { wheelType: 4, category: "Sedan", model: "Volkswagen Virtus" },
      { wheelType: 4, category: "Sedan", model: "Hyundai Verna" },
      { wheelType: 4, category: "Sedan", model: "Mercedes-benz C-class" },
    ];

    await queryInterface.bulkInsert(
      "Vehicles",
      vehicles.map((vehicle) => ({
        ...vehicle,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
