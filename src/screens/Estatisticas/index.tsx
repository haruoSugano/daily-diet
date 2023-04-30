import { useNavigation } from "@react-navigation/native";

import { BackgroundTypeStyleProps, Container, Content, InfoContainer, SubTitle } from "./styles";
import { Header } from "@components/Header";
import { PercentText } from "@components/PercentText";
import { Sequence } from "@components/Sequence";
import { Info } from "@components/Info";

type Props = {
    type?: BackgroundTypeStyleProps;
}

export function Estatisticas({ type = "PRIMARY" }: Props) {

    const navigation = useNavigation();

    function handleBackHome() {
        navigation.navigate("home");
    }

    return (
        <Container
            type={type}
        >
            <Header
                showBackButton={true}
                onPress={handleBackHome}
            />

            <PercentText
                percent={90.86}
                text="das refeições dentro da dieta"
            />

            <Content>
                <SubTitle>
                    Estatísticas gerais
                </SubTitle>

                <Sequence
                    total={22}
                    text="melhor sequeência de pratos dentro da dieta"
                />

                <Sequence
                    total={109}
                    text="refeições registradas"
                />

                <InfoContainer>
                    <Info
                        total={99}
                        text="refeições dentro da dieta"
                    />
                    <Info
                        total={10}
                        text="refeições fora da dieta"
                        type="SECONDARY"
                    />
                </InfoContainer>
            </Content>
        </Container>
    );
}
