import type { CurrentWeather } from "../types/weather.type";
import { WEATHER_CODES } from "../config/weather.codes";
import { DEFAULT_LOCATION } from "../config/weather.config";

export function mapOpenMeteoToCurrentWeather(data: any): CurrentWeather {
  const weatherCode = String(data.current.weather_code);
  const timeOfDay = data.current.is_day === 1 ? "day" : "night";

  const weatherCondition = WEATHER_CODES[weatherCode]?.[timeOfDay] ?? {
    description: "Unknown",
    imageUrl: "",
  };

  return {
    location: DEFAULT_LOCATION.name,
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    time: data.current.time,
    condition: {
      description: weatherCondition.description,
      imageUrl: weatherCondition.imageUrl,
    },
  };
}
