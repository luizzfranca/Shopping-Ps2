import { CardGamesImage } from "../../components/CardGamesImage";
import { Container, Content, Text } from "./styles";

import imageLogo from "../../assets/w5.png";
import { Button } from "../../components/Button";
import { ScrollView } from "react-native";

export function Description() {
  return (
    <Container>
      <Content>
        <CardGamesImage
          source={imageLogo}
          resizeMode="contain"
          alt="image"
          style={{ width: 400, height: 400 }}
        />
        <ScrollView>
          <Text>
            No mundo pós-apocalíptico de Horizon: Zero Dawn, conhecemos Aloy,
            uma jovem exilada ainda bebê, após nascer em uma caverna localizada
            na tribo Nora sem que ninguém soubesse quem era sua mãe. Aloy é
            levada até Rost, um exilado que a acolhe e cria como se fosse sua
            filha, apesar de sempre ter deixado claro que não era seu pai. Aloy
            cresce sonhando em disputar uma competição, chamada Provação onde o
            vencedor é declarado um guerreiro da tribo Nora, o que daria fim à
            sua vida de preconceitos por ser uma exilada. Aloy vence, porém,
            durante a competição, a tribo Nora é atacada por guerreiros da seita
            Eclipse e Rost acaba assassinado. Aloy, então, se junta a outros
            guerreiros da tribo e parte para descobrir o que motivou o ataque e
            também, saber mais sobre as suas origens.
          </Text>
          <Button title="Comprar" type="PRIMARY" />
        </ScrollView>
      </Content>
    </Container>
  );
}
