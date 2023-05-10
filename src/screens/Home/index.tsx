import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert, SectionList } from "react-native";

import {
    Container, ContainerList, ContainerSectionList, Content, HairLine, Status,
    TextSectionList, TextTitleButton, TitleSectionList
} from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { NewEditAddButton } from "@components/NewEditAddButton";
import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";
import { refeicoesGetAll } from "@storage/refeicao/refeicoesGetAll";
import { FormatData } from "@utils/FormatData";
import { CalculatePercent } from "@utils/Functions";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";

type Refeicao = RefeicaoStorageDTO;

type SectionListData = {
    title: string;
    data: Refeicao[];
}

export function Home() {
    const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
    const [refeicoesDataSectionList, setRefeicoesDataSectionList] = useState<SectionListData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const percentage = CalculatePercent(refeicoes);
    const navigation = useNavigation();

    function handleOpenEstatistica() {
        navigation.navigate("estatistica");
    }

    function handleOpenNovaRefeicao() {
        navigation.navigate("criacao");
    }

    function handleOpenRefeicao(refeicaoData: Refeicao) {
        navigation.navigate("refeicoes", { refeicaoData });
    }

    async function fetchRefeicoes() {
        try {
            setIsLoading(true);
            const refeicoesData = await refeicoesGetAll();
            const dataFormada = FormatData(refeicoesData);
            setRefeicoes(refeicoesData);
            setRefeicoesDataSectionList(dataFormada);
        } catch (error) {
            console.log(error);
            Alert.alert("Refeicões", "Não foi possível carregar as refeições.");
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchRefeicoes();
    }, []));

    return (
        <Container>
            <Content>
                <Header />

                <Percent
                    percent={percentage}
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
                    {
                        isLoading ? <Loading /> :

                            <SectionList
                                style={{ maxHeight: 350 }}
                                showsVerticalScrollIndicator={false}
                                sections={refeicoesDataSectionList}
                                keyExtractor={(item) => item.name}
                                renderSectionHeader={({ section: { title } }) => (
                                    <TitleSectionList>{title}</TitleSectionList>
                                )}
                                ListEmptyComponent={<ListEmpty message="Não há nenhuma refeição cadastrada" />}
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
                                            type={item.healthyFood ? "PRIMARY" : "SECONDARY"}
                                        />
                                    </ContainerSectionList>
                                }
                            />
                    }
                </ContainerList>
            </Content>
        </Container>
    );
}
