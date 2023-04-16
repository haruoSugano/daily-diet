import React from "react";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <Percent 
                percent={90.86}
                text="das refeições dentro da dieta"
            />
        </Container>
    );
}
