import { Container, EditIcon, Title, TrashIcon, TypeStyleProps } from "./styles";

type Props = {
    type: TypeStyleProps;
}

export function EditRemoveButton({ type = "PRIMARY" }: Props) {
    return (
        <Container
            type={type}
        >
            {
                type === "PRIMARY" ? <EditIcon /> : <TrashIcon />
            }
            <Title
                type={type}
            >
                {
                    type === "PRIMARY" ? "Editar refeição" : "Excluir refeição"
                }
            </Title>
        </Container>
    );
}
