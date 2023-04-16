import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: center;

    width: 90%;

    min-height: 56px;
    max-height: 60px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 4px;

    margin-left: 5%;
    margin-top: 1%;
    padding: 4.5%;
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE,
}))`
    margin-right: 2%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
