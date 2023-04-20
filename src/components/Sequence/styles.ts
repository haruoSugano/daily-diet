import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-self: center;

    height: 13%;
    width: 85%;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    margin-top: 2.5%;
`;

export const Total = styled.Text`
    align-self: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-top: 4%;
`;

export const Description = styled.Text`
    align-self: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-top: 3%;
`;
