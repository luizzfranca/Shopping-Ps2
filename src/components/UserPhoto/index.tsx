import { ImageProps } from "react-native";
import { Container } from "./styles";

type Props = ImageProps & {};

export function UserPhoto({ ...rest }: Props) {
  return <Container  {...rest} />;
}
