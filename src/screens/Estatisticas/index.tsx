import { Header } from "@components/Header";
import { Container, Content, InfoContainer, SubTitle } from "./styles";
import { PercentText } from "@components/PercentText";
import { Sequence } from "@components/Sequence";
import { Info } from "@components/Info";

export function Estatisticas() {
    return (
        <Container>
            <Header
                showBackButton={true}
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
