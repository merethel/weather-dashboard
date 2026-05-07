import { fetchCurrentWeather } from "../clients/openMeteo.client.js";
import { mapOpenMeteoToCurrentWeather } from "../mappers/weather.mapper.js";

export async function getCurrentWeather() {
  const rawWeather = await fetchCurrentWeather();
  return mapOpenMeteoToCurrentWeather(rawWeather);
}
