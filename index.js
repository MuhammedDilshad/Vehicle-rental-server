const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./configg.js");

// Import routes
const testRoute = require("./routes/testRoute.js");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("unable to connect to the database", err);
  });

//routes
app.use("/server", testRoute);
