import React from "react";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <Percent />
        </Container>
    );
}
