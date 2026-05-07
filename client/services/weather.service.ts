import type { CurrentWeather } from "@/types/weather.type";
import { API_BASE_URL } from "@/constants/api.constants";
import { WEATHER_MESSAGES } from "@/messages/weather.messages";

export async function getCurrentWeather(): Promise<CurrentWeather> {
  const response = await fetch(`${API_BASE_URL}/weather/current`);

  if (!response.ok) {
    throw new Error(WEATHER_MESSAGES.ERROR);
  }

  return response.json();
}
