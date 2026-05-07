import type { WeatherCodeCondition } from "../types/weather.type";

export type WeatherCodeTimeOfDay = "day" | "night";

export const WEATHER_CODES: Record<
  string,
  Record<WeatherCodeTimeOfDay, WeatherCodeCondition>
> = {
  "0": {
    day: {
      description: "Sunny",
      imageUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    },
    night: {
      description: "Clear",
      imageUrl: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  },
  "1": {
    day: {
      description: "Mainly Sunny",
      imageUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    },
    night: {
      description: "Mainly Clear",
      imageUrl: "http://openweathermap.org/img/wn/01n@2x.png",
    },
  },
  "2": {
    day: {
      description: "Partly Cloudy",
      imageUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    },
    night: {
      description: "Partly Cloudy",
      imageUrl: "http://openweathermap.org/img/wn/02n@2x.png",
    },
  },
  "3": {
    day: {
      description: "Cloudy",
      imageUrl: "http://openweathermap.org/img/wn/03d@2x.png",
    },
    night: {
      description: "Cloudy",
      imageUrl: "http://openweathermap.org/img/wn/03n@2x.png",
    },
  },
  "45": {
    day: {
      description: "Foggy",
      imageUrl: "http://openweathermap.org/img/wn/50d@2x.png",
    },
    night: {
      description: "Foggy",
      imageUrl: "http://openweathermap.org/img/wn/50n@2x.png",
    },
  },
  "48": {
    day: {
      description: "Rime Fog",
      imageUrl: "http://openweathermap.org/img/wn/50d@2x.png",
    },
    night: {
      description: "Rime Fog",
      imageUrl: "http://openweathermap.org/img/wn/50n@2x.png",
    },
  },
  "51": {
    day: {
      description: "Light Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "53": {
    day: {
      description: "Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "55": {
    day: {
      description: "Heavy Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Heavy Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "56": {
    day: {
      description: "Light Freezing Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Freezing Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "57": {
    day: {
      description: "Freezing Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Freezing Drizzle",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "61": {
    day: {
      description: "Light Rain",
      imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Light Rain",
      imageUrl: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  "63": {
    day: {
      description: "Rain",
      imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Rain",
      imageUrl: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  "65": {
    day: {
      description: "Heavy Rain",
      imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Heavy Rain",
      imageUrl: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  "66": {
    day: {
      description: "Light Freezing Rain",
      imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Light Freezing Rain",
      imageUrl: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  "67": {
    day: {
      description: "Freezing Rain",
      imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    night: {
      description: "Freezing Rain",
      imageUrl: "http://openweathermap.org/img/wn/10n@2x.png",
    },
  },
  "71": {
    day: {
      description: "Light Snow",
      imageUrl: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Light Snow",
      imageUrl: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  "73": {
    day: {
      description: "Snow",
      imageUrl: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow",
      imageUrl: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  "75": {
    day: {
      description: "Heavy Snow",
      imageUrl: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Heavy Snow",
      imageUrl: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  "77": {
    day: {
      description: "Snow Grains",
      imageUrl: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow Grains",
      imageUrl: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  "80": {
    day: {
      description: "Light Showers",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Light Showers",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "81": {
    day: {
      description: "Showers",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Showers",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "82": {
    day: {
      description: "Heavy Showers",
      imageUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    },
    night: {
      description: "Heavy Showers",
      imageUrl: "http://openweathermap.org/img/wn/09n@2x.png",
    },
  },
  "85": {
    day: {
      description: "Light Snow Showers",
      imageUrl: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Light Snow Showers",
      imageUrl: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  "86": {
    day: {
      description: "Snow Showers",
      imageUrl: "http://openweathermap.org/img/wn/13d@2x.png",
    },
    night: {
      description: "Snow Showers",
      imageUrl: "http://openweathermap.org/img/wn/13n@2x.png",
    },
  },
  "95": {
    day: {
      description: "Thunderstorm",
      imageUrl: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Thunderstorm",
      imageUrl: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
  "96": {
    day: {
      description: "Light Thunderstorms With Hail",
      imageUrl: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      imageUrl: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
  "99": {
    day: {
      description: "Thunderstorm With Hail",
      imageUrl: "http://openweathermap.org/img/wn/11d@2x.png",
    },
    night: {
      description: "Thunderstorm With Hail",
      imageUrl: "http://openweathermap.org/img/wn/11n@2x.png",
    },
  },
};
