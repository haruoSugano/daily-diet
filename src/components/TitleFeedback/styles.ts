import styled, { css } from "styled-components/native";

export type TextTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type?: TextTypeStyleProps;
}

export const Container = styled.View``;

export const TitleFeedbackText = styled.Text<Props>`
    text-align: center;
    width: 100%;

    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
`;
