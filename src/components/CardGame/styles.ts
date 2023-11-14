import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding: 10px;
  
`;

export const ImageGame = styled.Image`
  height: 100px;
  width: 100px;

  border-radius: 90px;
  
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
