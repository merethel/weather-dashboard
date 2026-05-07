import { WEATHER_UNITS } from "@/constants/units/weather.units";
import { formatForecastDay } from "@/utils/date.utils";

export default function ForecastCard({ day }: { day: any }) {
  return (
    <article key={day.date} className="forecast-day-card">
      <div className="forecast-temp-row">
        <span>{Math.round(day.minTemperature)} /</span>
        <strong>{Math.round(day.maxTemperature)}</strong>
        <span>{WEATHER_UNITS.TEMPERATURE}</span>
      </div>

      <div className="forecast-icon-area">
        {day.condition.imageUrl && (
          <img
            src={day.condition.imageUrl}
            alt={day.condition.description}
            className="forecast-big-icon"
          />
        )}
      </div>

      <p className="forecast-condition-label">{day.condition.description}</p>

      <div className="forecast-day-label">{formatForecastDay(day.date)}</div>
    </article>
  );
}
