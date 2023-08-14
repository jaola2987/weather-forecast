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
import { IWeatherContextProps, RootObject } from "./weatherContext.interface";

const WeatherContext = createContext({} as IWeatherContextProps);

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<RootObject | null>(null);
  const [chosenCity, setChosenCity] = useState("");

  useEffect(() => {
    chosenCity &&
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=257e679062eb4454969143314231408&q=${chosenCity}`
      )
        .then((res) => res.json())
        .then((result: RootObject) => setCurrentWeather(result))
        .catch((error) => new Error(error));
  }, [chosenCity]);

  const handleCity = useCallback((e: string) => {
    setChosenCity(e);
  }, []);

  const provideValue = useMemo(
    () => ({ currentWeather, chosenCity, handleCity }),
    [currentWeather, chosenCity, handleCity]
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
