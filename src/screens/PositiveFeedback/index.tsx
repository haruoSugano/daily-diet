import { useNavigation } from "@react-navigation/native";

import { Container, Content, TextBold, TextFeedback } from "./styles";
import { BackHomeButton } from "@components/BackHomeButton";
import illustrationImage from "@assets/positiveIllustration.png";
import { Illustration } from "@components/Illustration";
import { TitleFeedback } from "@components/TitleFeedback";

export function PositiveFeedback() {
    const navigation = useNavigation();

    function handleBackHome() {
        navigation.navigate("home");
    }

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

                <BackHomeButton 
                    onPress={handleBackHome}
                />
            </Content>
        </Container>
    );
}
