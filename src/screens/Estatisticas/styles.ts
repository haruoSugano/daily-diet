import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;

export const Content = styled.View`
    height: 100%;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    margin-top: 10%;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SubTitle = styled.Text`
    align-self: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-top: 9%;
    margin-bottom: 3%;
`;

export const InfoContainer = styled.View`
    flex: 1;
    flex-direction: row;

    justify-content: center;
`;
