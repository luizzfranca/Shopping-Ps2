import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`

    flex: 1;

    min-height: 56px;
    max-height: 56px;

    width: 100%;
    
    margin-bottom: 15px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    background-color: ${theme.COLORS.GRAY_200};
    font-size: 15px;
  `};

  border-radius: 6px;
  padding: 16px;
`;
