import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type TypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: TypeStyleProps
}

export const Container = styled.View`
    margin-left: 1%;
    padding: 4.5%;
`;

export const TitleSectionList = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-top: 5%;
`;

export const ContainerSectionList = styled.View`
    flex-direction: row;
    align-items: center;

    height: 49px;

    margin-top: 2%;

    border-radius: 4px;
    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const HairLine = styled.View`
    width: 2px;
    height: 15px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    margin-left: 1%;
`;

export const TextSectionList = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${type === "PRIMARY" ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    `}

    width: ${({ type }) => type === "PRIMARY" ? 45  :  270}px;
    height: 20px;

    margin-left: 2%;
`;

export const Status = styled(TouchableOpacity)<Props>`
    width: 13px;
    height: 13px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 100px;
`;
