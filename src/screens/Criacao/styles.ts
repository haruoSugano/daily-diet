import styled from "styled-components/native";

export type TypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

export const Container = styled.View`
    flex-direction: column;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled.View`
    width: 100%;
    height: 100%;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    margin-top: 8%;
    padding: 8%;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
