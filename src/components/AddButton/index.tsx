import React from "react";
import { AddIcon, Container, Title } from "./styles";

type Props = {
    title: string;
    type?: string;
}

export function AddButton({ title, type = "PRIMARY" }: Props) {
    return (
        <Container>
            {
                type === "PRIMARY" ? <AddIcon /> : null
            }

            <Title>
                {title}
            </Title>
        </Container>
    );
}
