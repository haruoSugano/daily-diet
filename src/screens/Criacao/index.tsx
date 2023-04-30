import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, TypeStyleProps } from "./styles";

import { Title } from "@components/Title";
import { TouchableOpacityProps } from "react-native";
import { Form } from "@components/Form";

type Props = TouchableOpacityProps & {
    name: string;
    description: string;
    date: string;
    type?: TypeStyleProps;
};

export function Criacao() {
    const [nameRefeicao, setNameRefeicao] = useState("");
    const [descriptionRefeicao, setDescriptionRefeicao] = useState("");
    const [dateRefeicao, setDateRefeicao] = useState("");
    const [hourRefeicao, setHourRefeicao] = useState("");
    const [userOptions, setUserOptions] = useState<TypeStyleProps>("DEFAULT");

    const navigation = useNavigation();

    function handleNew() {
        console.log("Adicionando...");

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
    }

    function handleBackHome() {
        navigation.navigate("home");
    }

    return (
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
    );
}
