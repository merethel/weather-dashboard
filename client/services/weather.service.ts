import { API_BASE_URL } from "@/constants/api.constants";
import { WEATHER_ERROR_MESSAGES } from "@/constants/errors/weather.errors";
import type { WeatherData } from "@/types/weather.type";
import { mockWeatherData } from "@/data/mockWeather";

export async function getWeatherData({
  days = undefined,
}: {
  days?: number;
} = {}): Promise<WeatherData> {
  try {
    if (!navigator.onLine) {
      return mockWeatherData;
    }

    const response = await fetch(`${API_BASE_URL}/weather?days=${days}`);

    if (!response.ok) {
      throw new Error(WEATHER_ERROR_MESSAGES.WEATHER_FETCH_FAILED);
    }

    return await response.json();
  } catch {
    return mockWeatherData;
  }
}
