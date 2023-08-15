import { useWeatherProvider } from "../../context/WeatherContext";
import style from "./TitleForecast.module.css";

export default function TitleForecast() {
  const { chosenCity } = useWeatherProvider();
  return (
    <div>
      <div className={style.location}>
        {chosenCity && (
          <div>
            Weather forecast for{" "}
            <span className={style.city}>{chosenCity.city}</span>,{" "}
            {chosenCity.country}
          </div>
        )}
      </div>
    </div>
  );
}
