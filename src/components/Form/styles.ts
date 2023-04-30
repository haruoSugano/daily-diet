import styled, { css } from "styled-components/native";

import { TextInput, TouchableOpacity } from "react-native";

export type TypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
    type?: TypeStyleProps
}

export const Container = styled.View`
    flex-direction: column;
`;

export const SubText = styled.Text`
    width: 55%;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-bottom: 2px;
`;

export const NameInput = styled(TextInput)`
    width: 100%;
    height: 46px;

    margin-bottom: 8%;
    padding: 15px;

    border: 1px solid;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const InputDescription = styled(TextInput)`
    width: 100%;
    height: 130px;
    text-align-vertical: top;

    margin-bottom: 8%;
    padding: 15px;

    border: 1px solid;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const SubContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InputDateHour = styled(TextInput)`
    width: 160px;
    height: 46px;
    text-align: center;

    margin-bottom: 8%;

    border: 1px solid;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const AnswerButton = styled(TouchableOpacity)<Props>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 168px;
    height: 48px;

    border-radius: 4px;
    border: 1px;

    ${({ theme, type }) => {
    switch (type) {
      case "PRIMARY":
        return css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
          border-color: ${theme.COLORS.GREEN_DARK};
        `;
      case "SECONDARY":
        return css`
          background-color: ${theme.COLORS.RED_LIGHT};
          border-color: ${theme.COLORS.RED_DARK};
        `;
      case "DEFAULT":
        return css`
          background-color: ${theme.COLORS.GRAY_600};
          border-color: ${theme.COLORS.GRAY_600};
        `;
    }
  }}
    
    margin-top: 4px;
    padding-left: 12%;
`;

export const Option = styled.View<Props>`
    width: 8px;
    height: 8px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 100px;

    margin-right: 6px;
`;

export const FooterButton = styled.View`
  margin-top: 20%;
`;
