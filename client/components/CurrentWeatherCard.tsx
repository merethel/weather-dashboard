import { WEATHER_UNITS } from "@/constants/units/weather.units";
import { WEATHER_MESSAGES } from "@/constants/messages/weather.messages";
import type { CurrentWeather } from "@/types/weather.type";
import { formatDateTime } from "@/utils/date.utils";

type Props = {
  weather: CurrentWeather;
  location: string;
  assessment?: string;
};

export function CurrentWeatherCard({ weather, location, assessment }: Props) {
  return (
    <section className="weather-card">
      <div className="weather-card-glow" />

      <div className="weather-card-header">
        <div>
          <p className="weather-eyebrow">{WEATHER_MESSAGES.CURRENT_WEATHER}</p>
          <h2 className="weather-location">{location}</h2>
        </div>

        {weather.condition.imageUrl && (
          <img
            src={weather.condition.imageUrl}
            alt={weather.condition.description}
            className="weather-icon"
          />
        )}
      </div>

      <div className="weather-main">
        <p className="weather-temperature">
          {Math.round(weather.temperature)}
          <span>{WEATHER_UNITS.TEMPERATURE}</span>
        </p>

        <p className="weather-condition">{weather.condition.description}</p>
      </div>

      <div className="weather-details-grid">
        <div className="weather-detail-card">
          <span className="weather-detail-label">
            {WEATHER_MESSAGES.HUMIDITY}
          </span>
          <strong>
            {weather.humidity}
            {WEATHER_UNITS.HUMIDITY}
          </strong>
        </div>

        <div className="weather-detail-card">
          <span className="weather-detail-label">{WEATHER_MESSAGES.WIND}</span>
          <strong>
            {Math.round(weather.windSpeed)} {WEATHER_UNITS.WIND_SPEED}
          </strong>
        </div>
      </div>

      {assessment && (
        <div className="weather-assessment">
          <p>{assessment}</p>
        </div>
      )}
    </section>
  );
}
