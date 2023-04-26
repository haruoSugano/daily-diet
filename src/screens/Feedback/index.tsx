import { BackHomeButton, Container, Content, Illustration, TextBold, TextFeedback, TextTypeStyleProps, TitleButton, TitleFeedback } from "./styles";
import illustrationImage from "@assets/Illustration.png";

type Props = {
    title: string;
    type?: TextTypeStyleProps;
}

export function Feedback({ title, type = "PRIMARY" }: Props) {
    return (
        <Container>
            <Content>
                <TitleFeedback
                    type={type}
                >
                    {title}
                </TitleFeedback>

                <TextFeedback>
                    Você continua <TextBold>dentro da dieta.</TextBold> Muito bem!
                </TextFeedback>

                <Illustration
                    source={illustrationImage}
                />

                <BackHomeButton>
                    <TitleButton>
                        Ir para a página inicial
                    </TitleButton>
                </BackHomeButton>
            </Content>
        </Container>
    );
}