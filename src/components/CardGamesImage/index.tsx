import { Container} from "./styles";
import { ImageProps } from "react-native"; 

type Props = ImageProps & {};

export function CardGamesImage({...rest}: Props){
  return(

    <Container {...rest}/>        
  );  
}