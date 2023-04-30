import { TouchableOpacityProps } from "react-native";
import { Container, EditIcon, Title, TrashIcon, TypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    type: TypeStyleProps;
}

export function EditRemoveButton({ type = "PRIMARY", ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
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
