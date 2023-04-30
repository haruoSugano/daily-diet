import { TouchableOpacityProps } from "react-native";
import { Container, HomeButton, TitleButton } from "./styles";

type Props = TouchableOpacityProps;

export function BackHomeButton({ ...rest }: Props) {
    return(
        <Container>
            <HomeButton
                {...rest}
            >
                <TitleButton>
                    Ir para a página inicial
                </TitleButton>
            </HomeButton>
        </Container>
    );
}
