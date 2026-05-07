import type { WeatherData } from "../types/weather.type.js";
import { generateText } from "../clients/weather-assessment.client.js";

export async function getWeatherAssessment(
  weather: WeatherData,
): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    return getFallbackAssessment(weather);
  }

  try {
    const prompt = `
      You are a funny weather assistant.
      Give a short, playful weather assessment in max 1 sentence.
      It should have a punchline.

      Weather:
      Location: ${weather.location}
      Temperature: ${weather.current.temperature}°C
      Condition: ${weather.current.condition.description}
      Humidity: ${weather.current.humidity}%
      Wind: ${weather.current.windSpeed} km/h
    `;

    return await generateText(prompt);
  } catch {
    return getFallbackAssessment(weather);
  }
}

// Fallback assessment in case of API failure or missing API key. Ofc i won't upload .env :)
function getFallbackAssessment(weather: WeatherData): string {
  const temp = weather.current.temperature;
  const condition = weather.current.condition.description.toLowerCase();

  if (condition.includes("rain")) {
    return "Bring an umbrella. Unless you enjoy being lightly marinated by the sky.";
  }

  if (temp < 5) {
    return "It is cold enough outside to make your coffee nervous.";
  }

  if (temp > 22) {
    return "Suspiciously nice weather. Go outside before Denmark changes its mind.";
  }

  return "Decent weather. Not dramatic, not heroic, just very acceptable.";
}
