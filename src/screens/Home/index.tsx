import React, { useState } from "react";

import { Container, Content, TextTitleButton } from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { NewEditAddButton } from "@components/NewEditAddButton";
import { DayList } from "@components/DayList";


export function Home() {

    return (
        <Container>
            <Content>
                <Header />

                <Percent
                    percent={90.86}
                    text="das refeições dentro da dieta"
                />

                <TextTitleButton>
                    Refeições
                </TextTitleButton>

                <NewEditAddButton
                    title="Nova refeição"
                />

                <DayList />
            </Content>
        </Container>
    );
}
