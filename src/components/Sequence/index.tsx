import { Container, Description, Total } from "./styles";

type Props = {
    total: number;
    text: string;
};

export function Sequence({ total, text }: Props) {
    return (
        <Container>
            <Total>
                {total}
            </Total>
            <Description>
                {text}
            </Description>
        </Container>
    );
}
