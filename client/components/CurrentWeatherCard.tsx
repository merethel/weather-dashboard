import { WEATHER_MESSAGES } from "@/messages/weather.messages";
import type { CurrentWeather } from "@/types/weather.type";

type Props = {
  weather: CurrentWeather;
};

export function CurrentWeatherCard({ weather }: Props) {
  return (
    <section className="rounded-xl border p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {weather.condition.imageUrl && (
          <img
            src={weather.condition.imageUrl}
            alt={weather.condition.description}
            className="h-16 w-16"
          />
        )}

        <div>
          <h2 className="text-2xl font-semibold">
            {Math.round(weather.temperature)}°C
          </h2>
          <p>{weather.condition.description}</p>
        </div>
      </div>

      <div className="mt-4 space-y-1 text-sm">
        <p>{WEATHER_MESSAGES.HUMIDITY}: {weather.humidity}%</p>
        <p>{WEATHER_MESSAGES.WIND}: {weather.windSpeed} km/h</p>
        <p>{WEATHER_MESSAGES.UPDATED}: {weather.time}</p>
      </div>
    </section>
  );
}