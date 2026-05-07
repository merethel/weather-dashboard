"use client";

import { useEffect, useState } from "react";
import type { CurrentWeather } from "@/types/weather.type";
import { getCurrentWeather } from "@/services/weather.service";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard";
import { WeatherLoading } from "@/components/WeatherLoading";
import { WeatherError } from "@/components/WeatherError";
import { WEATHER_MESSAGES } from "@/messages/weather.messages";

export default function Home() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await getCurrentWeather();
        setWeather(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadWeather();
  }, []);

  if (isLoading) return <WeatherLoading />;
  if (hasError || !weather) return <WeatherError />;

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-6 text-3xl font-bold">{WEATHER_MESSAGES.TITLE}</h1>
      <CurrentWeatherCard weather={weather} />
    </main>
  );
}