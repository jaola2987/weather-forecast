import { IErrorProps } from "./errorMessage.interface";

export default function ErrorMessage(props: IErrorProps) {
  return <div>{props.text}</div>;
}
