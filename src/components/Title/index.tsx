import { ArrowIcon, BackButton, Container, TitleText } from "./styles";

export function Title() {
    return(
        <Container>
            <BackButton>
                <ArrowIcon />
            </BackButton>
            
            <TitleText>
                Nova refeição
            </TitleText>
        </Container>
    );
}
