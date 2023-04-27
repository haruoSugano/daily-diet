import { Container, TextTypeStyleProps, TitleFeedbackText } from "./styles";

type Props = {
    title: string;
    type?: TextTypeStyleProps;
}

export function TitleFeedback({ title, type = "PRIMARY" }: Props) {
    return (
        <Container>
            <TitleFeedbackText
                type={type}
            >
                {title}
            </TitleFeedbackText>
        </Container>
    );
}
