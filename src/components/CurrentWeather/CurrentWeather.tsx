import { useWeatherProvider } from "../../context/WeatherContext";
import style from "./CurrentWeather.module.css";

export default function CurrentWeather() {
  const { currentWeather } = useWeatherProvider();

  return (
    <>
      <div>
        <img
          src={currentWeather?.current.condition.icon}
          alt={currentWeather?.current.condition.text}
        />
      </div>
      <div>{currentWeather?.current.condition.text}</div>
      <div className={style.temprature}>
        {currentWeather?.current.temp_c} &#176;C
      </div>
      <div>Humidity: {currentWeather?.current.humidity}%</div>
      <div>Speed of wind is {currentWeather?.current.wind_kph}k/h</div>
    </>
  );
}
