import styled, { css } from "styled-components/native";

export type TypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
    type: TypeStyleProps
}

export const Container = styled.View`
    flex-direction: column;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
    flex-direction: column;
    width: 100%;
    height: 100%;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    margin-top: 8%;
    padding: 8%;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-top: 5px;
`;

export const DescriptionText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}

    margin-top: 4px;
`;

export const DateHourTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-top: 20px;
`;

export const DateHourDescription = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}

    margin-top: 12px;
`;

export const TypeRefeicao = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: flex-start;

    width: 150px;
    height: 28px;

    border-radius: 25px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    
    margin-top: 22px;
    padding-left: 15px;
`;

export const Option = styled.View<Props>`
    width: 8px;
    height: 8px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 100px;

    margin-right: 6px;
`;

export const TypeRefeicaoText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const ContainerButton = styled.View`
    justify-content: flex-end;
    
    height: 57%;
`;
