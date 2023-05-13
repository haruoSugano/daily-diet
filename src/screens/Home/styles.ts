import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type TypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: TypeStyleProps
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
    align-self: center;
    width: 90%;
`;

export const TextTitleButton = styled.Text`
    margin-bottom: 2px;
`;

export const ContainerList = styled.View`
    width: 100%;

    margin-top: 5%;
`;

export const TitleSectionList = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-top: 10px;
`;

export const ContainerSectionList = styled.View`
    flex-direction: row;
    align-items: center;

    height: 49px;

    margin-top: 2.5%;

    border-radius: 4px;
    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const HairLine = styled.View`
    width: 2px;
    height: 15px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    margin-left: 5px;
`;

export const TextSectionList = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${type === "PRIMARY" ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    `}

    width: ${({ type }) => type === "PRIMARY" ? 15  :  65}%;
    height: 20px;

    margin-left: 15px;
`;

export const Status = styled.TouchableOpacity<Props>`
    width: 13px;
    height: 13px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 100px;
`;
