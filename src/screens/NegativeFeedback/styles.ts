import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

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

export const TextFeedback = styled.Text`
    text-align: center;
    width: 95%;

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
