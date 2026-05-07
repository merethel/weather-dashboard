export const WEATHER_ERROR_CODES = {
  FETCH_FAILED: "WEATHER_FETCH_FAILED",
} as const;

// type checker to ensure all error codes are valid
export type WeatherErrorCode =
  (typeof WEATHER_ERROR_CODES)[keyof typeof WEATHER_ERROR_CODES];
