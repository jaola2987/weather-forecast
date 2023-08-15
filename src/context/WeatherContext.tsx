import {
  FC,
  useEffect,
  useMemo,
  useState,
  createContext,
  PropsWithChildren,
  useContext,
  useCallback,
} from "react";
import {
  ICity,
  IWeatherContextProps,
  RootObject,
} from "./weatherContext.interface";
import { ICountry } from "../components/ChooseLocation/chooseLocation.interface";

const WeatherContext = createContext({} as IWeatherContextProps);

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<
    RootObject | null | undefined
  >(undefined);
  const [chosenCity, setChosenCity] = useState<ICity>();
  const [chosenCountry, setChosenCountry] = useState("");
  const [countryFullName, setCountryFullName] = useState("");

  useEffect(() => {
    chosenCity &&
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=257e679062eb4454969143314231408&q=${chosenCity.city}`
      )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return null;
        })
        .then((result: RootObject) => setCurrentWeather(result))
        .catch((error) => new Error(error));
  }, [chosenCity]);

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/country?name=${chosenCountry}`, {
      headers: { "X-Api-Key": "b+41EmgGkxiHHxZ90A+35g==hbnQIUhJz7xE1DO8" },
    })
      .then((res) => res.json())
      .then((result: ICountry[]) => setCountryFullName(result[0].name))
      .catch((error) => new Error(error));
  }, [chosenCountry]);

  const handleCity = useCallback(
    (e: string) => {
      setChosenCity({ city: e, country: countryFullName });
    },
    [countryFullName]
  );

  const handlCountry = useCallback((e: string) => {
    setChosenCountry(e);
  }, []);

  const provideValue = useMemo(
    () => ({
      currentWeather,
      chosenCity,
      handleCity,
      chosenCountry,
      handlCountry,
      countryFullName,
    }),
    [
      currentWeather,
      chosenCity,
      handleCity,
      chosenCountry,
      handlCountry,
      countryFullName,
    ]
  );

  return (
    <WeatherContext.Provider value={provideValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export function useWeatherProvider() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
