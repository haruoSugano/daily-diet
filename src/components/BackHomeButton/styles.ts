import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const HomeButton = styled(TouchableOpacity)`
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
