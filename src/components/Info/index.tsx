import { Container, Description, InfoTypeStyleProps, Total } from "./styles";

type Props = {
    total: number;
    text: string;
    type?: InfoTypeStyleProps;
};

export function Info({ total, text, type = "PRIMARY" }: Props) {
    return (
        <Container
            type={ type }
        >
            <Total>
                {total}
            </Total>
            <Description>
                {text}
            </Description>
        </Container>
    );
}
