import { WEATHER_MESSAGES } from "@/constants/messages/weather.messages";
import "../styles/weather-status.css";

export function WeatherLoading() {
  return (
    <div className="weather-status-card">
      <div className="weather-loader" />

      <h2 className="weather-status-title">{WEATHER_MESSAGES.LOADING}</h2>

      <p className="weather-status-subtitle">
        {WEATHER_MESSAGES.FETCHING_WEATHER_DATA}
      </p>
    </div>
  );
}
