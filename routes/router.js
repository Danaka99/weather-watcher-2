import express from "express";
import { addUser, updateUser } from "../controllers/userController.js";
import { getWeather } from "../controllers/weatherController.js";
const router = express.Router();

// Add a new user
router.post("/users", addUser);

// Update user's location
router.put("/users/:email", updateUser);

// Get weather data
router.get("/weather/:email/:date", getWeather);

export default router;