import { BackHomeButton } from "@components/BackHomeButton";
import { Container, Content, TextBold, TextFeedback } from "./styles";
import illustrationImage from "@assets/positiveIllustration.png";
import { Illustration } from "@components/Illustration";
import { TitleFeedback } from "@components/TitleFeedback";

export function PositiveFeedback() {
    return (
        <Container>
            <Content>
                <TitleFeedback 
                    title="Continue assim!"
                />

                <TextFeedback>
                    Você continua <TextBold>dentro da dieta.</TextBold> Muito bem!
                </TextFeedback>

                <Illustration 
                    source={illustrationImage}
                />

                <BackHomeButton />
            </Content>
        </Container>
    );
}
