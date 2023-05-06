import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import {
    Container, ContainerButton, Content, DateHourDescription,
    DateHourTitle, DescriptionText, Option, TitleText, TypeRefeicao, TypeRefeicaoText
} from "./styles";

import { Title } from "@components/Title";
import { EditRemoveButton } from "@components/EditRemoveButton";

import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";
import { refeicaoRemoveByName } from "@storage/refeicao/refeicaoRemoveByName";
import { useState } from "react";

type Refeicao = RefeicaoStorageDTO;

type RouteParams = {
    refeicaoData: RefeicaoStorageDTO;
};

export function Refeicao() {
    const navigation = useNavigation();
    const route = useRoute();
    const { refeicaoData } = route.params as RouteParams;

    const [refeicao, setRefeicao] = useState(refeicaoData);

    function handleBackHome() {
        navigation.navigate("home");
    }

    async function refeicaoRemove() {
        try {
            await refeicaoRemoveByName(refeicao.name);
            navigation.navigate("home");
        } catch (error) {
            console.log(error);
            Alert.alert("Remover refeição", "Não possível remover está refeição");
        }
    }

    async function handleRemoveRefeicao() {
        Alert.alert(
            "",
            "Deseja realmente excluir o registro da refeição?",
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => refeicaoRemove() }
            ]
        );
    }

    async function handleOpenEdit(refeicaoData: Refeicao) {
        navigation.navigate("edicao", { refeicaoData });
    }

    return (
        <Container>
            <Title
                title="Refeição"
                onPress={handleBackHome}
            />
            <Content>
                <TitleText>
                    {refeicao.name}
                </TitleText>

                <DescriptionText>
                    {refeicao.description}
                </DescriptionText>

                <DateHourTitle>
                    Data e hora
                </DateHourTitle>

                <DateHourDescription>
                    {`${refeicao.date} às ${refeicao.hour}`}
                </DateHourDescription>

                <TypeRefeicao>
                    <Option
                        type={refeicao.healthyFood ? "PRIMARY" : "SECONDARY"}
                    />
                    <TypeRefeicaoText>
                        {refeicao.healthyFood ? "dentro da dieta" : "fora da dieta"}
                    </TypeRefeicaoText>
                </TypeRefeicao>

                <ContainerButton>
                    <EditRemoveButton
                        type="PRIMARY"
                        onPress={() => handleOpenEdit(refeicao)}
                    />
                    <EditRemoveButton
                        type="SECONDARY"
                        onPress={handleRemoveRefeicao}
                    />
                </ContainerButton>
            </Content>
        </Container>
    );
}
