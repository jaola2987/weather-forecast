import { useEffect, useState } from "react";
import { ICities, ICountry } from "./chooseLocation.interface";
import { useWeatherProvider } from "../../context/WeatherContext";
import style from "./ChooseLocation.module.css";

export default function ChooseLocation() {
  const [city, setCity] = useState<ICities[] | null>(null);
  const [country, setCountry] = useState<ICountry[] | null>(null);

  const { handleCity, chosenCountry, handlCountry } = useWeatherProvider();

  useEffect(() => {
    chosenCountry?.iso2 &&
      fetch(
        `https://api.api-ninjas.com/v1/city?country=${chosenCountry.iso2}&limit=30`,
        {
          headers: { "X-Api-Key": "b+41EmgGkxiHHxZ90A+35g==hbnQIUhJz7xE1DO8" },
        }
      )
        .then((res) => res.json())
        .then((data: ICities[]) => setCity(data))
        .catch((error) => new Error(error));
  }, [chosenCountry]);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/country?min_area=1000&limit=30", {
      headers: { "X-Api-Key": "b+41EmgGkxiHHxZ90A+35g==hbnQIUhJz7xE1DO8" },
    })
      .then((res) => res.json())
      .then((data: ICountry[]) => setCountry(data))
      .catch((error) => new Error(error));
  }, []);

  return (
    <div>
      <div className={style.wrapper}>
        <form className={style.inputField}>
          <select
            onChange={(e) => {
              const eventvalue = e.target.value.split(",");
              handlCountry({
                iso2: eventvalue[0],
                name: eventvalue[1],
              });
            }}
          >
            {country?.map((el) => {
              return (
                <option key={el.iso2} value={[el.iso2, el.name]}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </form>
        <form className={style.inputField}>
          <select
            disabled={!chosenCountry?.iso2}
            onChange={(e) => handleCity(e.target.value)}
          >
            {city?.map((el, index) => {
              return (
                <option key={index} value={el.name}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
}
