import { fetchWeatherData } from "../clients/openMeteo.client.js";
import { mapOpenMeteoToWeatherData } from "../mappers/weather.mapper.js";
import { getWeatherAssessment } from "./weather-assessment.service.js";

export async function getWeatherData({ days = 7 }: { days?: number } = {}) {
  const rawWeather = await fetchWeatherData({ days });
  const weatherData = mapOpenMeteoToWeatherData(rawWeather);
  const assessment = await getWeatherAssessment(weatherData);

  return { ...weatherData, assessment };
}
