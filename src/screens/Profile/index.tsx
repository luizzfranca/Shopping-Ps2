import {
  Container,
  BackgroundImage,
  TextPhoto,
  Content,
  Title,
  ScrollViewStyled,
} from "./styles";

import { UserPhoto } from "../../components/UserPhoto";

import consoleLogo from "../../assets/console.png";

import userLogo from "../../assets/profile.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ScrollView, KeyboardAvoidingView } from "react-native";

export function Profile() {
  return (
    <Container>
      <BackgroundImage source={consoleLogo} alt="console" resizeMode="cover" />

      <UserPhoto source={userLogo} />
      <TextPhoto>Alterar foto</TextPhoto>
      <ScrollViewStyled>
        <Content>
          <Input placeholder="Luiz Leitão" editable={false} />
          <Input placeholder="luizzfranca@gmail.com" editable={false} />

          <Title>Alterar senha</Title>

          <Input placeholder="Senha antiga" secureTextEntry />
          <Input placeholder="Nova senha" secureTextEntry />
          <Input placeholder="Confirme a nova senha" secureTextEntry />
          <Button title="Atualizar" type="PRIMARY" />
        </Content>
      </ScrollViewStyled>
    </Container>
  );
}
