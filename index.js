import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./config.js";

import testRoute from "./routes/testRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log("listening");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection to db has been established successfully");
  })
  .catch((err) => {
    console.error("unable to connect to the database", err);
  });

app.use("/server", testRoute);
