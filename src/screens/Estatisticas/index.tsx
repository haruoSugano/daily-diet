import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { BackgroundTypeStyleProps, Container, Content, InfoContainer, SubTitle } from "./styles";
import { Header } from "@components/Header";
import { PercentText } from "@components/PercentText";
import { Sequence } from "@components/Sequence";
import { Info } from "@components/Info";
import { refeicoesGetAll } from "@storage/refeicao/refeicoesGetAll";
import { RefeicaoStorageDTO } from "@storage/refeicao/RefeicaoStorageDTO";
import { CalculatePercent, Negative, Positive, SequenceDiet } from "@utils/Functions";

type Props = {
    type?: BackgroundTypeStyleProps;
}

type Refeicao = RefeicaoStorageDTO;

export function Estatisticas() {
    const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
    const percentage = CalculatePercent(refeicoes);
    const refeicoesDentroDieta = Positive(refeicoes);
    const refeicoesForaDieta = Negative(refeicoes);
    const sequenceDient = SequenceDiet(refeicoes);
    const navigation = useNavigation();

    function handleBackHome() {
        navigation.navigate("home");
    }

    async function fetchRefeicoes() {
        try {
            const refeicoesData = await refeicoesGetAll();
            setRefeicoes(refeicoesData);
        } catch (error) {
            console.log(error);
            Alert.alert("Refeicões", "Não foi carregar as informações corretas.");
        } finally {
        }
    }

    useFocusEffect(useCallback(() => {
        fetchRefeicoes();
    }, []));

    return (
        <Container
            type={percentage > 50 ? "PRIMARY" : "SECONDARY"}
        >
            <Header
                type={percentage > 50 ? "PRIMARY" : "SECONDARY"}
                showBackButton={true}
                onPress={handleBackHome}
            />

            <PercentText
                percent={percentage}
                text="das refeições dentro da dieta"
            />

            <Content>
                <SubTitle>
                    Estatísticas gerais
                </SubTitle>

                <Sequence
                    total={sequenceDient}
                    text="melhor sequeência de pratos dentro da dieta"
                />

                <Sequence
                    total={refeicoes.length}
                    text="refeições registradas"
                />

                <InfoContainer>
                    <Info
                        total={refeicoesDentroDieta}
                        text="refeições dentro da dieta"
                    />
                    <Info
                        total={refeicoesForaDieta}
                        text="refeições fora da dieta"
                        type="SECONDARY"
                    />
                </InfoContainer>
            </Content>
        </Container>
    );
}
