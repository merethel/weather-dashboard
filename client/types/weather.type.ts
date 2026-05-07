export type WeatherCodeCondition = {
  description: string;
  imageUrl: string;
};

export type CurrentWeather = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  time: string;
  condition: WeatherCodeCondition;
};

export type DailyForecast = {
  date: string;
  minTemperature: number;
  maxTemperature: number;
  condition: WeatherCodeCondition;
};

export type WeatherForecast = {
  days: DailyForecast[];
};

export type WeatherData = {
  location: string;
  current: CurrentWeather;
  forecast: WeatherForecast;
  assessment: string;
};
