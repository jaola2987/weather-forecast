import ChooseLocation from "./components/ChooseLocation/ChooseLocation";
import BodyForecast from "./components/BodyForecast/BodyForecast";
import style from "./App.module.css";
import "normalize.css";
import TitleForecast from "./components/TitleForecast/TitleForecast";

function App() {
  return (
    <div className={style.wrapper}>
      <ChooseLocation />
      <TitleForecast />
      <BodyForecast />
    </div>
  );
}

export default App;
