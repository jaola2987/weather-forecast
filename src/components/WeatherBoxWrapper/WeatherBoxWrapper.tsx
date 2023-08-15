import { IErrorProps } from "../ErrorMessage/errorMessage.interface";
import style from "./WeatherBoxWrapper.module.css";

export default function WeatherBoxWrapper(
  Content: React.ComponentType<IErrorProps>
) {
  return (originalProps: IErrorProps) => {
    return (
      <div className={style.weatherWrapper}>
        <Content {...originalProps} />
      </div>
    );
  };
}
