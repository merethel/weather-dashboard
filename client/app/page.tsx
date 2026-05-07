"use client";

import { useEffect, useState } from "react";
import type { WeatherData } from "@/types/weather.type";
import { CurrentWeatherCard } from "@/components/CurrentWeatherCard";
import { WeatherLoading } from "@/components/WeatherLoading";
import { WeatherError } from "@/components/WeatherError";
import { ThemeToggle } from "@/components/ThemeToggle";
import "@/styles/weather.css";
import { getWeatherData } from "@/services/weather.service";
import { WeatherForecast } from "@/components/WeatherForecast";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [days, setDays] = useState<number>(7);

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await getWeatherData({ days });
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
          <CurrentWeatherCard
            weather={weather.current}
            location={weather.location}
          />
          <WeatherForecast forecast={weather.forecast} />
        </div>
      </div>
    </main>
  );
}
