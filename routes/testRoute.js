import express from "express";
import { testController } from "../controllers/testController.js";

const route = express.Router();

route.post("/test", testController);

export default route;
