import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const PhotoUser = styled.Image`
    width: 40px;
    height: 40px;
`;

export const BackButton = styled(TouchableOpacity)`
    flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>``;
