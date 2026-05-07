import { fetchWeatherData } from "../clients/openMeteo.client.js";
import { mapOpenMeteoToWeatherData } from "../mappers/weather.mapper.js";

export async function getWeatherData({ days = 7 }: { days?: number } = {}) {
  const rawWeather = await fetchWeatherData({ days });

  return mapOpenMeteoToWeatherData(rawWeather);
}
