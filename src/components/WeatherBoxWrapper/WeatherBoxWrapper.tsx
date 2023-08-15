import style from "./WeatherBoxWrapper.module.css";

export default function WeatherBoxWrapper(Content: React.ComponentType) {
  return () => {
    return (
      <div className={style.weatherWrapper}>
        <Content />
      </div>
    );
  };
}
