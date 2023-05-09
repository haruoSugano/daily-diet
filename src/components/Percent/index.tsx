import React from "react";
import { ArrowIcon, BackButton, ButtonTypeStyleProps, Container } from "./styles";
import { PercentText } from "@components/PercentText";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    percent: number;
    text: string
    type?: ButtonTypeStyleProps;
}

export function Percent({ type = "PRIMARY", percent, text, ...rest}: Props) {
    return (
        <Container 
            type={percent > 50 ? "PRIMARY" : "SECONDARY"}
        >
            <BackButton
                {...rest}
            >
                <ArrowIcon 
                    type={percent > 50 ? "PRIMARY" : "SECONDARY"}
                />
            </BackButton>
            <PercentText 
                percent={percent}
                text={text}
            />
        </Container>
    );
}
