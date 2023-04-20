import styled, { css } from "styled-components/native";

export type InfoTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: InfoTypeStyleProps;
};

export const Container = styled.View<Props>`
    height: 23%;
    width: 41%;

    border-radius: 8px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    
    margin: 1.5%;
    margin-top: 3%;

    padding: 5px;
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
    text-align: center;
    
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-top: 4%;
`;
