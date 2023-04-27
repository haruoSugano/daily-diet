import { BackHomeButton } from "@components/BackHomeButton";
import { Container, Content, TextBold, TextFeedback } from "./styles";
import illustrationImage from "@assets/negativeIllustration.png";
import { Illustration } from "@components/Illustration";
import { TitleFeedback } from "@components/TitleFeedback";

export function NegativeFeedback() {
    return (
        <Container>
            <Content>
                <TitleFeedback 
                    type="SECONDARY"
                    title="Que pena!"
                />

                <TextFeedback>
                    Você <TextBold>saiu da dieta.</TextBold> dessa vez, mas continue se esforçando e não desista!
                </TextFeedback>

                <Illustration 
                    source={illustrationImage}
                />

                <BackHomeButton />
            </Content>
        </Container>
    );
}
