import { ArrowIcon, BackButton, Container, TitleText } from "./styles";

type Props = {
    title: string;
}

export function Title({ title }: Props) {
    return(
        <Container>
            <BackButton>
                <ArrowIcon />
            </BackButton>
            
            <TitleText>
                {title}
            </TitleText>
        </Container>
    );
}
