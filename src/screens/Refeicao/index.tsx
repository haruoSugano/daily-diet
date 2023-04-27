import { Title } from "@components/Title";
import { Container, ContainerButton, Content, DateHourDescription, DateHourTitle, DescriptionText, Option, TitleText, TypeRefeicao, TypeRefeicaoText } from "./styles";
import { EditRemoveButton } from "@components/EditRemoveButton";

export function Refeicao() {
    return (
        <Container>
            <Title
                title="Refeição"
            />
            <Content>
                <TitleText>
                    Sanduíche
                </TitleText>

                <DescriptionText>
                    Sanduíche de pão integral com atum e salada de alface e tomate.
                </DescriptionText>

                <DateHourTitle>
                    Data e hora
                </DateHourTitle>

                <DateHourDescription>
                    12/08/2022 às 16:00
                </DateHourDescription>

                <TypeRefeicao>
                    <Option
                        type="PRIMARY"
                    />
                    <TypeRefeicaoText>
                        dentro da dieta
                    </TypeRefeicaoText>
                </TypeRefeicao>

                <ContainerButton>
                    <EditRemoveButton
                        type="PRIMARY"
                    />
                    <EditRemoveButton
                        type="SECONDARY"
                    />
                </ContainerButton>
            </Content>
        </Container>
    );
}