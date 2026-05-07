import { DEFAULT_LOCATION } from "../config/weather.config";
import { WEATHER_API_BASE_URL } from "../config/weather.config";

export async function fetchWeatherData({ days }: { days: number }) {
  const params = new URLSearchParams({
    latitude: String(DEFAULT_LOCATION.latitude),
    longitude: String(DEFAULT_LOCATION.longitude),
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "wind_speed_10m",
      "weather_code",
      "is_day",
    ].join(","),
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"].join(
      ",",
    ),
    forecast_days: String(days),
    timezone: "Europe/Copenhagen",
  });

  const response = await fetch(`${WEATHER_API_BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Failed to fetch weather from Open-Meteo");
  }

  return response.json();
}
