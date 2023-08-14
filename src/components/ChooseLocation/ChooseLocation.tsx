import { useEffect, useState } from "react";
import { ICities, ICountry } from "./chooseLocation.interface";
import { useWeatherProvider } from "../../context/WeatherContext";
import style from "./ChooseLocation.module.css";

export default function ChooseLocation() {
  const [city, setCity] = useState<ICities[] | null>(null);
  const [country, setCountry] = useState<ICountry[] | null>(null);
  const [chosenCountry, setChosenCountry] = useState("");
  const { handleCity } = useWeatherProvider();

  useEffect(() => {
    chosenCountry &&
      fetch(
        `https://api.api-ninjas.com/v1/city?country=${chosenCountry}&limit=30`,
        {
          headers: { "X-Api-Key": "b+41EmgGkxiHHxZ90A+35g==hbnQIUhJz7xE1DO8" },
        }
      )
        .then((res) => res.json())
        .then((data: ICities[]) => setCity(data));
  }, [chosenCountry]);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/country?min_area=1000&limit=30", {
      headers: { "X-Api-Key": "b+41EmgGkxiHHxZ90A+35g==hbnQIUhJz7xE1DO8" },
    })
      .then((res) => res.json())
      .then((data: ICountry[]) => setCountry(data));
  }, []);

  return (
    <div className={style.wrapper}>
      <form className={style.inputField}>
        <select onChange={(e) => setChosenCountry(e.target.value)}>
          {country?.map((el) => {
            return (
              <option key={el.iso2} value={el.iso2}>
                {el.name}
              </option>
            );
          })}
        </select>
      </form>
      <form className={style.inputField}>
        <select
          disabled={!chosenCountry}
          onChange={(e) => handleCity(e.target.value)}
        >
          {city?.map((el) => {
            return (
              <option key={el.latitude} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
