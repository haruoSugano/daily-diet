import { ImageProps } from "react-native";
import { Container, IllustrationImage } from "./styles";

type Props = {
    source: ImageProps["source"];
}

export function Illustration({ source }: Props) {
    return (
        <Container>
            <IllustrationImage
                source={source}
            />
        </Container>
    );
}
