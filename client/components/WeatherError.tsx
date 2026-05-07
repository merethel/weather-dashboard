import { WEATHER_ERROR_MESSAGES } from "@/constants/errors/weather.errors";
import "../styles/weather-status.css";

export function WeatherError() {
  return (
    <div className="weather-status-card weather-status-error">
      <div className="weather-error-icon">⚠</div>

      <h2 className="weather-status-title">{WEATHER_ERROR_MESSAGES.TITLE}</h2>

      <p className="weather-status-subtitle">
        {WEATHER_ERROR_MESSAGES.WEATHER_FETCH_FAILED}
      </p>
    </div>
  );
}
