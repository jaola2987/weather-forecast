import { useWeatherProvider } from "../../context/WeatherContext";
import style from "./TitleForecast.module.css";

export default function TitleForecast() {
  const { chosenCity, chosenCountry } = useWeatherProvider();

  return (
    <div>
      <div className={style.location}>
        {chosenCity && (
          <div>
            Weather forecast in <span className={style.city}>{chosenCity}</span>
            , {chosenCountry}
          </div>
        )}
      </div>
    </div>
  );
}
