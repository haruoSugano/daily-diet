import React from "react";
import { ArrowIcon, BackButton, ButtonTypeStyleProps, Container, PercentText, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    percent: number;
    text: string
    type?: ButtonTypeStyleProps;
}

export function Percent({ type = "PRIMARY", percent, text, ...rest}: Props) {
    return (
        <Container 
            type={type}
        >
            <BackButton
                {...rest}
            >
                <ArrowIcon 
                    type={type}
                />
            </BackButton>
            <PercentText>
                {percent}%
            </PercentText>
            <Text>
                {text}
            </Text>
        </Container>
    );
}
