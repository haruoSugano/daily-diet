import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled.View <Props>`
    flex-direction: column;
    align-self: center;
    width: 100%;
    height: 125px;
    border-radius: 5px;
    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    margin: 5%;
`;

export const ArrowIcon = styled(ArrowUpRight).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  }))<Props>``;

export const BackButton = styled(TouchableOpacity)`
    margin-top: 5px;
    margin-right: 5px;
    align-self: flex-end;
`;
