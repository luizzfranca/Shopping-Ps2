import { Container, ImageGame, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    imageSource: any;
}

export function CardGame({title, imageSource, ...rest}: Props){
    return(
        <Container>
            <ImageGame source={imageSource}  />
            <Title>{title}</Title>
        </Container>
    );
}