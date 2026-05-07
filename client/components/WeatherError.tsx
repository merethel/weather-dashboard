import { WEATHER_ERROR_MESSAGES } from "@/constants/errors/weather.errors";


export function WeatherError() {
  return <p>{WEATHER_ERROR_MESSAGES.WEATHER_FETCH_FAILED}</p>;
}