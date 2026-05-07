import { Router } from "express";
import { getCurrentWeather } from "../services/weather.service.js";
import { WEATHER_ERROR_CODES } from "../errors/weather.errors.js";

const router = Router();

router.get("/current", async (_req, res) => {
  try {
    const currentWeather = await getCurrentWeather();

    res.status(200).json(currentWeather);
  } catch {
    res.status(500).json({
      error: {
        code: WEATHER_ERROR_CODES.FETCH_FAILED,
        message: "Could not fetch current weather",
      },
    });
  }
});

export default router;
