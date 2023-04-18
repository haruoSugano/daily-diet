import React, { useState } from "react";

import { Container, TextTitleButton } from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { AddButton } from "@components/AddButton";
import { DayList } from "@components/DayList";


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

            <DayList />
        </Container>
    );
}
