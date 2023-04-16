import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled.View <Props>`
    flex-direction: column;
    width: 90%;
    height: 17%;
    border-radius: 5px;
    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    margin: 5%;
`;

export const ArrowIcon = styled(ArrowUpRight).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  }))<Props>``;

export const BackButton = styled(TouchableOpacity)`
    margin-top: 5px;
    margin-right: 5px;
    align-self: flex-end;
`;

export const PercentText = styled.Text`
    ${({ theme }) => css`
        font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    `}

    margin: 0;
    align-self: center;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    `}

    align-self: center;
`;
