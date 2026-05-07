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
