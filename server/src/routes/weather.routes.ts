import { Router } from "express";
import { getWeatherData } from "../services/weather.service.js";
import { WEATHER_ERROR_CODES } from "../errors/weather.errors.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const days = req.query.days ? Number(req.query.days) : undefined;

    const weatherData = await getWeatherData({
      days,
    });

    res.status(200).json(weatherData);
  } catch {
    res.status(500).json({
      error: {
        code: WEATHER_ERROR_CODES.FETCH_FAILED,
        message: "Could not fetch weather data",
      },
    });
  }
});

export default router;
