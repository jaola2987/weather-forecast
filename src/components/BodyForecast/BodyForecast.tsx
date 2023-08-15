import { useWeatherProvider } from "../../context/WeatherContext";
import WeatherBoxWrapper from "../WeatherBoxWrapper/WeatherBoxWrapper";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const WeatherAvailable = WeatherBoxWrapper(CurrentWeather);
const WeatherNotAvailable = WeatherBoxWrapper(ErrorMessage);

export default function BodyForecast() {
  const { currentWeather } = useWeatherProvider();
  return (
    <>
      {currentWeather ? (
        <WeatherAvailable />
      ) : currentWeather === null ? (
        <WeatherNotAvailable
          text={"Weather is not available for this location"}
        />
      ) : (
        <WeatherNotAvailable text={"Choose location"} />
      )}
    </>
  );
}
