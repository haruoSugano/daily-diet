import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
    align-self: center;
    width: 90%;
`;

export const TextTitleButton = styled.Text`
    margin-bottom: 2px;
`;
