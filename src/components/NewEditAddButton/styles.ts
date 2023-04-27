import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type?: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 50px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;

    padding: 4%;
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
