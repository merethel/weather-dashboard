import type { WeatherForecast as WeatherForecastType } from "@/types/weather.type";
import { WEATHER_UNITS } from "@/constants/units/weather.units";
import { formatForecastDay } from "@/utils/date.utils";
import { WEATHER_MESSAGES } from "@/constants/messages/weather.messages";
import ForecastCard from "./ForecastCard";

type Props = {
  forecast: WeatherForecastType;
};

export function WeatherForecast({ forecast }: Props) {
  return (
    <section className="forecast-panel">
      <div className="forecast-panel-header">
        <p className="weather-eyebrow">{WEATHER_MESSAGES.FORECAST}</p>
        <h2>
          {WEATHER_MESSAGES.NEXT_DAYS.replace(
            "{days}",
            forecast.days.length.toString(),
          )}
        </h2>
      </div>

      <div className="forecast-strip">
        {forecast.days.map((day) => (
          <ForecastCard key={day.date} day={day} />
        ))}
      </div>
    </section>
  );
}
