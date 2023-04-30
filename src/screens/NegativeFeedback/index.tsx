import { useNavigation } from "@react-navigation/native";

import { Container, Content, TextBold, TextFeedback } from "./styles";
import { BackHomeButton } from "@components/BackHomeButton";
import illustrationImage from "@assets/negativeIllustration.png";
import { Illustration } from "@components/Illustration";
import { TitleFeedback } from "@components/TitleFeedback";

export function NegativeFeedback() {
    const navigation = useNavigation();

    function handleBackHome() {
        navigation.navigate("home");
    }
    
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

                <BackHomeButton 
                    onPress={handleBackHome}
                />
            </Content>
        </Container>
    );
}
