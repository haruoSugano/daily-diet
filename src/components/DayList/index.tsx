import React from "react";
import { Container, ContainerSectionList, HairLine, Status, TextSectionList, TitleSectionList } from "./styles";
import { SectionList } from "react-native";

const teste = [
    {
        title: "12.08.22",
        data: [
            {
                hour: "20:00",
                refeicao: "X-tudo"
            },
            {
                hour: "16:00",
                refeicao: "Whey protein com leite"
            },
            {
                hour: "12:30",
                refeicao: "Salada cesar com frongo cozido"
            },
            {
                hour: "09:30",
                refeicao: "Vitamina de banana com leite"
            },
        ]
    },
    {
        title: "08.08.22",
        data: [
            {
                hour: "20:00",
                refeicao: "X-tudo"
            },
            {
                hour: "16:00",
                refeicao: "Whey protein com leite"
            },
            {
                hour: "12:30",
                refeicao: "Salada cesar com frongo cozido"
            },
            {
                hour: "09:30",
                refeicao: "Vitamina de banana com leite"
            },
        ]
    }
];

export function DayList() {
    return (
        <Container>
            <SectionList
                sections={teste}
                keyExtractor={(item) => item.refeicao}
                renderSectionHeader={({ section: { title } }) => (
                    <TitleSectionList>{title}</TitleSectionList>
                )}
                renderItem={({ item }) =>
                    <ContainerSectionList>
                        <TextSectionList
                            type="PRIMARY"
                        >
                            {item.hour}
                        </TextSectionList>

                        <HairLine />

                        <TextSectionList
                            type="SECONDARY"
                        >
                            {item.refeicao}
                        </TextSectionList>

                        <Status 
                            type="PRIMARY"
                        />
                    </ContainerSectionList>
                }
            />
        </Container>
    );
}