import { useWeatherProvider } from "../../context/WeatherContext";
import WeatherBoxWrapper from "../WeatherBoxWrapper/WeatherBoxWrapper";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const WeatherAvailable = WeatherBoxWrapper(CurrentWeather);
const WeatherNotAvailable = WeatherBoxWrapper(ErrorMessage);

export default function BodyForecast() {
  const { currentWeather } = useWeatherProvider();
  return (
    <div>{currentWeather ? <WeatherAvailable /> : <WeatherNotAvailable />}</div>
  );
}
