import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type TextTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: TextTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
    flex-direction: column;
    justify-content: center;
    align-self: center;

    width: 90%;
    height: 100%;
`;

export const TitleFeedback = styled.Text<Props>`
    text-align: center;
    width: 100%;

    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${ type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
`;

export const TextFeedback = styled.Text`
    text-align: center;
    width: 100%;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const TextBold = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const Illustration = styled.Image`
    align-self: center;

    width: 224px;
    height: 288px;

    margin-top: 10%;
`;

export const BackHomeButton = styled(TouchableOpacity)`
    align-self: center;
    
    width: 54%;
    height: 50px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;

    margin-top: 25px;
    padding: 4%;
`;

export const TitleButton = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
`;
