import { Container, HomeButton, TitleButton } from "./styles";

export function BackHomeButton() {
    return(
        <Container>
            <HomeButton>
                <TitleButton>
                    Ir para a página inicial
                </TitleButton>
            </HomeButton>
        </Container>
    );
}
