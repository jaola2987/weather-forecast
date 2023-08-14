import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import style from "./App.module.css";
import "normalize.css";

function App() {
  return (
    <div className={style.wrapper}>
      <ChooseLocation />
      <CurrentWeather />
    </div>
  );
}

export default App;
