import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";

import { Container, ContainerList, ContainerSectionList, Content, HairLine, Status, TextSectionList, TextTitleButton, TitleSectionList } from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { NewEditAddButton } from "@components/NewEditAddButton";
import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

type Refeicao = RefeicaoStorageDTO;

const teste = [
    {
        title: "12.08.22",
        data: [
            {
                date: "12/08/22",
                hour: "20:00",
                name: "X-tudo",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: false
            },
            {
                date: "12/08/22",
                hour: "16:00",
                name: "Whey protein com leite",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: true
            },
            {
                date: "12/08/22",
                hour: "12:30",
                name: "Salada cesar com frongo cozido",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: true
            },
            {
                date: "12/08/22",
                hour: "09:30",
                name: "Vitamina de banana com leite",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: true
            },
        ]
    },
    {
        title: "08.08.22",
        data: [
            {
                date: "12/08/22",
                hour: "20:00",
                name: "X-tudo",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: false
            },
            {
                date: "12/08/22",
                hour: "16:00",
                name: "Whey protein com leite",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: true
            },
            {
                date: "12/08/22",
                hour: "12:30",
                name: "Salada cesar com frongo cozido",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: true
            },
            {
                date: "12/08/22",
                hour: "09:30",
                name: "Vitamina de banana com leite",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                healthyFood: true
            },
        ]
    }
];


export function Home() {

    const navigation = useNavigation();

    function handleOpenEstatistica() {
        navigation.navigate("estatistica");
    }

    function handleOpenNovaRefeicao() {
        navigation.navigate("criacao");
    }

    function handleOpenRefeicao(refeicao: Refeicao) {
        navigation.navigate("refeicoes", { refeicao });
    }

    return (
        <Container>
            <Content>
                <Header />

                <Percent
                    percent={90.86}
                    text="das refeições dentro da dieta"
                    onPress={handleOpenEstatistica}
                />

                <TextTitleButton>
                    Refeições
                </TextTitleButton>

                <NewEditAddButton
                    title="Nova refeição"
                    onPress={handleOpenNovaRefeicao}
                />

                <ContainerList>
                    <SectionList
                        style={{ maxHeight: 350 }}
                        showsVerticalScrollIndicator={false}
                        sections={teste}
                        keyExtractor={(item) => item.name}
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
                                    {item.name}
                                </TextSectionList>

                                <Status
                                    onPress={() => handleOpenRefeicao(item)}
                                    type={ item.healthyFood ? "PRIMARY" : "SECONDARY"}
                                />
                            </ContainerSectionList>
                        }
                    />

                </ContainerList>
            </Content>
        </Container>
    );
}
