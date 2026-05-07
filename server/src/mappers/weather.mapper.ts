import type {
  WeatherData,
  WeatherCodeCondition,
} from "../types/weather.type.js";
import { WEATHER_CODES } from "../config/weather.codes.js";
import { DEFAULT_LOCATION } from "../config/weather.config.js";

const UNKNOWN_CONDITION: WeatherCodeCondition = {
  description: "Unknown",
  imageUrl: "",
};

export function mapOpenMeteoToWeatherData(data: any): WeatherData {
  const currentWeatherCode = String(data.current.weather_code);
  const timeOfDay = data.current.is_day === 1 ? "day" : "night";

  const currentCondition =
    WEATHER_CODES[currentWeatherCode]?.[timeOfDay] ?? UNKNOWN_CONDITION;

  return {
    location: DEFAULT_LOCATION.name,

    current: {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      time: data.current.time,
      condition: currentCondition,
    },

    forecast: {
      days: data.daily.time.map((date: string, index: number) => {
        const dailyWeatherCode = String(data.daily.weather_code[index]);
        const dailyCondition =
          WEATHER_CODES[dailyWeatherCode]?.day ?? UNKNOWN_CONDITION;

        return {
          date,
          minTemperature: data.daily.temperature_2m_min[index],
          maxTemperature: data.daily.temperature_2m_max[index],
          condition: dailyCondition,
        };
      }),
    },
  };
}
