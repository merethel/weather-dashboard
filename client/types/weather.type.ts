export type CurrentWeather = {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  time: string;
  condition: {
    description: string;
    imageUrl: string;
  };
};
