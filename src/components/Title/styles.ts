import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
    flex-direction: row;
    align-self: center;
    width: 100%;

    margin-left: 8%;
    margin-top: 10%;
`;

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_100
}))``;

export const BackButton = styled(TouchableOpacity)`
    margin-left: 10px;
`;

export const TitleText = styled.Text`
    align-self: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-left: 27%;
`;
