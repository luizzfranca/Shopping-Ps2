import { Container, BackgroundLogo, InputContainer } from "./styles";

import logo from "../../assets/p2.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <BackgroundLogo source={logo} alt="imagem de fundo"  />

      <InputContainer>
        <Input  placeholder="E-mail"  />
        <Input placeholder="Senha" />
      <Button title="Entrar" type="SECONDARY"/>
      </InputContainer>

    </Container>
  );
}
