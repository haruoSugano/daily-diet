import React from "react";
import { AddIcon, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    type?: string;
}

export function NewEditAddButton({ title, type = "PRIMARY", ...rest }: Props) {
    return (
        <Container
            {...rest}
        >
            {
                type === "PRIMARY" ? <AddIcon /> : null
            }

            <Title>
                {title}
            </Title>
        </Container>
    );
}
