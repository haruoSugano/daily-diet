import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;
