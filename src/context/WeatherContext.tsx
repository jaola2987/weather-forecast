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
  IChosenCountry,
  ICity,
  IWeatherContextProps,
  RootObject,
} from "./weatherContext.interface";

const WeatherContext = createContext({} as IWeatherContextProps);

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<
    RootObject | null | undefined
  >(undefined);
  const [chosenCity, setChosenCity] = useState<ICity>();
  const [chosenCountry, setChosenCountry] = useState<IChosenCountry>();

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

  const handleCity = useCallback(
    (e: string) => {
      setChosenCity({ city: e, country: chosenCountry?.name });
    },
    [chosenCountry]
  );

  const handlCountry = useCallback((e: IChosenCountry) => {
    setChosenCountry(e);
  }, []);

  const provideValue = useMemo(
    () => ({
      currentWeather,
      chosenCity,
      handleCity,
      chosenCountry,
      handlCountry,
    }),
    [currentWeather, chosenCity, handleCity, chosenCountry, handlCountry]
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
