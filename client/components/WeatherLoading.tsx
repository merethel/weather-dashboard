import { WEATHER_MESSAGES } from "@/constants/messages/weather.messages";

export function WeatherLoading() {
  return <p>{WEATHER_MESSAGES.LOADING}</p>;
}