import { useNavigation, useRoute } from "@react-navigation/native";

import {
    Container, ContainerButton, Content, DateHourDescription,
    DateHourTitle, DescriptionText, Option, TitleText, TypeRefeicao, TypeRefeicaoText
} from "./styles";

import { Title } from "@components/Title";
import { EditRemoveButton } from "@components/EditRemoveButton";

import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";

type RouteParams = {
    refeicao: RefeicaoStorageDTO;
};

export function Refeicao() {
    const navigation = useNavigation();
    const route = useRoute();
    const {refeicao} = route.params as RouteParams;

    function handleEditRefeicao() {
        navigation.navigate("edicao");
    }

    function handleRemoveRefeicao() {
        console.log("Removeando...");
    }

    function handleBackHome() {
        navigation.navigate("home");
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
                        onPress={handleEditRefeicao}
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