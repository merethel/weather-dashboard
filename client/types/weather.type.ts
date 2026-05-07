export type CurrentWeather = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  time: string;
  condition: {
    description: string;
    imageUrl: string;
  };
};
