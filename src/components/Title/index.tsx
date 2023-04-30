import { TouchableOpacityProps } from "react-native";
import { ArrowIcon, BackButton, Container, TitleText } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Title({ title, ...rest }: Props) {
    return(
        <Container>
            <BackButton
                {...rest}
            >
                <ArrowIcon />
            </BackButton>
            
            <TitleText>
                {title}
            </TitleText>
        </Container>
    );
}
