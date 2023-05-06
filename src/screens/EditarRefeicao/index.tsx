import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Content } from "./styles";
import { Form } from "@components/Form";
import { Title } from "@components/Title";
import { TypeStyleProps } from "@components/Form/styles";

import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";
import { refeicaoUpdate } from "@storage/refeicao/refeicaoUpdate";

type RouteParams = {
    refeicaoData: RefeicaoStorageDTO;
};

export function EditarRefeicao() {
    const navigation = useNavigation();
    const route = useRoute();
    const { refeicaoData } = route.params as RouteParams;

    const [nameRefeicao, setNameRefeicao] = useState(refeicaoData.name);
    const [descriptionRefeicao, setDescriptionRefeicao] = useState(refeicaoData.description);
    const [dateRefeicao, setDateRefeicao] = useState(refeicaoData.date);
    const [hourRefeicao, setHourRefeicao] = useState(refeicaoData.hour);
    const [userOptions, setUserOptions] = useState<TypeStyleProps>(refeicaoData.healthyFood === true ? "PRIMARY" : "SECONDARY");

    async function handleEdit(refeicao: RefeicaoStorageDTO) {
        refeicao = {
            id: refeicaoData.id,
            name: nameRefeicao,
            description: descriptionRefeicao,
            date: dateRefeicao,
            hour: hourRefeicao,
            healthyFood: userOptions === "PRIMARY" ? true : false,
        }

        switch (userOptions) {
            case "PRIMARY":
                navigation.navigate("positiveFeedback");
                break;
            case "SECONDARY":
                navigation.navigate("negativeFeedback");
                break;
            default:
                return Alert.alert("Nova refeição", "Por favor selecione se está dentro da dieta");
        }

        await refeicaoUpdate(refeicao);
    }

    function handleBackHome() {
        navigation.navigate("home");
    }

    return (
        <Container>
            <Title
                title="Editar refeição"
                onPress={handleBackHome}
            />
            <Content>
                <Form
                    refeicao={refeicaoData}
                    onNameChange={setNameRefeicao}
                    onDescriptionChange={setDescriptionRefeicao}
                    onDateChange={setDateRefeicao}
                    onHourChange={setHourRefeicao}
                    onSubmit={() => handleEdit(refeicaoData)}
                    selectedValue={userOptions}
                    onRadioChange={setUserOptions}
                />
            </Content>
        </Container>
    );
}
