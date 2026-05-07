// src/data/mockWeather.ts
import type { WeatherData } from "@/types/weather.type";
const cloudy = {
  description: "Cloudy",
  imageUrl: "/weather-icons/cloudy.png",
};

const rainy = {
  description: "Rain",
  imageUrl: "/weather-icons/rainy.png",
};

const sunny = {
  description: "Sunny",
  imageUrl: "/weather-icons/sunny.png",
};

export const mockWeatherData: WeatherData = {
  location: "Aarhus",
  current: {
    temperature: 12,
    humidity: 78,
    windSpeed: 6,
    time: "2026-05-07T12:00:00Z",
    condition: cloudy,
  },
  forecast: {
    days: [
      {
        date: "2026-05-07",
        minTemperature: 8,
        maxTemperature: 13,
        condition: rainy,
      },
      {
        date: "2026-05-08",
        minTemperature: 7,
        maxTemperature: 14,
        condition: cloudy,
      },
      {
        date: "2026-05-09",
        minTemperature: 9,
        maxTemperature: 16,
        condition: sunny,
      },
      {
        date: "2026-05-10",
        minTemperature: 10,
        maxTemperature: 17,
        condition: sunny,
      },
      {
        date: "2026-05-11",
        minTemperature: 9,
        maxTemperature: 15,
        condition: cloudy,
      },
      {
        date: "2026-05-12",
        minTemperature: 8,
        maxTemperature: 14,
        condition: rainy,
      },
      {
        date: "2026-05-13",
        minTemperature: 10,
        maxTemperature: 18,
        condition: sunny,
      },
    ],
  },
};
