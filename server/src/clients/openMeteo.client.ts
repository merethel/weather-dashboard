import { DEFAULT_LOCATION } from "../config/weather.config";
import { WEATHER_API_BASE_URL } from "../config/weather.config";

export async function fetchCurrentWeather() {
  const params = new URLSearchParams({
    latitude: String(DEFAULT_LOCATION.latitude),
    longitude: String(DEFAULT_LOCATION.longitude),
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "wind_speed_10m",
      "weather_code",
    ].join(","),
    timezone: "Europe/Copenhagen",
  });

  const response = await fetch(`${WEATHER_API_BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Failed to fetch weather from Open-Meteo");
  }

  return response.json();
}
