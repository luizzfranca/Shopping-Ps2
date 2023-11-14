import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: #121214;
  
  
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TextPhoto = styled.Text`
  color: white;
`;

export const Content =  styled.View`
  width: 100%;
  padding: 10px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ScrollViewStyled = styled.ScrollView`
  flex: 1;
  width: 100%;
`;