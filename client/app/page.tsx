"use client";

import { useEffect, useState } from "react";
import type { CurrentWeather } from "@/types/weather.type";
import { getCurrentWeather } from "@/services/weather.service";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard";
import { WeatherLoading } from "@/components/WeatherLoading";
import { WeatherError } from "@/components/WeatherError";
import { ThemeToggle } from "@/components/ThemeToggle";
import "@/styles/weather.css";

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
    <main>
      <ThemeToggle />
      <div className="weather-page">
        <div className="weather-container">
          <CurrentWeatherCard weather={weather} />
        </div>
      </div>
    </main>
  );
}
