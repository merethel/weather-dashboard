import { API_BASE_URL } from "@/constants/api.constants";
import { WEATHER_ERROR_MESSAGES } from "@/constants/errors/weather.errors";
import type { WeatherData } from "@/types/weather.type";

export async function getWeatherData({
  days = undefined,
}: {
  days?: number;
} = {}): Promise<WeatherData> {
  const response = await fetch(`${API_BASE_URL}/weather?days=${days}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(WEATHER_ERROR_MESSAGES.WEATHER_FETCH_FAILED);
  }

  return data;
}
