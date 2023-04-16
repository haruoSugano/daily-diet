import React from "react";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Container, TextTitleButton } from "./styles";
import { AddButton } from "@components/AddButton";

export function Home() {
    return (
        <Container>
            <Header />

            <Percent 
                percent={90.86}
                text="das refeições dentro da dieta"
            />

            <TextTitleButton>
                Refeições
            </TextTitleButton>

            <AddButton 
                title="Nova refeição"
            />
        </Container>
    );
}
