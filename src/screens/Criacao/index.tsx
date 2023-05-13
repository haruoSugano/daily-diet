import React, { useRef, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { v4 as uuidv4 } from 'uuid';

import { Container, Content, TypeStyleProps } from "./styles";

import { Title } from "@components/Title";
import { Form } from "@components/Form";
import { AppError } from "@utils/AppError";
import { refeicaCreate } from "@storage/refeicao/refeicaoCreate";

export function Criacao() {
    const [nameRefeicao, setNameRefeicao] = useState("");
    const [descriptionRefeicao, setDescriptionRefeicao] = useState("");
    const [dateRefeicao, setDateRefeicao] = useState("");
    const [hourRefeicao, setHourRefeicao] = useState("");
    const [userOptions, setUserOptions] = useState<TypeStyleProps>("DEFAULT");

    const navigation = useNavigation();

    async function handleNew() {
        try {
            const refeicao = {
                id: uuidv4(),
                date: dateRefeicao,
                hour: hourRefeicao,
                name: nameRefeicao,
                description: descriptionRefeicao,
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

            await refeicaCreate(refeicao);
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert("Nova refeição", error.message);
            } else {
                Alert.alert("Nova refeição", "Não foi possível adicionar uma nova refeição.");
                console.log(error);
            }
        }
    }

    function handleBackHome() {
        navigation.navigate("home");
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            accessible={false}
        >
            <Container>
                <Title
                    title="Nova refeição"
                    onPress={handleBackHome}
                />

                <Content>

                    <Form
                        onNameChange={setNameRefeicao}
                        onDescriptionChange={setDescriptionRefeicao}
                        onDateChange={setDateRefeicao}
                        onHourChange={setHourRefeicao}
                        onSubmit={handleNew}
                        selectedValue={userOptions}
                        onRadioChange={setUserOptions}
                    />

                </Content>
            </Container>
        </TouchableWithoutFeedback >
    );
}
