import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

export type TypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: TypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 50px;
    
    border-radius: 8px;
    border: 1px solid;
    border-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

    padding: 4%;
    margin-top: 8px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE,
}))`
    margin-right: 3%;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.GRAY_100,
}))`
    margin-right: 3%;
`;

export const Title = styled.Text<Props>`
    color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`;
